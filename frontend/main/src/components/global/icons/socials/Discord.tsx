export default function Discord({
  className = 'block w-8 h-8',
  fill,
}: {
  className?: string;
  fill: string;
}): JSX.Element {
  return (
    <svg
      className={className}
      width={71}
      height={55}
      viewBox="0 0 71 55"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2047_16741)">
        <path
          d="M59.82 5.31733C67.7318 16.9774 71.6421 30.1098 70.2081 45.2262C64.2853 49.5587 58.548 52.2124 52.8871 53.9827C51.6639 52.2663 50.5468 50.4648 49.5574 48.5802C51.4114 47.8635 53.1804 47.0141 54.8854 46.0174C55.3424 45.7506 55.3606 45.1116 54.9515 44.807L54.9513 44.8069C54.5836 44.5334 54.2179 44.2456 53.8682 43.9573L53.8682 43.9573L53.8619 43.9522C53.6526 43.7853 53.3605 43.7414 53.1052 43.8625C41.7573 49.1044 29.3313 49.1049 17.8439 43.8601L17.8403 43.8585C17.5948 43.7488 17.3024 43.7835 17.0886 43.9602C16.7405 44.2472 16.3746 44.5325 16.0076 44.8075C15.5897 45.1192 15.6304 45.7566 16.077 46.0175L16.0805 46.0194C17.7824 46.9953 19.5513 47.862 21.4063 48.5838C20.4366 50.4688 19.3201 52.2687 18.0761 53.9835C12.4414 52.2133 6.70357 49.5595 0.78032 45.2267C-0.418934 32.1445 2.08142 18.9066 11.1562 5.31998C15.5684 3.30106 20.2903 1.80811 25.2219 0.941504C25.8175 2.01079 26.477 3.33086 26.9276 4.41358L27.0779 4.77486L27.4647 4.71574C32.7595 3.90647 38.1382 3.90624 43.5469 4.71597L43.9296 4.77326L44.081 4.41717C44.535 3.34987 45.1731 2.00769 45.7608 0.941698C50.6927 1.81062 55.4124 3.30258 59.82 5.31733ZM0.791565 45.3483L0.791242 45.3448L0.791565 45.3483ZM16.8451 30.1692C16.8451 34.3352 19.9 37.8252 23.7259 37.8252C27.6092 37.8252 30.6049 34.3342 30.6066 30.1727C30.6641 26.0298 27.6338 22.5132 23.7259 22.5132C19.8414 22.5132 16.8451 26.0062 16.8451 30.1692ZM40.4371 30.1692C40.4371 34.3352 43.492 37.8252 47.3178 37.8252C51.2305 37.8252 54.1969 34.3327 54.1986 30.1728C54.256 26.0299 51.2259 22.5132 47.3178 22.5132C43.4333 22.5132 40.4371 26.0062 40.4371 30.1692Z"
          fill="#BC2261"
          stroke="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_2047_16741">
          <rect width={71} height={55} fill={fill} />
        </clipPath>
      </defs>
    </svg>
  );
}
