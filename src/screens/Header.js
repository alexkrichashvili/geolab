import { Link, Route, Switch, useHistory } from "react-router-dom";

export default function Header(){


    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/main/alexi">ALEXI</Link>
                    </li>
                    <li>
                        <Link to="/main/vakhtang">VAKHTANG</Link>
                    </li>
                    <li>
                        <Link to="/main/foundation">FOUNDATION</Link>
                    </li>
                    <li>
                        <Link to="/main/projects">PROJECTS</Link>
                    </li>
                    <li>
                        <Link to="/main/contact">CONTACT</Link>
                    </li>
                </ul>
            </nav>
        </div>
        
        
    )
}