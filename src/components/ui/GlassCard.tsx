import React from "react";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

const GlassCard = ({ children, className = "" }: GlassCardProps) => {
  return <div className={`glass glass-hover ${className}`}>{children}</div>;
};

export default GlassCard;
