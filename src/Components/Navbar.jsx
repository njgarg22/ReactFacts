export default function Navbar() {
    return (
        <header>
            <nav className="navbar">
                {/* A plain string src is served by the Vite dev server.
                    Import the SVG instead for a production build, which
                    only bundles imported files and anything in public/. */}
                <img src="src/assets/react.svg" alt="React logo"/>
                <span>ReactFacts</span>
            </nav>
        </header>
    );
}