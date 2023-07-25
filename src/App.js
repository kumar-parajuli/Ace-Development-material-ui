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
import { Website } from "./Components/Website";
import MobileApp from "./Components/MobileApp";
import { useState } from "react";
function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
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
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
