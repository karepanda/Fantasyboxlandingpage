import React from "react";

interface FantasyButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "coffee" | "sticky";
}

export const FantasyButton = React.forwardRef<HTMLButtonElement, FantasyButtonProps>(
    function FantasyButton({
        children,
        variant = "primary",
        className = "",
        type = "button",
        ...props
    }, ref) {
        const variantClassName = {
            primary: "fb-primary-button",
            secondary: "fb-secondary-button",
            coffee: "fb-coffee-button",
            sticky: "fb-sticky-button",
        }[variant];

        return (
            <button
                ref={ref}
                type={type}
                className={`${variantClassName} ${className}`}
                {...props}
            >
                {children}
            </button>
        );
    },
);
