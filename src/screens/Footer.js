import {useTranslation} from "react-i18next";
import styles from "../css-modules/Footer.module.css"
import emailIcon from "../photos/email.svg"
import youtubeIcon from "../photos/youtube.svg"
import fbIcon from "../photos/fb.svg"
import phoneIcon from "../photos/phone.svg"
import locationIcon from "../photos/location.svg"



export default function Footer(){
    const { t, i18n } = useTranslation(); 


    return(
        <div>
           <div className={styles.flex}>
               <div className={styles.email}>
                   <div className={styles.emailWrapper}>
                       <img className={styles.emailIcon} src={emailIcon} alt='emailIcon'/>
                       <p className={styles.emailAddress}>nameLastname@gmail.com</p>
                   </div>
               </div>
               <div className={styles.phone}>
                   <div className={styles.phoneWrapper}>
                       <img className={styles.phoneIcon} src={phoneIcon} alt='phoneIcon'/>
                       <p className={styles.phoneNumber}>5425435644</p>
                   </div>
               </div>
               <div className={styles.location}>
                   <div className={styles.locationWrapper} >
                       <img className={styles.locationIcon} src={locationIcon} alt='ocationIcon'/>
                       <p className={styles.locationTxt}>{t("Location Street")}</p>
                   </div>
               </div>
               <div className={styles.socialMedia}>
                   <div className={styles.socialMediaWrapper}>
                       <a
                        className={styles.fbLink}
                        href='https://www.facebook.com/' 
                        target="_blank">
                          <img
                          className={styles.fbIcon}  
                          src={fbIcon} 
                          alt='fbIcon'/>
                          </a>
                       <a 
                       className={styles.youtubeLink}
                       href='https://www.youtube.com/' 
                       target="_blank">
                          <img  
                          className={styles.youtubeIcon}
                          src={youtubeIcon} 
                          alt='youtubeIcon'/>
                          </a> 
                       <p className={styles.socialMediaTxt}>{t("Social Media")}</p>
                   </div>
               </div>
           </div>
        </div>
    )

}