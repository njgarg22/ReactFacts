import Navbar from "./Components/Navbar";
import Main from "./Components/Main";

// Fragment (<>...</>) groups the two sections without an extra DOM node around them.
export default function App() {
    return (
        <>
            <Navbar />
            <Main />
        </>

    )
}