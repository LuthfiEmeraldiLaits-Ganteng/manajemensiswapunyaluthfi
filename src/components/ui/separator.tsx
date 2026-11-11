import * as React from "react";

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
}

function Separator({ className = "", orientation = "horizontal", ...props }: SeparatorProps) {
  return (
    <div
      role="separator"
      className={
        orientation === "horizontal"
          ? `h-px w-full bg-gray-200 ${className}`
          : `w-px h-full bg-gray-200 ${className}`
      }
      {...props}
    />
  );
}

export { Separator };
