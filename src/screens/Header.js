import {useTranslation} from "react-i18next";
import { Link, useParams, useLocation } from "react-router-dom";
import styles from '../css-modules/Header.module.css'
import { useContext, useEffect, useState} from "react";
import langContext from "../langContext";







export default function Header(){
    const { t, i18n } = useTranslation();    
    let {lang, setLang} = useContext(langContext);

    const location = useLocation()

    function changeLanguageENG(){
        i18n.changeLanguage('en');
        setLang('en');
        console.log(lang);
       
    };

    function changeLanguageGEO(){
        i18n.changeLanguage('ka');
        setLang('ka');
        console.log(lang)
        
    };


    console.log(location.pathname)
    let b = '';
    let x = '';
    let y = '';
    let z = '';
    let a = '';
    let s = '';
    let sh = '';
    let sch = '';
    let font = '';
   

if (lang === 'ka'){
        sh = 'langBtn';
        sch = 'langBtn2';
}else if(lang = 'en'){
       sch = 'langBtn';
       sh = 'langBtn2';

   }


 
switch (location.pathname) {
  case '/main/alexi':
    x = 'shadow';
    break;
  case '/main/vakhtang':
    y = 'shadow';
    break;
  case '/main/foundation':
    z = 'shadow'; 
    break;
  case '/main/projects':
        a = 'shadow';
    break;
  case '/main/contact':
            s = 'shadow';
    break;
  case '/':
      b = 'shadow';
    break;  
  default:
    
}
if(lang === 'ka'){
 font = 'ninomtavruli';
}else if(lang === 'en'){
    font = 'poppins';
}





    return(
    <div className={styles.header}>   
        <div className = {styles.container}>
            <div className = {styles.logodiv} >
            <Link className = {`${styles.logo} ${b}`} to="/">M.fund</Link>
            </div>
                        
            <nav>
                <ul className = {styles.navUl}>
                    <li className = {styles.navLi1}>
                        <Link className={`${styles.navLink1} ${x} ${font}`}  to="/main/alexi">{t('ALEXI')}</Link>
                        <ul className={styles.subNav1}>
                               <li><Link to="/main/alexi/biography/1" className={`${styles.subNavLink} ${font}`}>{t('Biography')}</Link></li>
                               <li><Link to="/main/alexi/photos" className={`${styles.subNavLink} ${font}`}>{t('Photos')}</Link></li>
                               <li><Link to="/main/alexi/manuscripts" className={`${styles.subNavLink} ${font}`}>{t('Manuscripts')}</Link></li>
                               <li><Link to="/main/alexi/presse/1" className={`${styles.subNavLink} ${font}`}>{t('Presse')}</Link></li>
                               <li><Link to="/main/alexi/audiovideo/1" className={`${styles.subNavLink} ${font}`}>{t('Audio & Video Samples')}</Link></li>
                        </ul>
                    </li>
                    <li className = {styles.navLi2}>
                        <Link className={`${styles.navLink2} ${y} ${font}`} to="/main/vakhtang">{t('VAKHTANG')}</Link>
                        <ul className={styles.subNav2}>
                               <li><Link to='/main/vakhtang/biography/1' className={`${styles.subNavLink} ${font}`}>{t('Biography')}</Link></li>
                               <li><Link to='/main/vakhtang/photos' className={`${styles.subNavLink} ${font}`}>{t('Photos')}</Link></li>
                               <li><Link to='/main/vakhtang/manuscripts' className={`${styles.subNavLink} ${font}`}>{t('Manuscripts')}</Link></li>
                               <li><Link to='/main/vakhtang/presse/1' className={`${styles.subNavLink} ${font}`}>{t('Presse')}</Link></li>
                               <li><Link to='/main/vakhtang/audiovideo/1' className={`${styles.subNavLink} ${font}`}>{t('Audio & Video Samples')}</Link></li>
                        </ul>
                    </li>
                    <li className = {styles.navLi3}>
                        <Link className={`${styles.navLink3} ${z} ${font}`} to="/main/foundation">{t('FOUNDATION')}</Link>
                        <ul className={styles.subNav3}>
                               <li><Link to='/main/foundation' className={`${styles.subNavLink} ${font}`}>{t('About Us')}</Link></li>
                               <li><Link to='/main/foundation' className={`${styles.subNavLink} ${font}`}>{t('Photos')}</Link></li>
                               <li><Link to='/main/foundation' className={`${styles.subNavLink} ${font}`}>{t('Team')}</Link></li>
                        </ul>
                    </li>
                    <li className = {styles.navLi4}>
                        <Link className={`${styles.navLink4} ${a} ${font}`} to="/main/projects">{t('PROJECTS')}</Link>
                    </li>
                    <li className = {styles.navLi5}>
                        <Link className={`${styles.navLink5} ${s} ${font}`} to="/main/contact">{t('CONTACT')}</Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.languages}>
                <a className={`${styles.lngBtn} ${sh}`} onClick={changeLanguageENG}>ENG</a>
                <span>/</span>
                <a className={`${styles.lngBtn} ${sch}`} onClick={changeLanguageGEO}>GEO</a>
            </div>
        </div>
</div>        
        
    )
}