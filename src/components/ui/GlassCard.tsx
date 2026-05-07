import React from "react";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

const GlassCard = ({ children, className = "" }: GlassCardProps) => {
  return <div className={`glass ${className}`}>{children}</div>;
};

export default GlassCard;
