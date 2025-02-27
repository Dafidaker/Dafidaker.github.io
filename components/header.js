/*import React from "react";
import "StyleNew/globals.css"*/

/*function Header({ buttonsWithLinks }) {
    // Default buttons
    const ButtonsWithLinks = buttonsWithLinks || {
        "Home": "./index_Old.html",
        "Projects": "./R_Projects.html",
        "Contact": "./R_Contact.html",
    };

    return (
        <div className="header">
            {Object.entries(ButtonsWithLinks).map(([buttonName, url]) => (
                <a key={buttonName} href={url}>
                    {buttonName}
                </a>
            ))}
        </div>
    );
}

export default Header;*/

class Header extends React.Component
{
    constructor(props) {
        super(props);
        this.state =
        {
            ButtonsWithLinks : props || {"Home": "./index_Old.html", "Projects": "./R_Projects.html", "Contact": "./R_Contact.html",}
        }
    }

    render() {
        return (
            <div className="header">
                {Object.entries(this.ButtonsWithLinks).map(([buttonName, url]) => (
                    <a key={buttonName} href={url}>
                        {buttonName}
                    </a>
                ))}
            </div>
        )
    }
}
