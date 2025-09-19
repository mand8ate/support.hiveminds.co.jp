import { useState, useEffect, useCallback } from "react";
import { type SanityDocument } from "next-sanity";

// Helper function to fetch from our API route
async function fetchFromSanity(query: string, params = {}) {
  const response = await fetch('/api/sanity', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, params }),
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }

  return response.json();
}

interface Author {
  _id: string;
  name: string;
  slug?: {
    current: string;
  };
}

interface Category {
  _id: string;
  title: string;
  slug?: {
    current: string;
  };
}

interface BlogPost extends SanityDocument {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  body?: any; // Block content type
  author?: Author;
  mainImage?: {
    asset: {
      _ref: string;
      url?: string;
    };
    hotspot?: any;
  };
  categories?: Category[];
}

interface BlogsFilters {
  categories?: string[]; // Array of category IDs
  author?: string; // Author ID
  searchTerm?: string;
  dateFrom?: string;
  dateTo?: string;
}

interface PaginationParams {
  page: number;
  limit: number;
}

interface UseBlogsDataReturn {
  posts: BlogPost[];
  totalCount: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  currentPage: number;
  totalPages: number;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  loadMore: () => Promise<void>;
}

interface UseBlogsDataParams {
  pagination?: PaginationParams;
  filters?: BlogsFilters;
  enableAutoLoad?: boolean;
}

// Build dynamic GROQ query based on filters
function buildPostsQuery(filters: BlogsFilters = {}, pagination: PaginationParams) {
  const conditions = ['_type == "post"', 'defined(slug.current)'];
  
  if (filters.categories && filters.categories.length > 0) {
    const categoryFilter = filters.categories.map(id => `"${id}" in categories[]._ref`).join(' || ');
    conditions.push(`(${categoryFilter})`);
  }
  
  if (filters.author) {
    conditions.push(`author._ref == "${filters.author}"`);
  }
  
  if (filters.searchTerm) {
    conditions.push(`title match "*${filters.searchTerm}*"`);
  }
  
  if (filters.dateFrom) {
    conditions.push(`publishedAt >= "${filters.dateFrom}"`);
  }
  
  if (filters.dateTo) {
    conditions.push(`publishedAt <= "${filters.dateTo}"`);
  }
  
  const whereClause = conditions.join(' && ');
  const start = (pagination.page - 1) * pagination.limit;
  const end = start + pagination.limit - 1;
  
  return `*[${whereClause}]|order(publishedAt desc)[${start}...${end}]{
    _id, 
    title, 
    slug, 
    publishedAt,
    author->{
      _id,
      name,
      slug
    },
    mainImage{
      asset->{
        _ref,
        url
      },
      hotspot
    },
    categories[]->{
      _id,
      title,
      slug
    },
    body
  }`;
}

// Count query for total posts
function buildCountQuery(filters: BlogsFilters = {}) {
  const conditions = ['_type == "post"', 'defined(slug.current)'];
  
  if (filters.categories && filters.categories.length > 0) {
    const categoryFilter = filters.categories.map(id => `"${id}" in categories[]._ref`).join(' || ');
    conditions.push(`(${categoryFilter})`);
  }
  
  if (filters.author) {
    conditions.push(`author._ref == "${filters.author}"`);
  }
  
  if (filters.searchTerm) {
    conditions.push(`title match "*${filters.searchTerm}*"`);
  }
  
  if (filters.dateFrom) {
    conditions.push(`publishedAt >= "${filters.dateFrom}"`);
  }
  
  if (filters.dateTo) {
    conditions.push(`publishedAt <= "${filters.dateTo}"`);
  }
  
  const whereClause = conditions.join(' && ');
  return `count(*[${whereClause}])`;
}

