import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "@fontsource-variable/inter"
import "@fontsource/saira-extra-condensed/400.css"
import "@fontsource/saira-extra-condensed/600.css"
import "@fontsource/saira-extra-condensed/700.css"
import "@fontsource/saira-extra-condensed/800.css"
import App from "./app.tsx"
import "./index.css"

// Disable browser scroll restoration. The site uses a fake-scroll implementation
// (fixed content div + spacer) driven by a spring MotionValue. If the browser
// restores a saved scroll position AFTER the spacer gains its full height (~100ms
// after mount), the spring animates from 0 to the restored position and slides
// the content off-screen — showing only the black body background. Setting
// "manual" prevents this entirely.
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual"
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
