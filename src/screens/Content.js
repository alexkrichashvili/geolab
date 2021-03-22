import styles from '../css-modules/Content.module.css';
import mainImg from '../photos/Group 187.png'
import { Link, Route, Switch, useHistory } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';


export default function Content(){
     return(
         <div>
             <Header/>
             
             <div className={styles.imgDiv}>
             <img className={styles.mainImg} src={mainImg}/>
             </div>
            
         
         <div className={styles.textWrapper}>
             <h1 className={styles.title1}>ჩვენი მისია</h1>
<div className = {styles.text1}>
    <p>ახალგაზრდა კომპოზიტორებისა და განსაკუთრებული ნიჭის შემსრულებლების მხარდაჭერა
       ალექსი მაჭავარიანის კომპოზიტორთა საერთაშორისო კონკურსის დაარსება.
       ქართული მუსიკის პოპულარიზაცია საქართველოში და მის ფარგლებს გარეთ.
       პროფესიული მუსიკალური ღონისძებების ორგანიზება და მათი მხარდაერა.
       საერთაშორისო ახალგაზრდული სიმფონიური ორკესტრის დაარსება.
    </p>

</div>
<div className = {styles.text2}>
<p>
    მუსიკალური ფესტივალის დაარსება.
    ქართველი კომპოზიტოერების დაზიანებული მუსიკის აღდგენა.
    ძველი ქართული მუსიკალური შედევრების აუდიო და ვიდეო ნიმუსების აღდგენა.
    დავიწყებული ქართული მუსიკალური შედევრების აღორძინება.
    საქართველოში უცნობი მუსიკალური შედევრების პრეზენტაცია.
    ქართველი და უცხოელი ახალგაზრდა მუსიკოსების კავსირი მუსიკის საშუალებით.
</p>

</div>
<div>
    
</div>
         </div>
         <Footer/>
         </div>
        
     )
}