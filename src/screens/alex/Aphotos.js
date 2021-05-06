import styles from "./Aphotos.module.css";
import Header from "../Header";

import portreit1 from "./Gallery/70.png"
import portreit2 from "./Gallery/31.png"
import portreit3 from "./Gallery/61.png"
import portreit4 from "./Gallery/33.png"
import portreit5 from "./Gallery/12.png"
import portreit6 from "./Gallery/13.png"
import portreit7 from "./Gallery/27.png"
import portreit8 from "./Gallery/32.png"


import Footer from "../Footer";






export default function Aphotos(){
    return(
 <div>
         <div className={styles.nameDiv}>
             <h1>Alexi Matchavariani</h1>
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
                                  <img src={portreit1} alt='photo1'/>
                                  <img src={portreit2} alt='photo2'/>
                                  <img src={portreit3} alt='photo3'/>
                                  <img src={portreit4} alt='photo4'/>
               </div>
               <div className={`${styles.flex} ${styles.photos2}`}>
                                  <img src={portreit5} alt='photo5'/>
                                  <img src={portreit6} alt='photo6'/>
                                  <img src={portreit7} alt='photo7'/>
                                  <img src={portreit8} alt='photo8'/>
               </div>
        </div>
   </div>

</div>
    )
}