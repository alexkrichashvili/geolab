import { Link, Route, Switch, useHistory } from "react-router-dom";

import styles from '../css-modules/Header.module.css'

export default function Header(){


    return(
        <div className = {styles.container}>
            <div className={styles.logodiv} >
            <Link className={styles.logo} to="/">M.fund</Link>
            </div>
                        
            <nav>
                <ul className = {styles.navUl}>
                    <li className = {styles.navLi}>
                        <Link className={styles.navLink}  to="/main/alexi">ALEXI</Link>
                    </li>
                    <li className = {styles.navLi}>
                        <Link className={styles.navLink} to="/main/vakhtang">VAKHTANG</Link>
                    </li>
                    <li className = {styles.navLi}>
                        <Link className={styles.navLink} to="/main/foundation">FOUNDATION</Link>
                    </li>
                    <li className = {styles.navLi}>
                        <Link className={styles.navLink} to="/main/projects">PROJECTS</Link>
                    </li>
                    <li className = {styles.navLi}>
                        <Link className={styles.navLink} to="/main/contact">CONTACT</Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.languages}>eng/geo</div>
        </div>
        
        
    )
}