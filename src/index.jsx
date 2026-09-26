// import { createElement } from "react"
import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))
// const reactElement = createElement("h1", null, "Hello from createElement!")
const reactElement = <h1>Hello from JSX</h1>

// {type: 'h1', key: null, props: {children: 'Hello from JSX!'}, _owner: null, _store: {}}
console.log(reactElement) // Javascript object with exact same structure like createElement()
root.render(reactElement)