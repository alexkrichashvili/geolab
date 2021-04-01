import styles from '../css-modules/Content.module.css';
import vakhtang from '../photos/Group 185@2x.png';
import alexi from '../photos/photo_alexi@2x.png';
import { Link, Route, Switch, useHistory } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import line2 from '../photos/Line 11@2x.png'
import line3 from '../photos/Line 9@2x.png'
import arrow from  '../photos/Group 44@2x.png'


export default function Content(){
     return(
         <div>


             <Header/>
             
             
             <div className={styles.bannerSec}>
                 <div className={styles.imgDiv}>
                      <img className={styles.alexiImg} src={alexi}/>
                      <img className={styles.vakhtangImg} src={vakhtang}/>
                 </div>
                 <div className={styles.bnrText}>
                 <h1 className={styles.h1}>Alexi And Vakhtang Matchavariani</h1>
                 <h1 className={styles.h1}>Charity Foundation</h1>
                 </div>
                 <img className={styles.bnrLine} src={line3}/>
             </div>
            


         
<div className={styles.section1}>

 <div className={styles.parrentDiv}>
 <h1 className={styles.title1}>OUR MISSION</h1>
                                  <div className={styles.flex}>
                                  <div className = {styles.text1}>
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


                                <div className = {styles.text2}>
                                 <p>
                                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                sed diam
                                 </p>
                               </div>

                                  </div>
 
 </div>


 <div className = {styles.learnmoreDiv}>
 <img className = {styles.line2} src={line2}/>
  <Link className = {styles.learnMore}>LEARN MORE</Link>   
  <img className = {styles.arrow} src={arrow}/>  
 </div>
  
         
         </div>




         
<div>
    <ul className={styles.infoUl}>
        <li><Link className={styles.infoLink}>About Us</Link></li>
        <li><Link className={styles.infoLink}>Photos</Link></li>
        <li><Link className={styles.infoLink}>Team</Link></li>
    </ul>
</div>





<div className={styles.section2}>

<div className={styles.parrentDiv}>
<h1 className={styles.title1}>PROJECTS</h1>
                                 <div className={styles.projectsTxt} >
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
 <Link className = {styles.learnMore}>LEARN MORE</Link>   
 <img className = {styles.arrow} src={arrow}/>  
</div>
    
 </div>






         <Footer/>
         
         </div>
        
     )
}