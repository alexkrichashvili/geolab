import styles from './Foundation.module.css';
import foundation from '../../photos/Group 137@2x.png';
import line from '../../photos/Line 8@2x.png';
import photo1 from './LIANA, MAXIM VENGEROV, A.V.A. MATCHAVARIANI@2x.png';
import photo2 from './LALO SCHIFRIN _ VM. TBILISI@2x.png';
import photo3 from './Kent Nagano at Vakhtangs home@2x.png';
import photo4 from './Image86@2x.png';
import photo5 from './CAROLINE OF MONACO _ VM MOSCOW 2@2x.png';
import photo6 from './385509_216910265050856_100001956519416_475512_1877487036_n@2x.png';
import photo7 from './377850_216909608384255_100001956519416_475501_272459712_n@2x.png';
import photo8 from './70@2x.png';
import line2 from '../../photos/Line 11@2x.png';
import arrow from '../../photos/Group 44@2x.png';
import { Link } from 'react-router-dom';
import team1 from './Rectangle 204@2x.png';
import team2 from './Rectangle -1@2x.png';
import team3 from './Rectangle -2@2x.png';
import React, { useContext } from 'react';
import langContext from '../../langContext';
import { useTranslation } from 'react-i18next';

export default function Foundation() {
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
               <div className={styles.bannerWrapper}>
                    <div className={styles.banner}>
                         <img
                              className={styles.foundation}
                              src={foundation}
                              alt="alexi-foto"
                         />
                         <div className={`${styles.name} ${font}`}>
                              <h1>{t('Foundation')}</h1>
                              <img
                                   className={styles.line}
                                   src={line}
                                   alt="line"
                              />
                         </div>
                    </div>
               </div>

               <div className={styles.aboutUsSection}>
                    <div className={styles.parrentDiv}>
                         <h1 className={`${styles.title1} ${font}`}>
                              {t('ABOUT US')}
                         </h1>
                         <div className={`${styles.aboutTxt} ${font}`}>
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
                    <div className={styles.learnmoreDiv}>
                         <img className={styles.line2} src={line2} />
                         <Link
                              to="/main/alexi/photos"
                              className={`${styles.learnMore} ${font}`}
                         >
                              {t('LEARN MORE')}
                         </Link>
                         <img className={styles.arrow} src={arrow} />
                    </div>
               </div>

               <div className={styles.teamSection}>
                    <div className={styles.teamParrentDiv}>
                         <h1 className={`${styles.teamTitle} ${font}`}>
                              {t('TEAM')}
                         </h1>
                         <div className={styles.teamMember1}>
                              <img className={styles.teamPhoto} src={team1} />
                              <div className={`${styles.teamText} ${font}`}>
                                   <h1 className={styles.memberName}>
                                        {t('Name Lastname')}
                                   </h1>
                                   <p>
                                        A biography, or simply bio, is a
                                        detailed description of a person's life.
                                        It involves more than just the basic
                                        facts like education, work,
                                        relationships, and death; it portrays a
                                        person's experience of these life
                                        events. Unlike a profile or curriculum
                                        vitae (résumé), a biography presents a
                                        subject's life story, highlighting
                                        various aspects of his or her life,
                                        including intimate details of
                                        experience, and may include an analysis
                                        of the subject's personality
                                   </p>
                              </div>
                         </div>
                         <div className={styles.teamMember2}>
                              <img className={styles.teamPhoto} src={team2} />
                              <div className={`${styles.teamText} ${font}`}>
                                   <h1 className={styles.memberName}>
                                        {t('Name Lastname')}
                                   </h1>
                                   <p>
                                        A biography, or simply bio, is a
                                        detailed description of a person's life.
                                        It involves more than just the basic
                                        facts like education, work,
                                        relationships, and death; it portrays a
                                        person's experience of these life
                                        events. Unlike a profile or curriculum
                                        vitae (résumé), a biography presents a
                                        subject's life story, highlighting
                                        various aspects of his or her life,
                                        including intimate details of
                                        experience, and may include an analysis
                                        of the subject's personality
                                   </p>
                              </div>
                         </div>
                         <div className={styles.teamMember3}>
                              <img className={styles.teamPhoto} src={team3} />
                              <div className={`${styles.teamText} ${font}`}>
                                   <h1 className={styles.memberName}>
                                        {t('Name Lastname')}
                                   </h1>
                                   <p>
                                        A biography, or simply bio, is a
                                        detailed description of a person's life.
                                        It involves more than just the basic
                                        facts like education, work,
                                        relationships, and death; it portrays a
                                        person's experience of these life
                                        events. Unlike a profile or curriculum
                                        vitae (résumé), a biography presents a
                                        subject's life story, highlighting
                                        various aspects of his or her life,
                                        including intimate details of
                                        experience, and may include an analysis
                                        of the subject's personality
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}
