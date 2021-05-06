import { Link } from "react-router-dom";
import styles from '../css-modules/Header.module.css'




export default function Header(){


    return(
    <div className={styles.header}>   
        <div className = {styles.container}>
            <div className={styles.logodiv} >
            <Link className={styles.logo} to="/">M.fund</Link>
            </div>
                        
            <nav>
                <ul className = {styles.navUl}>
                    <li className = {styles.navLi1}>
                        <Link className={styles.navLink1}  to="/main/alexi">ALEXI</Link>
                        <ul className={styles.subNav1}>
                               <li><Link to="/main/alexi/biography" className={styles.subNavLink}>Biography</Link></li>
                               <li><Link to="/main/alexi/photos" className={styles.subNavLink}>Photos</Link></li>
                               <li><Link to="/main/alexi/manuscripts" className={styles.subNavLink}>Manuscripts</Link></li>
                               <li><Link to="/main/alexi/presse/1" className={styles.subNavLink}>Presse</Link></li>
                               <li><Link to="/main/alexi/audio-video" className={styles.subNavLink}>Audio & Video Samples</Link></li>
                        </ul>
                    </li>
                    <li className = {styles.navLi2}>
                        <Link className={styles.navLink2} to="/main/vakhtang">VAKHTANG</Link>
                        <ul className={styles.subNav2}>
                               <li><Link to='/main/vakhtang/biography' className={styles.subNavLink}>Biography</Link></li>
                               <li><Link to='/main/vakhtang/photos' className={styles.subNavLink}>Photos</Link></li>
                               <li><Link to='/main/vakhtang/manuscripts' className={styles.subNavLink}>Manuscripts</Link></li>
                               <li><Link to='/main/vakhtang/presse/1' className={styles.subNavLink}>Presse</Link></li>
                               <li><Link to='/main/vakhtang/audio-video' className={styles.subNavLink}>Audio & Video Samples</Link></li>
                        </ul>
                    </li>
                    <li className = {styles.navLi3}>
                        <Link className={styles.navLink3} to="/main/foundation">FOUNDATION</Link>
                        <ul className={styles.subNav3}>
                               <li><Link className={styles.subNavLink}>About Us</Link></li>
                               <li><Link className={styles.subNavLink}>Photos</Link></li>
                               <li><Link className={styles.subNavLink}>Team</Link></li>
                        </ul>
                    </li>
                    <li className = {styles.navLi4}>
                        <Link className={styles.navLink4} to="/main/projects">PROJECTS</Link>
                    </li>
                    <li className = {styles.navLi5}>
                        <Link className={styles.navLink5} to="/main/contact">CONTACT</Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.languages}>eng/geo</div>
        </div>
</div>        
        
    )
}