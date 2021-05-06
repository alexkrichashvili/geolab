import styles from "./Vphotos.module.css";
import Header from "../Header";

import portreit1 from "./Gallery/13@2x.png"
import portreit2 from "./Gallery/10@2x.png"
import portreit3 from "./Gallery/18@2x.png"
import portreit4 from "./Gallery/19@2x.png"
import portreit5 from "./Gallery/14@2x.png"
import portreit6 from "./Gallery/15@2x.png"
import portreit7 from "./Gallery/16@2x.png"
import portreit8 from "./Gallery/17@2x.png"

import photo1 from "./Gallery/1@2x.png"
import photo2 from "./Gallery/2@2x.png"
import photo3 from "./Gallery/3@2x.png"
import photo4 from "./Gallery/4@2x.png"
import photo5 from "./Gallery/9@2x.png"
import photo6 from "./Gallery/6@2x.png"
import photo7 from "./Gallery/7@2x.png"
import photo8 from "./Gallery/8@2x.png"
import Footer from "../Footer";






export default function Vphotos(){
    return(
 <div>




         <div className={styles.nameDiv}>
             <h1>Vakhtang Matchavariani</h1>
         </div>




   <div className={styles.portreitsSection}>
        <div className={styles.parrentDiv}>
               <h1 className={styles.title1}>Portreits</h1>
               <h5 className={styles.photographerName1}>Photos By Stephane De Bourgies</h5>
               <div className={`${styles.flex} ${styles.portreits1}`}>
                                  <img src={portreit1} alt='photo1'/>
                                  <img src={portreit2} alt='photo2'/>
                                  <img src={portreit3} alt='photo3'/>
                                  <img src={portreit4} alt='photo4'/>
               </div>
               <div className={`${styles.flex} ${styles.portreits2}`}>
                                  <img src={portreit5} alt='photo5'/>
                                  <img src={portreit6} alt='photo6'/>
                                  <img src={portreit7} alt='photo7'/>
                                  <img src={portreit8} alt='photo8'/>
               </div>
        </div>
   </div>







   <div className={styles.concertosSection}>
        <div className={styles.parrentDiv2}>
               <h1 className={styles.title2}>Concertos</h1>
               <h5 className={styles.photographerName2}>Photos By Stephane De Bourgies</h5>
               <div className={`${styles.flex} ${styles.photos1}`}>
                                  <img src={photo1} alt='photo1'/>
                                  <img src={photo2} alt='photo2'/>
                                  <img src={photo3} alt='photo3'/>
                                  <img src={photo4} alt='photo4'/>
               </div>
               <div className={`${styles.flex} ${styles.photos2}`}>
                                  <img src={photo5} alt='photo5'/>
                                  <img src={photo6} alt='photo6'/>
                                  <img src={photo7} alt='photo7'/>
                                  <img src={photo8} alt='photo8'/>
               </div>
        </div>
   </div>

</div>
    )
}