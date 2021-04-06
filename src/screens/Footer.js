import styles from "../css-modules/Footer.module.css"
import emailIcon from "../photos/email.svg"
import youtubeIcon from "../photos/youtube.svg"
import fbIcon from "../photos/fb.svg"
import phoneIcon from "../photos/phone.svg"
import locationIcon from "../photos/location.svg"



export default function Footer(){
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
                   <div classname={styles.phoneWrapper}>
                       <img className={styles.phoneIcon} src={phoneIcon} alt='phoneIcon'/>
                       <p className={styles.phoneNumber}>5425435644</p>
                   </div>
               </div>
               <div className={styles.location}>
                   <div className={styles.locationWrapper} >
                       <img className={styles.locationIcon} src={locationIcon} alt='ocationIcon'/>
                       <p className={styles.locationTxt}>Location Street</p>
                   </div>
               </div>
               <div className={styles.socialMedia}>
                   <div className={styles.socialMediaWrapper}>
                       <img className={styles.youtubeIcon} src={youtubeIcon} alt='youtubeIcon'/>
                       <img className={styles.fbIcon} src={fbIcon} alt='fbIcon'/>
                       <p className={styles.socialMediaTxt}>Social Media</p>
                   </div>
               </div>
           </div>
        </div>
    )

}