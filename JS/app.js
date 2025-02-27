
//import Header from "../components/header.js";

/*function Main()
{
    return (
        <main className="main">
            <p>HIIIIIIIIIIIIII</p>
            <p>I'm the dev joel</p>
            <p>a game developer</p>
        </main>
    )
}

function Footer() {
    return (
        <footer>
            <p>© 2025 Joel Dev</p>
        </footer>
    );
}

async function App() {
    const {default: Header} = await import("../components/header.js");

    return (
        <div className="home-grid">
            <Header />
            <Main/>
            <Footer/>
        </div>
    );
}*/
// React DOM CDN
import MainPage from  "/components/main_page.jsx";
import {createRoot} from "react-dom/client";
import {createElement} from "react";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(createElement(MainPage));



