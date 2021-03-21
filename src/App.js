import {
  BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory 
} 
from "react-router-dom";
import './App.css';
import Main from "./screens/Main";




function App() {
  return (
    <Router>
<div className="App">
      
     <Main/> 
     
</div>
    </Router>
    
  );
}

export default App;
