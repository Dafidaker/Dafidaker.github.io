
/*function Header({buttonsWithLinks}) {
    let ButtonsWithLinks = {
        "Home": "./index_Old.html",
        "Projects": "./R_Projects.html",
        "Contact": "./R_Contact.html",
    };

    if (buttonsWithLinks !== undefined)
    {
        ButtonsWithLinks = buttonsWithLinks;
    }

    return (
        <header className="header">
            {Object.entries(ButtonsWithLinks).map(([buttonName, url]) => (
                <a href={url} >{buttonName}</a>
            ))}
        </header>
    );
}*/
import Header from "../components/header.js";

function Main()
{
    return (
        <main className="main">
            <p>HIIIIIIIIIIIIII</p>
            <p>I'm the dev joel</p>
            <p>a game developer</p>
        </main>
    )
}

// Footer Component
function Footer() {
    return (
        <footer>
            <p>© 2025 Joel Dev</p>
        </footer>
    );
}

// Main App Component
function App() {

    return (
        <div className="home-grid">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

// Render the App Component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
