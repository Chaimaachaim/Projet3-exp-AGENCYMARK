import React from "react";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import "./App.css"
import Nav  from "./assets/Nav"
import Home from "./assets/Home/Home"
import About from "./assets/About/About"
import Feauters from "./assets/Feauters/Feauters"
import Pricing from "./assets/Pricing/Pricing"
import Contact from "./assets/Contact/Contact"
function App() {

  return(
 <div className="App">
<Router>
<Nav/>
<Switch>
  <Route path="/"exact component={Home}/>
  <Route path="/About" component={About}/>
  <Route path="/Feauters"component={Feauters}/>
  <Route path="/Pricing" component={Pricing}/>
<Route path="/Contact" component={Contact}/>
</Switch>
</Router>
 </div>
  );
};
export default App;