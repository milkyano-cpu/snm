import IconWrapper from "./IconWrapper";

export default function Calendar({ className }) {
  return (
    <IconWrapper className={className}>
      <svg
        width="57"
        height="46"
        viewBox="0 0 57 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.8628 9.9223V16.388M12.9314 9.9223V16.388M4.84927 22.8537H33.9449M8.08212 13.1552H30.7121C32.4975 13.1552 33.9449 14.6025 33.9449 16.388V39.018C33.9449 40.8034 32.4975 42.2508 30.7121 42.2508H8.08212C6.29667 42.2508 4.84927 40.8034 4.84927 39.018V16.388C4.84927 14.6025 6.29667 13.1552 8.08212 13.1552Z"
          stroke="currentColor"
          strokeWidth="3.34433"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g clipPath="url(#clip0_2011_65)">
          <path
            d="M44.1459 6.35425V12.7085L48.3821 14.8266M54.7363 12.7085C54.7363 18.5574 49.9948 23.2989 44.1459 23.2989C38.297 23.2989 33.5556 18.5574 33.5556 12.7085C33.5556 6.85958 38.297 2.1181 44.1459 2.1181C49.9948 2.1181 54.7363 6.85958 54.7363 12.7085Z"
            stroke="currentColor"
            strokeWidth="2.67546"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2011_65">
            <rect
              width="25.4169"
              height="25.4169"
              fill="currentColor"
              transform="translate(31.4375)"
            />
          </clipPath>
        </defs>
      </svg>
    </IconWrapper>
  );
}
