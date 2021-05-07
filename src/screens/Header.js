import {useTranslation} from "react-i18next";
import { Link } from "react-router-dom";
import styles from '../css-modules/Header.module.css'




export default function Header(){
    const { t, i18n } = useTranslation(); 
    function changeLanguageENG(){
        i18n.changeLanguage('en')
    }


    function changeLanguageGEO(){
        i18n.changeLanguage('ka')
    }


    return(
    <div className={styles.header}>   
        <div className = {styles.container}>
            <div className={styles.logodiv} >
            <Link className={styles.logo} to="/">M.fund</Link>
            </div>
                        
            <nav>
                <ul className = {styles.navUl}>
                    <li className = {styles.navLi1}>
                        <Link className={styles.navLink1}  to="/main/alexi">{t('ALEXI')}</Link>
                        <ul className={styles.subNav1}>
                               <li><Link to="/main/alexi/biography/1" className={styles.subNavLink}>{t('Biography')}</Link></li>
                               <li><Link to="/main/alexi/photos" className={styles.subNavLink}>{t('Photos')}</Link></li>
                               <li><Link to="/main/alexi/manuscripts" className={styles.subNavLink}>{t('Manuscripts')}</Link></li>
                               <li><Link to="/main/alexi/presse/1" className={styles.subNavLink}>{t('Presse')}</Link></li>
                               <li><Link to="/main/alexi/audio-video" className={styles.subNavLink}>{t('Audio & Video Samples')}</Link></li>
                        </ul>
                    </li>
                    <li className = {styles.navLi2}>
                        <Link className={styles.navLink2} to="/main/vakhtang">{t('VAKHTANG')}</Link>
                        <ul className={styles.subNav2}>
                               <li><Link to='/main/vakhtang/biography/1' className={styles.subNavLink}>{t('Biography')}</Link></li>
                               <li><Link to='/main/vakhtang/photos' className={styles.subNavLink}>{t('Photos')}</Link></li>
                               <li><Link to='/main/vakhtang/manuscripts' className={styles.subNavLink}>{t('Manuscripts')}</Link></li>
                               <li><Link to='/main/vakhtang/presse/1' className={styles.subNavLink}>{t('Presse')}</Link></li>
                               <li><Link to='/main/vakhtang/audio-video' className={styles.subNavLink}>{t('Audio & Video Samples')}</Link></li>
                        </ul>
                    </li>
                    <li className = {styles.navLi3}>
                        <Link className={styles.navLink3} to="/main/foundation">{t('FOUNDATION')}</Link>
                        <ul className={styles.subNav3}>
                               <li><Link to='/main/foundation' className={styles.subNavLink}>{t('About Us')}</Link></li>
                               <li><Link to='/main/foundation' className={styles.subNavLink}>{t('Photos')}</Link></li>
                               <li><Link to='/main/foundation' className={styles.subNavLink}>{t('Team')}</Link></li>
                        </ul>
                    </li>
                    <li className = {styles.navLi4}>
                        <Link className={styles.navLink4} to="/main/projects">{t('PROJECTS')}</Link>
                    </li>
                    <li className = {styles.navLi5}>
                        <Link className={styles.navLink5} to="/main/contact">{t('CONTACT')}</Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.languages}>
                <a onClick={changeLanguageENG}>ENG</a>
                <span>/</span>
                <a onClick={changeLanguageGEO}>GEO</a>
            </div>
        </div>
</div>        
        
    )
}