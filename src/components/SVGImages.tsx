interface Props {
  polygon: {
    color?: string;
  };
  line: {
    color?: string;
    height: string;
  };
}

export const SVGImages = {
  polygon: (props: Props["polygon"]) => {
    const color =
      props?.color === "light"
        ? "rgba(162, 89, 255, 0.5)"
        : "rgba(162, 89, 255, 0.2)";

    return (
      <svg viewBox="0 0 722 747" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_b_71_66)">
          <path
            d="M89.7523 173.637L380.5 5.7735L671.248 173.637V509.363L380.5 677.227L89.7523 509.363V173.637Z"
            stroke={color}
            strokeWidth="6"
          />
        </g>
        <g filter="url(#filter1_b_71_66)">
          <path
            d="M50.7523 237.637L341.5 69.7735L632.248 237.637V573.363L341.5 741.227L50.7523 573.363V237.637Z"
            stroke={color}
            strokeWidth="6"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_71_66"
            x="74.7523"
            y="-10"
            width="611.495"
            height="703"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_71_66"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_71_66"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_b_71_66"
            x="35.7523"
            y="54"
            width="611.495"
            height="703"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_71_66"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_71_66"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    );
  },
  lineLeft: (props: Props["line"]) => {
    const { height, color } = props;

    return (
      <svg
        width="20"
        viewBox="0 0 20 501"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${height} w-auto`}
      >
        <rect
          x="8"
          y="229"
          width="5"
          height="272"
          fill="url(#paint0_linear_74_72)"
        />
        <rect x="8" width="5" height="212" fill="url(#paint1_linear_74_72)" />
        <circle cx="10" cy="221" r="8" stroke={color} strokeWidth="4" />
        <defs>
          <linearGradient
            id="paint0_linear_74_72"
            x1="10.5"
            y1="229"
            x2="10.5"
            y2="501"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={color} />
            <stop offset="1" stopColor={color} stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_74_72"
            x1="10.5"
            y1="0"
            x2="10.5"
            y2="212"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={color} stopOpacity="0" />
            <stop offset="1" stopColor={color} />
          </linearGradient>
        </defs>
      </svg>
    );
  },
};
