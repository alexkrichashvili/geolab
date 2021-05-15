import {
    BrowserRouter as Router,
      Switch,
      Route

  } 
from "react-router-dom";
import Header from "../screens/Header";
import Contact from "../screens/contact/Contact";
import Projects from "../screens/projects-page/Projects";
import Foundation from "../screens/foundation/Foundation";
import Vakhtang from "../screens/vakhtang/Vakhtang";
import Alexi from "../screens/alex/Alexi";
import Content from "../screens/Content";
import Footer from "../screens/Footer";
import Vphotos from "../screens/vakhtang/Vphotos";
import Vmanuscripts from "../screens/vakhtang/Vmanuscripts";
import Vbio from "../screens/vakhtang/Vbio";
import Aphotos from "../screens/alex/Aphotos";
import Amanuscripts from "../screens/alex/Amanuscripts";
import Abio from "../screens/alex/Abio";
import Vpresse from "../screens/vakhtang/Vpresse";
import Apresse from "../screens/alex/Apresse";
import VaudioVideo from "../screens/vakhtang/VaudioVideo";
import AaudioVideo from "../screens/alex/AaudioVideo";



export default function Routes(){


    return(
        <div>
  <Header/>
      <Switch>

        <Route path="/main/alexi/biography">
              <Abio/>
        </Route>


        <Route path="/main/vakhtang/biography">
              <Vbio/>
        </Route>


        <Route path="/main/alexi/presse">
              <Apresse/>
        </Route> 


        <Route path="/main/vakhtang/presse">
              <Vpresse/>
        </Route> 


        <Route path="/main/vakhtang/biography">
              <Vbio/>
        </Route>


        <Route path="/main/vakhtang/manuscripts">
              <Vmanuscripts/>
        </Route>


        <Route path="/main/vakhtang/photos">
              <Vphotos/>
        </Route>
        

        <Route path="/main/vakhtang/audiovideo">
             <VaudioVideo/>
        </Route>

        <Route path="/main/alexi/audiovideo">
             <AaudioVideo/>
        </Route>
  

        <Route path="/main/alexi/presse">
      
        </Route>


        <Route path="/main/alexi/manuscripts">
              <Amanuscripts/>
        </Route>


        <Route path="/main/alexi/biography">
              <Abio/>
        </Route>


        <Route path="/main/alexi/photos">
             <Aphotos/>
        </Route>


        <Route path="/main/alexi">
              <Alexi/>
        </Route>


        <Route path="/main/vakhtang">
              <Vakhtang/>
        </Route>


        <Route path='/main/foundation'>
              <Foundation/>
        </Route>

        <Route path='/main/projects'>
              <Projects/>
        </Route>


        <Route path="/main/contact">
              <Contact/>
        </Route>


        <Route path="/">
              <Content/>
        </Route>

     </Switch>
<Footer/>
        </div>
    )
}