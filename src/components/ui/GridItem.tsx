import { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { GridSpan, gridStyle } from "@/lib/gridStyle";

type GridItemProps = {
  children: ReactNode;
  className?: string;
  gridSpan?: GridSpan | undefined;
  style?: CSSProperties;
};

const GridItem = ({
  children,
  className,
  gridSpan = { default: 12 },
  style,
}: GridItemProps) => {
  return (
    <div
      className={cn("grid-item", className)}
      style={{ ...gridStyle(gridSpan), ...style }}
    >
      {children}
    </div>
  );
};

export default GridItem;
