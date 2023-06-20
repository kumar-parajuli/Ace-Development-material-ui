import About from "./Components/About";
import Header from "./Components/Ui/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Estimate from "./Components/Estimate";
import Revolution from "./Components/Revolution";
import Services from "./Components/Services";
import Footer from "./Components/Ui/Footer";
import LandingPage from "./Components/LandingPage";
import theme from "./Components/Ui/Theme";
import { ThemeProvider } from "@mui/material";
function App() {
 
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
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
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
