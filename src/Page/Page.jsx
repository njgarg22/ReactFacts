// Earlier exercise that composes a page from three components.
// App renders Navbar and Main instead, so this tree is not on screen.
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"

export default function Page() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}