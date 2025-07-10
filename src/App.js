import { Routes, Route } from "react-router-dom";

import WhyUs from "./WhyUs";
import About from "./About";
import Home from "./Home";
import Contacts from "./Contacts";

function App() {
return (
<div className="App">
<Routes>
<Route path="/" element={ <Home/> } />
<Route path="/WhyUs" element={ <WhyUs/> } />
<Route path="/About" element={ <About/> } />
<Route path="/Home" element={ <Home/> } />
<Route path="/Contacts" element={ <Contacts/> } />
</Routes>
</div>
);
}
export default App
