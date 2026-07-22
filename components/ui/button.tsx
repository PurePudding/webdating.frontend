import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50 no-tap-highlight",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white shadow-soft hover:bg-primary-600 active:scale-95",
        secondary:
          "bg-secondary text-white shadow-soft hover:bg-secondary-600 active:scale-95",
        accent:
          "bg-accent text-accent-900 shadow-soft hover:bg-accent-500 active:scale-95",
        outline:
          "border-2 border-primary text-primary bg-transparent hover:bg-primary-50 active:scale-95",
        ghost: "text-primary hover:bg-primary-50 active:scale-95",
        white:
          "bg-white text-primary shadow-card hover:shadow-card-hover active:scale-95",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6 text-base",
        lg: "h-14 px-8 text-lg",
        xl: "h-16 px-10 text-xl",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
