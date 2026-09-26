import { createRoot } from "react-dom/client"
import { createElement } from "react"

const root = createRoot(document.getElementById("root"))
const reactElement = createElement("h1", null, "Let's use createElement()")

// {type: 'h1', key: null, props: {children: 'Hello from createElement!'}, _owner: null, _store: {}}
console.log(reactElement)

// root.render(<h1>Hello from React!</h1>)
root.render(reactElement)