import { FantasyButton } from "./FantasyButton";

interface StickyCtaProps {
    onRequestBox: () => void;
}

export function StickyCta({ onRequestBox }: StickyCtaProps) {
    return (
        <div className="fb-sticky-cta">
            <FantasyButton variant="sticky" onClick={onRequestBox}>
                Request your box
            </FantasyButton>
        </div>
    );
}