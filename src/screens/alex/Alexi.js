import { useTranslation } from 'react-i18next';
import styles from './Alexi.module.css';
import Header from '../Header';
import Footer from '../Footer';
import alexi from './Group 191.png';
import line from '../../photos/Line 8@2x.png';
import { Link } from 'react-router-dom';
import line1 from '../../photos/Line 11@2x.png';
import arrow from '../../photos/Group 44@2x.png';
import photo1 from './12@2x.png';
import photo2 from './13@2x.png';
import photo3 from './27@2x.png';
import photo4 from './31@2x.png';
import photo5 from './32@2x.png';
import photo6 from './33@2x.png';
import photo7 from './61@2x.png';
import photo8 from './70@2x.png';
import manuscript1 from '../../photos/Match119@2x.png';
import manuscript2 from '../../photos/Match121@2x.png';
import React, { useContext } from 'react';
import langContext from '../../langContext';

export default function Alexi() {
     let { lang } = useContext(langContext);

     const { t, i18n } = useTranslation();

     let font = '';

     if (lang === 'en') {
          font = 'poppins';
     } else if (lang === 'ka') {
          font = 'ninobold';
     }
     return (
          <div>
               <div className={styles.bannerSection}>
                    <div className={styles.banner}>
                         <img
                              className={styles.alexi}
                              src={alexi}
                              alt="Vakhtang-foto"
                         />

                         <div className={`${styles.name} ${font}`}>
                              <h1>{t('Alexi Matchavariani')}</h1>
                              <img
                                   className={styles.line}
                                   src={line}
                                   alt="line"
                              />
                         </div>
                    </div>
               </div>

               <div className={styles.bioSection}>
                    <div className={styles.parrentDiv}>
                         <h1 className={`${styles.title1} ${font}`}>
                              {t('BIOGRAPHY')}
                         </h1>
                         <div className={`${styles.bioTxt} ${font}`}>
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
                                   Lorem ipsum dolor sit amet.
                              </p>
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
                                   Lorem ipsum dolor sit amet. sad consetetur
                                   sadipscing elitr, sed diam nonumy eirmod
                                   tempor
                              </p>
                         </div>
                    </div>

                    <div className={styles.learnmoreDiv}>
                         <img className={styles.line1} src={line1} />
                         <Link
                              to="/main/alexi/biography/1"
                              className={`${styles.learnMore} ${font}`}
                         >
                              {t('LEARN MORE')}
                         </Link>
                         <img className={styles.arrow} src={arrow} />
                    </div>
               </div>

               <div className={styles.photoSection}>
                    <div className={styles.parrentDiv}>
                         <h1 className={`${styles.title1} ${font}`}>
                              {t('PHOTOS')}
                         </h1>
                         <div className={`${styles.flex} ${styles.photos1}`}>
                              <img src={photo1} alt="photo1" />
                              <img src={photo2} alt="photo2" />
                              <img src={photo3} alt="photo3" />
                              <img src={photo4} alt="photo4" />
                         </div>
                         <div className={`${styles.flex} ${styles.photos2}`}>
                              <img src={photo5} alt="photo5" />
                              <img src={photo6} alt="photo6" />
                              <img src={photo7} alt="photo7" />
                              <img src={photo8} alt="photo8" />
                         </div>
                    </div>

                    <div className={styles.learnmoreDiv2}>
                         <img className={styles.line2} src={line1} />
                         <Link
                              to="/main/alexi/photos"
                              className={`${styles.learnMore2} ${font}`}
                         >
                              {t('LEARN MORE')}
                         </Link>
                         <img className={styles.arrow2} src={arrow} />
                    </div>
               </div>

               <div className={styles.presseSection}>
                    <div className={styles.parrentDiv3}>
                         <h1 className={`${styles.title3} ${font}`}>
                              {t('PRESSE')}
                         </h1>
                         <div className={`${styles.presseTxt} ${font}`}>
                              <p>
                                   1) ...ed diam nrat, sed diam voluptua. At
                                   vero eos et accusam et justo duo dolores et
                                   ea rebum. Stet clita kasd gubergren, no sea
                                   takimata sanctus est Lorem ipsum dolor sit
                                   amet. Lorem ipsum dolor sit amet, consetetur
                                   sadipscing elitr, sed diam nonumy eirmod
                                   tempor invidunt ut labore et dolore magna
                                   aliquyam erat, sed diam voluptua. At vero eos
                                   et accusam et justo duo dolores et ea rebum.
                                   Stet clita kasd gubergren, no sea takimata
                                   sanctus est Lorem ipsum dolor sit amet.
                              </p>
                              <p>
                                   2) ...Lorem sed consetetur sadipscing elitr,
                                   sed diam nonumy eirmod tempor invidunt ut
                                   labore et dolore magna aliquyam erat, sed
                                   diam voluptua. At vero eos et accusam et
                                   justo duo dolores et ea rebum. Stet clita
                                   kasd gubergren, no sea takimata sanctus est
                                   Lorem ipsum dolor sit amet.
                              </p>
                              <p>
                                   3) ...Lorem ipsum dolor sit amet, invidunt ut
                                   labore et dolore magna aliquyam erat, sed
                                   diam voluptua. At vero eos et accusam et
                                   justo duo dolores et ea rebum. Stet clita
                                   kasd gubergren, no sea takimata sanctus est
                                   Lorem ipsum dolor sit amet. Lorem ipsum dolor
                                   sit amet, consetetur sadipscing elitr, sed
                                   diam nonumy eirmod tempor invidunt ut labore
                                   et dolore magna aliquyam erat, sed diam
                                   voluptua. At vero eos et accusam et justo duo
                                   dolores et ea rebum. Stet clita kasd
                                   gubergren, no sea takimata sanctus est Lorem
                                   ipsum dolor sit amet.
                              </p>
                              <p>
                                   4) ...Lorem ipsum dolor sit amet, consetetur
                                   sadipscing elitr, sed diam nonumy eirmod
                              </p>
                              <p>
                                   5) ...Lorem ipsum dolor sit amet, consetetur
                                   sadipscing elitr, sed diam nonumy eirmod
                                   tempor\
                              </p>
                         </div>
                    </div>

                    <div className={styles.learnmoreDiv3}>
                         <img className={styles.line3} src={line1} />
                         <Link
                              to="/main/alexi/presse/1"
                              className={`${styles.learnMore3} ${font}`}
                         >
                              {t('LEARN MORE')}
                         </Link>
                         <img className={styles.arrow3} src={arrow} />
                    </div>
               </div>

               <div className={styles.manuscriptsSec}>
                    <div className={styles.parrentDiv4}>
                         <h1 className={`${styles.title4} ${font}`}>
                              {t('MANUSCRIPTS')}
                         </h1>
                         <div className={styles.manucriptsWrapper}>
                              <div>
                                   <img src={manuscript1}></img>
                                   <h2>Name #1</h2>
                                   <p>
                                        The study of the writing in surviving
                                        manuscripts
                                   </p>
                              </div>
                              <div>
                                   <img src={manuscript2}></img>
                                   <h2>Name #2</h2>
                                   <p>
                                        The study of the writing in surviving
                                        manuscripts
                                   </p>
                              </div>
                         </div>
                    </div>

                    <div className={styles.learnmoreDiv4}>
                         <img className={styles.line4} src={line1} />
                         <Link
                              to="/main/alexi/manuscripts"
                              className={`${styles.learnMore4} ${font}`}
                         >
                              {t('LEARN MORE')}
                         </Link>
                         <img className={styles.arrow4} src={arrow} />
                    </div>
               </div>

               <div className={styles.samplesSec}>
                    <div className={styles.parrentDiv5}>
                         <h1 className={`${styles.title5} ${font}`}>
                              {t('AUDIO & VIDEO SAMPLES')}
                         </h1>
                         <div className={`${styles.hsamplesWrapper} ${font}`}>
                              <div className={styles.txtWrapper1}>
                                   <h5>Concert Recording.</h5>
                                   <p>R. Wagner: Overture to opera “Rienzi”.</p>
                                   <p>
                                        M. Ravel: “Daphnis & Chloe”, 2-d suite.
                                   </p>
                                   <p>
                                        I. Stravinsky: “Le Sacre du Printemps”.
                                   </p>
                                   <p>
                                        Vakhtang Matchavariani and the “Moscow
                                        Festival Orchestra” at the big concert
                                        hall of the Tchaikovsky state
                                        conservatory in Moscow .
                                   </p>
                                   <p>
                                        Vakhtang Matchavariani Principal
                                        Conductor & General Music Director of
                                        M.F.O.
                                   </p>
                              </div>
                              <div className={styles.txtWrapper2}>
                                   <h5>Jazz Recording (at home)</h5>
                                   <p>My funny Valentine</p>
                                   <p>Some day my prince will come</p>
                                   <p>Who can I turn to</p>
                              </div>
                              <div className={styles.txtWrapper3}>
                                   <h5>Melodia Label</h5>
                                   <p>
                                        Alexi Matchavariani. Ballet “The Knight
                                        in the tiger skin”. Grand Suite.
                                        Prologue, Kadji, Fiest, Freske, Quartet,
                                        Kadji, Magic, War, Finale – epilogue.
                                   </p>
                              </div>
                         </div>
                    </div>

                    <div className={styles.learnmoreDiv5}>
                         <img className={styles.line5} src={line1} />
                         <Link
                              to="/main/alexi/audiovideo"
                              className={`${styles.learnMore5} ${font}`}
                         >
                              {t('LEARN MORE')}
                         </Link>
                         <img className={styles.arrow5} src={arrow} />
                    </div>
               </div>
          </div>
     );
}
