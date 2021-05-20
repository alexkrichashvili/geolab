import {useTranslation} from "react-i18next";
import styles from '../css-modules/Content.module.css';
import vakhtang from '../photos/Group 185@2x.png';
import alexi from '../photos/photo_alexi@2x.png';
import { Link } from "react-router-dom";
import line2 from '../photos/Line 11@2x.png';
import line3 from '../photos/Line 9@2x.png';
import arrow from  '../photos/Group 44@2x.png';
import React, {useContext} from "react";
import langContext from "../langContext";


export default function Content(){
    let {lang} = useContext(langContext);

    const { t, i18n } = useTranslation(); 
    let font = '';

    if(lang === 'en'){
       font = 'poppins';
    }else if(lang === 'ka'){
       font = 'ninobold';
    }


     return(
         <div>

             
             
             <div className={styles.bannerSec}>
                 <div className={styles.imgDiv}>
                      <img className={styles.alexiImg} src={alexi}/>
                      <img className={styles.vakhtangImg} src={vakhtang}/>
                 </div>
                 <div className={styles.bnrText}>
                      <h1 className={`${styles.h1} ${font}`}>{t('Alexi And Vakhtang Matchavariani')}</h1>
                      <h1 className={`${styles.h1} ${font}`}>{t('Charity Foundation')}</h1>
                      <img className={styles.bnrLine} src={line3}/>
                 </div>
                 
             </div>
            


         
<div className={styles.section1}>

  <div className={styles.parrentDiv}>
  <h1 className={`${styles.title1} ${font}`}>{t('OUR MISSION')}</h1>
        <div className={styles.flex}>
            <div className={`${styles.text1} ${font}`}>
                <p> 
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                </p>
                                        </div>


            <div className={`${styles.text2} ${font}`}>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    sed diam
                </p>
            </div>

        </div>
 
  </div>


 <div className = {styles.learnmoreDiv}>
      <img className = {styles.line2} src={line2}/>
      <Link to='/main/foundation' className={`${styles.learnMore} ${font}`}>{t('LEARN MORE')}</Link>   
  <img className = {styles.arrow} src={arrow}/>  
 </div>
  
         
         </div>




         
<div>
    <ul className={styles.infoUl}>
        <li><Link to='/main/projects' className={`${styles.infoLink} ${font}`}>{t('About Us')}</Link></li>
        <li><Link to='/main/vakhtang/photos' className={`${styles.infoLink} ${font}`}>{t('Photos')}</Link></li>
        <li><Link to='/main/foundation' className={`${styles.infoLink} ${font}`}>{t('Team')}</Link></li>
    </ul>
</div>





<div className={styles.section2}>

<div className={styles.parrentDiv}>
<h1 className={`${styles.title1} ${font}`}>{t('PROJECTS')}</h1>
            <div className={`${styles.projectsTxt} ${font}`} >
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                
                </p>

            </div>

</div>
<div className = {styles.learnmoreDiv}>
      <img className = {styles.line2} src={line2}/>
      <Link to='/main/projects' className={`${styles.learnMore} ${font}`}>{t('LEARN MORE')}</Link>   
      <img className = {styles.arrow} src={arrow}/>  
 </div>
    
 </div>

         
         </div>
        
     )
}