import './i18n/config';
import {createRoot} from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import { Suspense } from 'react';

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="text-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--fb-primary)] mx-auto mb-4"></div><p>Cargando...</p></div></div>}>
    <DevSupport ComponentPreviews={ComponentPreviews}
                useInitialHook={useInitial}
    >
      <App/>
    </DevSupport>
  </Suspense>
);
