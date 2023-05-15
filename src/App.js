import About from "./Components/About";
import Header from "./Components/Ui/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Estimate from "./Components/Estimate";
import Revolution from "./Components/Revolution";
import Services from "./Components/Services";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" component={() => <div>Home</div>} />
        <Route path="/services" element={<Services/>} />
        <Route
          path="/customsoftware"
          component={() => <div>Custom Software</div>}
        />
        <Route path="/mobileapps" component={() => <div>Mobile App</div>} />
        <Route exact path="/websites" component={() => <div>Websites</div>} />
        <Route path="/revolution" element={<Revolution />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/estimate" element={<Estimate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
