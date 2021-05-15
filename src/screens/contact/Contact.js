import { useTranslation } from "react-i18next";
import styles from "./Contact.module.css";
import emailIcon from "./email.svg";
import phoneIcon from "./smartphone.svg";
import markIcon  from "./placeholder.svg"
import emailjs from 'emailjs-com';
import Map from "./Map";
import {useContext} from "react";
import langContext from "../../langContext";







export default function Contact(){
    const {t} = useTranslation();

    let {lang} = useContext(langContext);
    let font = '';
  
    if(lang === 'en'){
       font = 'poppins';
    }else if(lang === 'ka'){
       font = 'ninobold';
    }


    function sendEmail(e){

        e.preventDefault();

        emailjs.sendForm("gmail", "template_9hksedj", e.target, "user_j0k849wBMGHVCLl5C66gN") 
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    } 

return(
    <div>


       <h1 className={`${styles.headline} ${font}`}>{t('Contact')}</h1>
       <div className={styles.emailBox}>
           <img className={styles.emailIcon} src={emailIcon} alt='emailIcon'/>
           <h5 className={styles.exampleEmail}>Namelastname@gmail.com</h5>


           <form onSubmit = {sendEmail}>
       
            <input
            className={styles.name}
            type = 'text' 
            name = 'name'
            placeholder ={t('Your Name')}
            >
            </input>
       
        
            <input
            className={styles.lastName}
            type = 'text' 
            name = 'lastname'
            placeholder ={t('Your Lastname')}
            >
            </input>
       
        
            <input
            className={styles.email}
            type = 'email' 
            name = 'email'
            placeholder ={t('Your Email')}
            >
            </input>
       
       
            <textarea
            className={styles.message}
            name = 'message'
            placeholder ={t('Your message...')}
            />
           
        
       
            <button 
            className={`${styles.sendBtn} ${font}`}
            type = "submit"
            value='send'
            >
                {t('send')}
            </button>
       

        
        
    </form>

       </div>



       <div className={styles.contactDiv}>
           <div className={styles.phoneDiv}>
               <img src={phoneIcon}/>
               <h1 className={styles.phoneNumber}>0322674839</h1>
           </div>


           <div className={styles.locationDiv}>
               <img  src={markIcon}/>
               <h1 className={`${styles.streetName} ${font}`}>{t('Location Street')}</h1>

           </div>
           
           
           
       </div>
       <Map/>
    </div>
)
}