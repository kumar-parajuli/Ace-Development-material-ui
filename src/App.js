import About from "./Components/About";
import Header from "./Components/Ui/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Estimate from "./Components/Estimate";
import Revolution from "./Components/Revolution";
import Services from "./Components/Services";
import Footer from "./Components/Ui/Footer";
import LandingPages from "./Components/LandingPages";
import theme from "./Components/Ui/Theme";
import { ThemeProvider } from "@mui/material/styles";
import CustomSoftware from "./Components/CustomSoftware";
import { MobileApp } from "./Components/MobileApp";
import { Website } from "./Components/Website";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPages />} />
          <Route path="/services" element={<Services />} />
          <Route path="/customsoftware" element={<CustomSoftware />} />
          <Route path="/mobileapps" element={<MobileApp />} />
          <Route exact path="/websites" element={<Website />} />
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
