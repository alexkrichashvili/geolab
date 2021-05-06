import styles from './Apresse.module.css';
import { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
      Switch,
      Route,
      Link,
      useHistory 
  } 
from "react-router-dom";
import Apresse1 from './Apresse1';
import Apresse2 from './Apresse2';
import Apresse3 from './Apresse3';
import prev from '../../photos/navigate_prev-24px.svg';
import next from '../../photos/navigate_next-24px.svg';


export default function Apresse(){
    

let [page, setPage] = useState(1)
const history = useHistory()




useEffect(()=>{
    history.push('/main/alexi/presse/' + page)
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


            <div  className={styles.headline}>
                  <h1>Any Title</h1>
            </div>


         <Switch>
             <Route path='/main/Alexi/presse/1'>
                 <Apresse1/>
             </Route>

             <Route path='/main/Alexi/presse/2'>
                 <Apresse2/>
             </Route>

             <Route path='/main/Alexi/presse/3'>
                 <Apresse3/>
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