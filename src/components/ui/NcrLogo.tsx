import React from 'react';

interface NcrLogoProps {
  className?: string;
  accentDot?: boolean;
}

/**
 * Vector recreation of the official No Clue Robotics geometric '?' mark
 * from NCR Logo Single.png, enabling crisp rendering on dark/translucent glass surfaces.
 */
export const NcrMarkSvg: React.FC<NcrLogoProps> = ({
  className = 'w-8 h-8',
  accentDot = false,
}) => {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Upper C-hook of the geometric question mark */}
      <path
        d="M28 22H106L98 84H20L22.5 64H80.5L83 42H25.5L28 22Z"
        fill="currentColor"
      />
      {/* Lower square dot of the geometric question mark */}
      <path
        d="M17 96H37L34.5 116H14.5L17 96Z"
        fill={accentDot ? '#C4FF01' : 'currentColor'}
      />
    </svg>
  );
};
