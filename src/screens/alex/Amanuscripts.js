import Header from "../Header";
import styles from "./Amanuscripts.module.css";
import manuscript1 from "./manuscripts/Match119@2x.png";
import manuscript2 from "./manuscripts/Match121@2x.png";
import manuscript3 from "./manuscripts/Match122@2x.png";
import manuscript4 from "./manuscripts/Match123@2x.png";
import manuscript5 from "./manuscripts/Match124@2x.png";
import manuscript6 from "./manuscripts/Prometheus.3@2x.png";


export default function Amanuscripts(){
    return(
<div>
   {/* <Header/>    */}
    

     <div className={styles.nameDiv}>
             <h1>Alexi Matchavariani</h1>
     </div>



     <div className={styles.manuscriptsSec}>

                <div className={styles.parrentDiv1}>
                <h1 className={styles.title}>MANUSCRIPTS</h1>
                         <div className={styles.manuscriptsWrapper} >
                              <div>
                                   <img src={manuscript1}></img>
                                   <h2 className={styles.manuscriptName}>Manuscript #1</h2>
                                   <p>The study of the writing in surviving manuscripts</p>
                              </div>
                              <div>
                                   <img src={manuscript2}></img>
                                   <h2 className={styles.manuscriptName}>Manuscript #2</h2>
                                   <p>The study of the writing in surviving manuscripts</p>
                              </div>
                         </div>
                </div>
                




                <div className={styles.parrentDiv2}>
                         <div className={styles.manuscriptsWrapper} >
                              <div>
                                   <img src={manuscript3}></img>
                                   <h2 className={styles.manuscriptName}>Manuscript #3</h2>
                                   <p>The study of the writing in surviving manuscripts</p>
                              </div>
                              <div>
                                   <img src={manuscript4}></img>
                                   <h2 className={styles.manuscriptName}>Manuscript #4</h2>
                                   <p>The study of the writing in surviving manuscripts</p>
                              </div>
                         </div>
                </div>




                <div className={styles.parrentDiv3}>
                         <div className={styles.manuscriptsWrapper} >
                              <div>
                                   <img src={manuscript5}></img>
                                   <h2 className={styles.manuscriptName}>Manuscript #5</h2>
                                   <p>The study of the writing in surviving manuscripts</p>
                              </div>
                              <div>
                                   <img src={manuscript6}></img>
                                   <h2 className={styles.manuscriptName}>Manuscript #6</h2>
                                   <p>The study of the writing in surviving manuscripts</p>
                              </div>
                         </div>
                </div>










     </div>

</div>
    )
}