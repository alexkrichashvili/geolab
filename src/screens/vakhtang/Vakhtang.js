import styles from "./Vakhtang.module.css";
import Header from "../Header";
import Footer from "../Footer";


export default function Vakhtang(){
    return(
        <div>
            <Header/>
        <div  className={styles.contentWrapper}>
            vakhtang's page
        </div>
             <Footer/>
        </div>

    )
}