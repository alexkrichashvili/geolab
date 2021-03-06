import styles from './Projects.module.css';
import { useTranslation } from 'react-i18next';
import React, { useContext } from 'react';
import langContext from '../../langContext';

export default function Projects() {
     const { t, i18n } = useTranslation();

     let { lang } = useContext(langContext);
     let font = '';

     if (lang === 'en') {
          font = 'poppins';
     } else if (lang === 'ka') {
          font = 'ninobold';
     }

     return (
          <div>
               <div className={`${styles.headlineDiv} ${font}`}>
                    <h1>{t('Projects')}</h1>
               </div>

               <div className={styles.aboutUsSection}>
                    <div className={styles.parrentDiv}>
                         <h1 className={`${styles.ConcourseName1} ${font}`}>
                              {t('Concourse Name')}
                         </h1>
                         <h5 className={`${styles.spanTxt} ${font}`}>
                              {t('Contemporary business and science')}
                         </h5>
                         <h3 className={`${styles.spanTxt2} ${font}`}>
                              {t('tasks to be executed over a fixed period')}
                         </h3>
                         <div className={styles.aboutTxt}>
                              <p>
                                   Lorem ipsum dolor sit amet, consetetur
                                   sadipscing elitr, sed diam nonumy eirmod
                                   tempor invidunt ut labore et dolore magna
                                   aliquyam erat, sed diam voluptua. At vero eos
                                   et accusam et justo duo dolores et ea rebum.
                                   Stet clita kasd gubergren, no sea takimata
                                   sanctus est Lorem ipsum dolor sit amet. Lorem
                                   ipsum dolor sit amet, consetetur sadipscing
                                   elitr, sed diam nonumy eirmod tempor invidunt
                                   ut labore et dolore magna aliquyam erat, sed
                                   diam voluptua. At vero eos et accusam et
                                   justo duo dolores et ea rebum. Stet clita
                                   kasd gubergren, no sea takimata sanctus est
                                   Lorem ipsum dolor sit amet. Lorem ipsum dolor
                                   sit amet, consetetur sadipscing elitr, sed
                                   diam nonumy eirmod tempor Lorem ipsum dolor
                                   sit amet, consetetur sadipscing elitr, sed
                                   diam nonumy eirmod tempor invidunt ut labore
                                   et dolore magna aliquyam erat, sed diam
                                   voluptua. At vero eos et accusam et justo duo
                                   dolores et ea rebum. Stet clita kasd
                                   gubergren, no sea takimata sanctus est Lorem
                                   ipsum dolor sit amet. Lorem ipsum dolor sit
                                   amet, consetetur sadipscing elitr, sed diam
                                   nonumy eirmod tempor invidunt ut labore et
                                   dolore magna aliquyam erat, sed diam
                                   voluptua. At vero eos et accusam et justo duo
                                   dolores et ea rebum. Stet clita kasd
                                   gubergren, no sea takimata sanctus est Lorem
                                   ipsum dolor sit amet. Lorem ipsum dolor sit
                                   amet, consetetur sadipscing elitr, sed diam
                                   nonumy eirmod tempor
                              </p>
                         </div>
                    </div>
                    <button className={`${styles.applyButton} ${font}`}>
                         {t('apply')}
                    </button>
               </div>

               <div className={styles.aboutUsSection}>
                    <div className={styles.parrentDiv}>
                         <h1 className={`${styles.ConcourseName2} ${font}`}>
                              {t('Concourse Name')}
                         </h1>
                         <h5 className={`${styles.spanTxt} ${font}`}>
                              {t('Contemporary business and science')}
                         </h5>
                         <h3 className={`${styles.spanTxt2} ${font}`}>
                              {t('tasks to be executed over a fixed period')}
                         </h3>
                         <div className={styles.aboutTxt}>
                              <p>
                                   Lorem ipsum dolor sit amet, consetetur
                                   sadipscing elitr, sed diam nonumy eirmod
                                   tempor invidunt ut labore et dolore magna
                                   aliquyam erat, sed diam voluptua. At vero eos
                                   et accusam et justo duo dolores et ea rebum.
                                   Stet clita kasd gubergren, no sea takimata
                                   sanctus est Lorem ipsum dolor sit amet. Lorem
                                   ipsum dolor sit amet, consetetur sadipscing
                                   elitr, sed diam nonumy eirmod tempor invidunt
                                   ut labore et dolore magna aliquyam erat, sed
                                   diam voluptua. At vero eos et accusam et
                                   justo duo dolores et ea rebum. Stet clita
                                   kasd gubergren, no sea takimata sanctus est
                                   Lorem ipsum dolor sit amet. Lorem ipsum dolor
                                   sit amet, consetetur sadipscing elitr, sed
                                   diam nonumy eirmod tempor Lorem ipsum dolor
                                   sit amet, consetetur sadipscing elitr, sed
                                   diam nonumy eirmod tempor invidunt ut labore
                                   et dolore magna aliquyam erat, sed diam
                                   voluptua. At vero eos et accusam et justo duo
                                   dolores et ea rebum. Stet clita kasd
                                   gubergren, no sea takimata sanctus est Lorem
                                   ipsum dolor sit amet. Lorem ipsum dolor sit
                                   amet, consetetur sadipscing elitr, sed diam
                                   nonumy eirmod tempor invidunt ut labore et
                                   dolore magna aliquyam erat, sed diam
                                   voluptua. At vero eos et accusam et justo duo
                                   dolores et ea rebum. Stet clita kasd
                                   gubergren, no sea takimata sanctus est Lorem
                                   ipsum dolor sit amet. Lorem ipsum dolor sit
                                   amet, consetetur sadipscing elitr, sed diam
                                   nonumy eirmod tempor
                              </p>
                         </div>
                    </div>
                    <button className={`${styles.applyButton} ${font}`}>
                         {t('apply')}
                    </button>
               </div>
          </div>
     );
}
