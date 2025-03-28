import { cn } from "@/lib/utils";

interface LiTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
}
const LiText = ({ children, className, ...props }: LiTextProps) => {
  return (
    <span
      className={cn(
        "transition-colors hover:text-foreground/80 text-foreground/60 hidden sm:flex space-x-1 ",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default LiText;
