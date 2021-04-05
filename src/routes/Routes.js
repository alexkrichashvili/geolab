import {
    BrowserRouter as Router,
      Switch,
      Route,
      Link,
      useParams,
      useHistory 
  } 
from "react-router-dom";
import Header from "../screens/Header";
import Contact from "../screens/contact/Contact";
import Projects from "../screens/projects-page/Projects";
import Main from "../screens/Main";
import Foundation from "../screens/foundation/Foundation";
import Vakhtang from "../screens/vakhtang/Vakhtang";
import Alexi from "../screens/alex/Alexi";
import Content from "../screens/Content";
import Footer from "../screens/Footer";
import Vphotos from "../screens/vakhtang/Vphotos";
import Vmanuscripts from "../screens/vakhtang/Vmanuscripts";


export default function Routes(){


    return(
        <div>
        <Switch>

        <Route path="/main/vakhtang/manuscripts">
       <Vmanuscripts/>
      </Route>

      <Route path="/main/vakhtang/photos">
       <Vphotos/>
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
        </div>
    )
}