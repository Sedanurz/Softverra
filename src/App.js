import { Routes, Route } from "react-router-dom";

import WhyUs from "./WhyUs";
import About from "./About";
import Home from "./Home";
import Contacts from "./Contacts";
import WhatsAppSection from "./WhatsAppSection";
import Phone from "./Phone";
import Services from "./Services";

function App() {
return (
<div className="App">
<Routes>
<Route path="/" element={ <Home/> } />
<Route path="/WhyUs" element={ <WhyUs/> } />
<Route path="/About" element={ <About/> } />
<Route path="/Home" element={ <Home/> } />
<Route path="/Contacts" element={ <Contacts/> } />
<Route path="/Services" element={ <Services/> } />
</Routes>
<WhatsAppSection />
<Phone />
</div>
);
}
export default App
