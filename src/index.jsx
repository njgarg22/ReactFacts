import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

// Fragment is a React feature that lets you group multiple sibling elements without adding an 
// extra DOM node.

function Page() {
    return (
        // Instead of importing Fragment, you can use the shorthand <></>
        <>
            <header>
                <img src="src/assets/react.svg" width="40px" alt="React logo" />
            </header>
            <main>
                <h1>Reason I am excited to learn React</h1>
                <ol>
                    <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
                    <li>I am more likely to get a job as a front end developer if I know React</li>
                </ol>
            </main>
            <footer>
                <small>© 2024 Ziroll development. All rights reserved.</small>
            </footer>
        </>
    )
}


root.render(<Page />)