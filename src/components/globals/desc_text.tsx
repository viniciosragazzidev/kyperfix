import { cn } from "@/lib/utils";

interface DescTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}
const DescText = ({ children, ...props }: DescTextProps) => {
  return (
    <span
      className={cn(
        "mb-6 scroll-m-20 text-sm md:text-md text-muted-foreground dark:text-muted-foreground text-left ",
        props.className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default DescText;
