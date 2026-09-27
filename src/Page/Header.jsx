// Part of the unused Page exercise in this folder. Not rendered by App.
//
// export default vs export:
// 1. A module can have only one default export but many named exports
// 2. When importing, you can name the export default whatever you want. 
// For named exports, Import must use the exact exported name
// 3. You import the export default without braces. For named exports, import it with braces
export default function Header() {
    return (
            <header className="header">
                {/* Same dev-server path caveat as Navbar: import this for a production build. */}
                <img src="src/assets/react.svg" className="nav-logo" alt="React logo" />
                <nav>
                    <ul className="nav-list">
                        <li className="nav-list-item">Pricing</li>
                        <li className="nav-list-item">About</li>
                        <li className="nav-list-item">Contact</li>
                    </ul>
                </nav>
            </header>
    )
}