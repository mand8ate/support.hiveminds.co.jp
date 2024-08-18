import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

interface Props {
  polygon: {
    color?: string;
  };
  line: {
    color?: string;
    height: string;
  };
  circle: {
    color?: string;
  };
  hexagon: {
    color: string;
    image?: string;
  };
  arrow: {
    visible: boolean;
  };
}

export const SVGImages = {
  triangle: () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
      triggerOnce: false,
      threshold: 0.5,
      onChange: (inView) => {
        if (inView) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
    });

    return (
      <motion.svg
        ref={ref}
        viewBox="0 0 596 522"
        fill="none"
        initial="hidden"
        animate={controls}
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.g
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
        >
          <path
            d="M277.646 11.5C286.498 -3.83334 308.63 -3.83333 317.483 11.5L459.255 257.056L386.254 290.441C370.863 256.841 336.939 233.5 297.564 233.5C258.491 233.5 224.786 256.485 209.232 289.671L135.499 257.706L277.646 11.5Z"
            fill="#FE9607"
          />
          <text
            x="297"
            y="150"
            fill="black"
            fontSize="24"
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            <tspan x="297">Digital</tspan>
            <tspan x="297" dy="30">
              Solution
            </tspan>
          </text>
        </motion.g>
        <motion.g
          initial={{ opacity: 0, y: 50, x: -50 }}
          animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
        >
          <path
            d="M203.388 305.666L126.943 272.525L3.11573 487C-5.73697 502.333 5.3289 521.5 23.0343 521.5H290.564V428.253C239.984 424.664 200.064 382.494 200.064 331C200.064 322.237 201.22 313.745 203.388 305.666Z"
            fill="#FFBB00"
          />
          <text
            x="150"
            y="450"
            fill="black"
            fontSize="24"
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            Consulting
          </text>
        </motion.g>
        <motion.g
          initial={{ opacity: 0, y: 50, x: 50 }}
          animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
        >
          <path
            d="M307.564 427.993V521.5H572.094C589.8 521.5 600.866 502.333 592.013 487L467.793 271.845L391.966 306.522C393.989 314.344 395.064 322.546 395.064 331C395.064 381.472 356.714 422.986 307.564 427.993Z"
            fill="#FE6E07"
          />
          <text
            x="460"
            y="450"
            fill="black"
            fontSize="24"
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            <tspan x="460">Events</tspan>
          </text>
        </motion.g>

        <motion.g
          initial={{ opacity: 0, scale: 0.3 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{
            delay: 0.1,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
        >
          <path
            d="M381 331C381 376.84 343.84 414 298 414C252.16 414 215 376.84 215 331C215 285.16 252.16 248 298 248C343.84 248 381 285.16 381 331Z"
            fill="white"
          />
          <text
            x="298"
            y="320"
            fill="black"
            fontSize="24"
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            <tspan x="298">Brand</tspan>
            <tspan x="298" dy="30">
              Support
            </tspan>
          </text>
        </motion.g>
      </motion.svg>
    );
  },
  polygon: (props: Props["polygon"]) => {
    const color =
      props?.color === "light"
        ? "rgba(162, 89, 255, 0.5)"
        : props?.color === "dark"
          ? "rgba(162, 89, 255, 0.2)"
          : `rgba(${props?.color})`;

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
  lineLeftGreen: (props: Props["line"]) => {
    const { height, color } = props;

    return (
      <svg
        width="22"
        viewBox="0 0 22 501"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${height} w-auto`}
      >
        <path
          d="M2.97372 216.366L11 211.732L19.0263 216.366V225.634L11 230.268L2.97372 225.634V216.366Z"
          stroke="#0ACF83"
          strokeWidth="3"
        />
        <rect
          x="8"
          y="229"
          width="6"
          height="272"
          fill="url(#paint0_linear_189_69)"
        />
        <rect x="8" width="6" height="212" fill="url(#paint1_linear_189_69)" />
        <defs>
          <linearGradient
            id="paint0_linear_189_69"
            x1="11"
            y1="229"
            x2="11"
            y2="501"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0ACF83" />
            <stop offset="1" stopColor="#0ACF83" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_189_69"
            x1="11"
            y1="0"
            x2="11"
            y2="212"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0ACF83" stopOpacity="0" />
            <stop offset="1" stopColor="#0ACF83" />
          </linearGradient>
        </defs>
      </svg>
    );
  },
  lineLeftBlue: (props: Props["line"]) => {
    const { height, color } = props;

    return (
      <svg
        width="22"
        viewBox="0 0 22 501"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${height} w-auto`}
      >
        <path
          d="M2.97372 216.366L11 211.732L19.0263 216.366V225.634L11 230.268L2.97372 225.634V216.366Z"
          stroke="#1ABCFE"
          strokeWidth="3"
        />
        <rect
          x="8"
          y="229"
          width="6"
          height="272"
          fill="url(#paint0_linear_189_70)"
        />
        <rect x="8" width="6" height="212" fill="url(#paint1_linear_189_70)" />
        <defs>
          <linearGradient
            id="paint0_linear_189_70"
            x1="11"
            y1="229"
            x2="11"
            y2="501"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1ABCFE" />
            <stop offset="1" stopColor="#1ABCFE" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_189_70"
            x1="11"
            y1="0"
            x2="11"
            y2="212"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1ABCFE" stopOpacity="0" />
            <stop offset="1" stopColor="#1ABCFE" />
          </linearGradient>
        </defs>
      </svg>
    );
  },
  lineLeftViolet: (props: Props["line"]) => {
    const { height, color } = props;

    return (
      <svg
        width="22"
        viewBox="0 0 22 501"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${height} w-auto`}
      >
        <path
          d="M2.97372 216.366L11 211.732L19.0263 216.366V225.634L11 230.268L2.97372 225.634V216.366Z"
          stroke="#A45CFF"
          strokeWidth="3"
        />
        <rect
          x="8"
          y="229"
          width="6"
          height="272"
          fill="url(#paint0_linear_189_68)"
        />
        <rect x="8" width="6" height="212" fill="url(#paint1_linear_189_68)" />
        <defs>
          <linearGradient
            id="paint0_linear_189_68"
            x1="11"
            y1="229"
            x2="11"
            y2="501"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A259FF" />
            <stop offset="1" stopColor="#A259FF" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_189_68"
            x1="11"
            y1="0"
            x2="11"
            y2="212"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A259FF" stopOpacity="0" />
            <stop offset="1" stopColor="#A259FF" />
          </linearGradient>
        </defs>
      </svg>
    );
  },
  gradientCircleGreen: (props: Props["circle"]) => {
    const color =
      props?.color === "light"
        ? "rgba(10, 207, 131, 1)"
        : "rgba(10, 207, 131, 0.6)";

    return (
      <svg viewBox="0 0 925 925" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="462.5"
          cy="462.5"
          r="462.5"
          fill="url(#paint0_radial_84_70)"
        />
        <circle
          cx="463"
          cy="463"
          r="104.5"
          stroke={color}
          strokeOpacity="0.15"
          strokeWidth="3"
        />
        <circle
          cx="463"
          cy="463"
          r="55.5"
          stroke={color}
          strokeOpacity="0.15"
          strokeWidth="3"
        />
        <circle
          cx="463"
          cy="463"
          r="139.5"
          stroke={color}
          strokeOpacity="0.15"
          strokeWidth="3"
        />
        <defs>
          <radialGradient
            id="paint0_radial_84_70"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(463 463) rotate(90.062) scale(462)"
          >
            <stop stopColor={color} stopOpacity="0.8" />
            <stop offset="0.59" stopColor="#82FACC" stopOpacity="0.2" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    );
  },
  gradientCircleViolet: (props: Props["circle"]) => {
    const color =
      props?.color === "light"
        ? "rgba(162, 89, 255, 1)"
        : "rgba(162, 89, 255, 0.6)";

    return (
      <svg viewBox="0 0 925 925" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="462.5"
          cy="462.5"
          r="462.5"
          fill="url(#paint0_radial_84_70)"
          fillOpacity="0.8"
        />
        <circle
          cx="463"
          cy="463"
          r="104.5"
          stroke={color}
          strokeOpacity="0.15"
          strokeWidth="3"
        />
        <circle
          cx="463"
          cy="463"
          r="55.5"
          stroke={color}
          strokeOpacity="0.15"
          strokeWidth="3"
        />
        <circle
          cx="463"
          cy="463"
          r="139.5"
          stroke={color}
          strokeOpacity="0.15"
          strokeWidth="3"
        />
        <defs>
          <radialGradient
            id="paint0_radial_84_70"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(462.5 462.5) rotate(90) scale(462.5)"
          >
            <stop stopColor={color} />
            <stop offset="0.76" stopColor="#8850CF" stopOpacity="0.24" />
            <stop offset="1" stopColor={color} stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    );
  },
  gradientCircleBlue: (props: Props["circle"]) => {
    const color =
      props?.color === "light"
        ? "rgba(26, 188, 254, 1)"
        : "rgba(26, 188, 254, 0.6)";

    return (
      <svg viewBox="0 0 925 925" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="462.5"
          cy="462.5"
          r="462.5"
          fill="url(#paint0_radial_84_70)"
        />
        <circle
          cx="463"
          cy="463"
          r="104.5"
          stroke={color}
          strokeOpacity="0.15"
          strokeWidth="3"
        />
        <circle
          cx="463"
          cy="463"
          r="55.5"
          stroke={color}
          strokeOpacity="0.15"
          strokeWidth="3"
        />
        <circle
          cx="463"
          cy="463"
          r="139.5"
          stroke={color}
          strokeOpacity="0.15"
          strokeWidth="3"
        />
        <defs>
          <radialGradient
            id="paint0_radial_84_70"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(462.5 462.5) rotate(90) scale(462.5)"
          >
            <stop stopColor="#7FD6F9" />
            <stop offset="0.755" stopColor={color} stopOpacity="0.245" />
            <stop offset="1" stopColor={color} stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    );
  },
  hexagon: (props: Props["hexagon"]) => {
    const { color, image } = props;
    const useColor = color === "primary" ? "#FF9900" : "#000000";

    return (
      <svg
        viewBox="0 0 229 261"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[120px] w-[120px] overflow-hidden sm:h-[180px] sm:w-[180px] md:h-[250px] md:w-[250px] lg:h-[300px] lg:w-[300px]"
      >
        <defs>
          <clipPath id="hexagonClip">
            <path
              d="M113.941 8.13397C114.25 7.95534 114.631 7.95534 114.941
              8.13398L220.029 68.8066C220.338 68.9853 220.529 69.3154 220.529
              69.6726V191.018C220.529 191.375 220.338 191.705 220.029
              191.884L114.941 252.557C114.631 252.735 114.25 252.735 113.941
              252.557L8.85254 191.884C8.54314 191.705 8.35254 191.375 8.35254
              191.018V69.6726C8.35254 69.3154 8.54314 68.9853 8.85254
              68.8066L113.941 8.13397Z"
            />
          </clipPath>
        </defs>
        <g clipPath="url(#hexagonClip)">
          <image
            href={image}
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
          />
        </g>
        <path
          d="M113.941 8.13397C114.25 7.95534 114.631 7.95534 114.941 8.13398L220.029 68.8066C220.338 68.9853 220.529 69.3154 220.529 69.6726V191.018C220.529 191.375 220.338 191.705 220.029 191.884L114.941 252.557C114.631 252.735 114.25 252.735 113.941 252.557L8.85254 191.884C8.54314 191.705 8.35254 191.375 8.35254 191.018V69.6726C8.35254 69.3154 8.54314 68.9853 8.85254 68.8066L113.941 8.13397Z"
          stroke={useColor}
          strokeWidth="10"
        />
      </svg>
    );
  },
  arrow: (props: Props["arrow"]) => {
    const visible = props.visible;

    return (
      <svg
        width="17"
        height="14"
        viewBox="0 0 17 14"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <path d="M17 7L0.5 13.9282L0.5 0.0717969L17 7Z" fill="#0ACF83" />
      </svg>
    );
  },
};
