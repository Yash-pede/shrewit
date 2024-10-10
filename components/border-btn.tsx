import { cn } from "@/lib/utils";
import React from "react";

const BtnMovingBorder = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={cn(
        "relative inline-flex  overflow-hidden rounded-lg p-[1px]",
        className
      )}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="btn btn-primary">{children}</span>
    </button>
  );
};

export default BtnMovingBorder;
