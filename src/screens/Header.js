import { Link, Route, Switch, useHistory } from "react-router-dom";

import styles from '../css-modules/Header.module.css'

export default function Header(){


    return(
        <div className = {styles.container}>
                        <Link to="/">M.fund</Link>
            <nav>
                <ul className = {styles.navUl}>
                    <li className = {styles.navLi}>
                        <Link to="/main/alexi">ALEXI</Link>
                    </li>
                    <li className = {styles.navLi}>
                        <Link to="/main/vakhtang">VAKHTANG</Link>
                    </li>
                    <li className = {styles.navLi}>
                        <Link to="/main/foundation">FOUNDATION</Link>
                    </li>
                    <li className = {styles.navLi}>
                        <Link to="/main/projects">PROJECTS</Link>
                    </li>
                    <li className = {styles.navLi}>
                        <Link to="/main/contact">CONTACT</Link>
                    </li>
                </ul>
            </nav>
            <div>eng/geo</div>
        </div>
        
        
    )
}