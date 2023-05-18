import About from "./Components/About";
import Header from "./Components/Ui/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Estimate from "./Components/Estimate";
import Revolution from "./Components/Revolution";
import Services from "./Components/Services";
import Footer from "./Components/Ui/Footer";
import Landing from "./Components/Landing";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={() => <div><Landing/></div>} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/customsoftware"
          element={() => <div>Custom Software</div>}
        />
        <Route path="/mobileapps" element={() => <div>Mobile App</div>} />
        <Route exact path="/websites" element={() => <div>Websites</div>} />
        <Route path="/revolution" element={<Revolution />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/estimate" element={<Estimate />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
