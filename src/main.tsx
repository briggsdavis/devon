import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "@fontsource-variable/inter"
import "@fontsource/saira-extra-condensed/400.css"
import "@fontsource/saira-extra-condensed/600.css"
import "@fontsource/saira-extra-condensed/700.css"
import "@fontsource/saira-extra-condensed/800.css"
import App from "./app.tsx"
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
