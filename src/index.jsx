// Vite loads this module from index.html. createRoot attaches React
// to the empty #root div, and render draws the App component into it.
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App"

const root = createRoot(document.getElementById("root"))
root.render(<App />)