export function useBlogsData(params: UseBlogsDataParams = {}): UseBlogsDataReturn {
  const {
    pagination = { page: 1, limit: 12 },
    filters = {},
    enableAutoLoad = true
  } = params;

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(pagination.page);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const totalPages = Math.ceil(totalCount / pagination.limit);
  const hasNextPage = currentPage < totalPages;
  const hasPrevPage = currentPage > 1;

  // Create stable references for comparison
  const filtersString = JSON.stringify(filters);
  const paginationString = JSON.stringify(pagination);

  const fetchPosts = useCallback(async (page: number, append: boolean = false) => {
    try {
      setLoading(true);
      setError(null);
      
      const paginationParams = { page, limit: pagination.limit };
      const postsQuery = buildPostsQuery(filters, paginationParams);
      const countQuery = buildCountQuery(filters);
      
      const [fetchedPosts, count] = await Promise.all([
        fetchFromSanity(postsQuery),
        fetchFromSanity(countQuery)
      ]);
      
      if (append) {
        setPosts(prev => [...prev, ...fetchedPosts]);
      } else {
        setPosts(fetchedPosts);
      }
      
      setTotalCount(count);
      setCurrentPage(page);
    } catch (err) {
      console.error("Error fetching blog posts:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch blog posts");
    } finally {
      setLoading(false);
    }
  }, [pagination.limit, filtersString]); // Use string references

  const refetch = useCallback(() => {
    return fetchPosts(1, false);
  }, [fetchPosts]);
  
  const loadMore = useCallback(() => {
    if (hasNextPage) {
      return fetchPosts(currentPage + 1, true);
    }
    return Promise.resolve();
  }, [fetchPosts, hasNextPage, currentPage]);

  // Single useEffect with stable dependencies
  useEffect(() => {
    if (enableAutoLoad) {
      fetchPosts(pagination.page, false);
    }
  }, [enableAutoLoad, pagination.page, filtersString, paginationString]); // Remove fetchPosts from dependencies

  return {
    posts,
    totalCount,
    hasNextPage,
    hasPrevPage,
    currentPage,
    totalPages,
    loading,
    error,
    refetch,
    loadMore,
  };
}

// Additional hook for fetching a single blog post by slug
export function useBlogPost(slug: string) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    let isCancelled = false;

    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);

        const POST_QUERY = `*[
          _type == "post" 
          && slug.current == $slug
        ][0]{
          _id,
          title,
          slug,
          publishedAt,
          body,
          author->{
            _id,
            name,
            slug
          },
          mainImage{
            asset->{
              _ref,
              url
            },
            hotspot
          },
          categories[]->{
            _id,
            title,
            slug
          }
        }`;

        const fetchedPost = await fetchFromSanity(POST_QUERY, { slug });
        
        if (!isCancelled) {
          setPost(fetchedPost);
        }
      } catch (err) {
        if (!isCancelled) {
          console.error("Error fetching blog post:", err);
          setError(err instanceof Error ? err.message : "Failed to fetch blog post");
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };

    fetchPost();

    return () => {
      isCancelled = true;
    };
  }, [slug]); // Only depend on slug

  return {
    post,
    loading,
    error,
  };
}

// Hook to fetch all categories for filter dropdowns
export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isCancelled = false;

    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError(null);

        const CATEGORIES_QUERY = `*[_type == "category"]|order(title asc){
          _id,
          title,
          slug
        }`;

        const fetchedCategories = await fetchFromSanity(CATEGORIES_QUERY);
        
        if (!isCancelled) {
          setCategories(fetchedCategories);
        }
      } catch (err) {
        if (!isCancelled) {
          console.error("Error fetching categories:", err);
          setError(err instanceof Error ? err.message : "Failed to fetch categories");
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };

    fetchCategories();

    return () => {
      isCancelled = true;
    };
  }, []); // Empty dependency array - this should only run once

  return {
    categories,
    loading,
    error,
  };
}

// Hook to fetch all authors for filter dropdowns
export function useAuthors() {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        setLoading(true);
        setError(null);

        const AUTHORS_QUERY = `*[_type == "author"]|order(name asc){
          _id,
          name,
          slug
        }`;

        const fetchedAuthors = await fetchFromSanity(AUTHORS_QUERY);
        setAuthors(fetchedAuthors);
      } catch (err) {
        console.error("Error fetching authors:", err);
        setError(err instanceof Error ? err.message : "Failed to fetch authors");
      } finally {
        setLoading(false);
      }
    };

    fetchAuthors();
  }, []);

  return {
    authors,
    loading,
    error,
  };
}
