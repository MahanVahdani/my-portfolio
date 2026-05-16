import { cn } from "@/lib/utils";

type GridProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Grid({ children, className }: GridProps) {
  return (
    <div className={cn("grid grid-cols-12 gap-4", className)}>{children}</div>
  );
}
