import * as React from "react";

type BadgeVariant = "default" | "secondary" | "outline" | "destructive";

const variantClasses: Record<BadgeVariant, string> = {
  default: "border-transparent bg-gray-900 text-white",
  secondary: "border-transparent bg-gray-100 text-gray-900",
  outline: "border-gray-200 text-gray-900",
  destructive: "border-transparent bg-red-600 text-white",
};

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

function Badge({ className = "", variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
}

export { Badge };
