import styles from './Vpresse.module.css';
import { useState, useEffect } from 'react';
import {
     BrowserRouter as Router,
     Switch,
     Route,
     Link,
     useHistory,
} from 'react-router-dom';
import Vpresse1 from './Vpresse1';
import Vpresse2 from './Vpresse2';
import Vpresse3 from './Vpresse3';
import prev from '../../photos/navigate_prev-24px.svg';
import next from '../../photos/navigate_next-24px.svg';
import React, { useContext } from 'react';
import langContext from '../../langContext';
import { useTranslation } from 'react-i18next';

export default function Vpresse() {
     let { lang } = useContext(langContext);

     const { t, i18n } = useTranslation();
     let font = '';

     if (lang === 'en') {
          font = 'poppins';
     } else if (lang === 'ka') {
          font = 'ninobold';
     }

     let [page, setPage] = useState(1);
     const history = useHistory();

     useEffect(() => {
          history.push('/main/vakhtang/presse/' + page);
     });

     function nextBtn() {
          if (page < 3) {
               setPage(page + 1);
          }
     }

     function prevBtn() {
          if (page >= 2) {
               setPage(page - 1);
          }
     }

     return (
          <div>
               <div className={`${styles.headline} ${font}`}>
                    <h1>{t('Any Title')}</h1>
               </div>

               <Switch>
                    <Route path="/main/vakhtang/presse/1">
                         <Vpresse1 />
                    </Route>

                    <Route path="/main/vakhtang/presse/2">
                         <Vpresse2 />
                    </Route>

                    <Route path="/main/vakhtang/presse/3">
                         <Vpresse3 />
                    </Route>
               </Switch>

               <div className={styles.pageDiv}>
                    <div className={styles.prevBtn}>
                         <Link onClick={prevBtn}>
                              <img src={prev} />
                         </Link>
                    </div>
                    <div className={styles.NumbersDiv}>
                         <Link
                              className={styles.pageNumbers}
                              onClick={() => setPage(1)}
                         >
                              1
                         </Link>
                         <Link
                              className={styles.pageNumbers}
                              onClick={() => setPage(2)}
                         >
                              2
                         </Link>
                         <Link
                              className={styles.pageNumbers}
                              onClick={() => setPage(3)}
                         >
                              3
                         </Link>
                    </div>

                    <div className={styles.nextBtn}>
                         <Link onClick={nextBtn}>
                              <img src={next} />
                         </Link>
                    </div>
               </div>
          </div>
     );
}
