import styles from "./Alexi.module.css";
import Header from "../Header";
import Footer from "../Footer";


export default function Alexi(){
    return(
        <div>
            <Header/>
             <div className={styles.contentWrapper}>
            alexi's page
             </div>
             <Footer/>
        </div>

    )
}