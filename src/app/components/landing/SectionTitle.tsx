import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <h2 className={`fb-heading fb-section-title ${className}`}>
      {children}
    </h2>
  );
}