import { createRoot } from "react-dom/client"
// import { Header } from "./Header"    // Works but this is named export syntax
// import Header from "./Header.jsx"    // Works but no need to mention .jsx
// import WhateverComponent from "./Header" // You can do this as well. Use <WhateverComponent />
import Header from "./Header"
import "./index.css" // If the CSS file is in src/, load it via import

const root = createRoot(document.getElementById("root"))

function Footer() {
    return (
            <footer>
                <small>© 2024 Ziroll development. All rights reserved.</small>
            </footer>
    )
}

function MainContent() {
    return (
            <main>
                <h1>Reason I am excited to learn React</h1>
                <ol>
                    <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
                    <li>I am more likely to get a job as a front end developer if I know React</li>
                </ol>
            </main>
    )
}

function Page() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}


root.render(<Page />)