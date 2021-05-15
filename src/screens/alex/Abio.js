import styles from './Abio.module.css';
import { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
      Switch,
      Route,
      Link,
      useHistory 
  } 
from "react-router-dom";
import Vbio1 from './Abio1';
import Vbio2 from './Abio2';
import Vbio3 from './Abio3';
import prev from '../../photos/navigate_prev-24px.svg';
import next from '../../photos/navigate_next-24px.svg';
import { useTranslation } from 'react-i18next';
import {useContext} from "react";
import langContext from "../../langContext";



export default function Vbio(){
    const {t} = useTranslation();

    let {lang} = useContext(langContext);
    let font = '';
  
    if(lang === 'en'){
       font = 'poppins';
    }else if(lang === 'ka'){
       font = 'ninobold';
    }
    

let [page, setPage] = useState(1)
const history = useHistory()




useEffect(()=>{
    history.push('/main/Alexi/biography/' + page)
}) 


function nextBtn(){
    if (page < 3){
        setPage(page + 1)
    }
}


function prevBtn(){
    if (page >= 2){
        setPage(page - 1)
    }
}


    return(
        <div>


            <div  className={`${styles.headline} ${font}`}>
                  <h1>{t('Any Title')}</h1>
            </div>


         <Switch>
             <Route path='/main/Alexi/biography/1'>
                 <Vbio1/>
             </Route>

             <Route path='/main/Alexi/biography/2'>
                 <Vbio2/>
             </Route>

             <Route path='/main/Alexi/biography/3'>
                 <Vbio3/>
             </Route>
         </Switch>


         <div className={styles.pageDiv}>
                <div className={styles.prevBtn}>
                     <Link onClick={prevBtn}><img src={prev}/></Link>
                </div>
                <div className={styles.NumbersDiv}>
                     <Link className={styles.pageNumbers} onClick={()=>setPage(1)}>1</Link>
                     <Link className={styles.pageNumbers} onClick={()=>setPage(2)}>2</Link>
                     <Link className={styles.pageNumbers} onClick={()=>setPage(3)}>3</Link>
                </div>

                <div className={styles.nextBtn}>
                    <Link  onClick={nextBtn}><img src={next}/></Link>
                </div>       
         </div>


        </div>
    )
}
