import {createRoot} from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

createRoot(document.getElementById("root")!).render(<DevSupport ComponentPreviews={ComponentPreviews}
                                                                useInitialHook={useInitial}
>
    <App/>
</DevSupport>);
  