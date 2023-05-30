import { Tag } from "@/types/Tag";
import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

const tagVariants = cva("rounded-xl inline-block", {
  variants: {
    variant: {
      default: "bg-gray-300 py-1 px-3 dark:bg-gray-700 dark:text-gray-100 ml-1",
      colored: "text-white px-2 text-xs mr-1",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface TagProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof tagVariants> {
  tag: Tag;
}

const Button = React.forwardRef<HTMLButtonElement, TagProps>(({ tag, className, variant, ...props }, ref) => {
  const styles: React.CSSProperties = {};
  if (variant == "colored") styles["backgroundColor"] = tag.color;
  return (
    <button type="button" style={styles} className={cn(tagVariants({ variant, className }))} ref={ref} {...props}>
      {tag.title}
      <span className=""></span>
    </button>
  );
});
Button.displayName = "Tag";

export default Button;
