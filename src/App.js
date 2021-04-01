import {
  BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory 
} 
from "react-router-dom";
import './App.css';
import Routes from "./routes/Routes";




function App() {
  return (
    <Router>
<div className="App">    
     <Routes/>    
</div>
    </Router>
    
  );
}

export default App;
