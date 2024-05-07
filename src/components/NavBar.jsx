import React from "react";
import {Link} from "react-router-dom";

function NavBar(){
    return(
        <nav className="navbar">
            <ul>
                <li>
                    <Link>Entertainment</Link>
                </li>
                <li>
                    <Link >Politics</Link>
                </li>
                <li>
                    <Link >Business</Link>
                </li>
                <li>
                    <Link >Sports</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;