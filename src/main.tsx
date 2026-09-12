import './i18n/config';
import {createRoot} from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

const rootElement = document.getElementById("root")!;

if (import.meta.env.DEV) {
    Promise.all([
        import("@react-buddy/ide-toolbox"),
        import("./dev"),
    ]).then(([{ DevSupport }, { ComponentPreviews, useInitial }]) => {
        createRoot(rootElement).render(
            <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
                <App/>
            </DevSupport>
        );
    });
} else {
    createRoot(rootElement).render(<App/>);
}
