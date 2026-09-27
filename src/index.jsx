import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

// When we style in JSX, use className and not class
// const ul = document.createElement("ul") // Vanilla JS
// ul.className = "nav-list"    // Vanilla JS
function Header() {
    return (
            <header>
                <img src="src/assets/react.svg" width="40px" alt="React logo" />
                <nav>
                    <ul className="nav-list">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
    )
}

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