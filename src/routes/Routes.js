import {
    BrowserRouter as Router,
      Switch,
      Route,
      Link,
      useParams,
      useHistory 
  } 
from "react-router-dom";
import Abio from "../screens/alex/Abio";
import Vbio from "../screens//vakhtang/Vbio";
import Vphotos from "../screens/vakhtang/Vphotos";
import Aphotos from "../screens/alex/Aphotos";
import Header from "../screens/Header";
import Contact from "../screens/contact/Contact";
import Projects from "../screens/projects/Projects";
import Apresse from "../screens/alex/Apresse";
import Vpresse from "../screens/vakhtang/Vpresse";
import Vmanuscripts from "../screens/vakhtang/Vmanuscripts";
import Amanuscripts from "../screens/alex/Amanuscripts";
import Main from "../screens/Main";
import Foundation from "../screens/foundation/Foundation";

export default function Routes(){


    return(
        <div>
        <Switch>
       <Route path="/main/alexi">
           <Abio/> 
           <Aphotos/>
           <Apresse/>
           <Amanuscripts/>
      </Route>
       <Route path="/main/vakhtang">
           <Vbio/>
           <Vphotos/>
           <Vpresse/>
           <Vmanuscripts/>
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
       <Route path="/main">
          <Main/>
       </Route>
     </Switch>
        </div>
    )
}