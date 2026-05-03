import React from "react";

interface FantasyButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "coffee" | "sticky";
}

export function FantasyButton({
                                  children,
                                  variant = "primary",
                                  className = "",
                                  type = "button",
                                  ...props
                              }: FantasyButtonProps) {
    const variantClassName = {
        primary: "fb-primary-button",
        secondary: "fb-secondary-button",
        coffee: "fb-coffee-button",
        sticky: "fb-sticky-button",
    }[variant];

    return (
        <button
            type={type}
            className={`${variantClassName} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}