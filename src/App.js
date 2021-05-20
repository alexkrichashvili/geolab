import './i18n';
import {
  BrowserRouter as Router,

} 
from "react-router-dom";
import './App.css';
import Routes from "./routes/Routes";
import ScrollToTop from './screens/ScrollToTop';
import langContext from './langContext';
import React, { useState } from 'react';










function App() {
  let [lang, setLang] = useState('en')

 

  return (
    <Router>
  <langContext.Provider value={{lang, setLang}}>
<ScrollToTop/> 
<div className="App">    
     <Routes/>  

</div>
</langContext.Provider>

    </Router>
    
  );
}

export default App;
