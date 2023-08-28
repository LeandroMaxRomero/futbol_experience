import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LenguaProvider } from "./context/LenguaProvider";
import { HomePage } from "./components/Home/HomePage";
import { ExperienciaMaradona } from "./components/ExperienciaMaradona/ExperienciaMaradona";
import { Contact } from "./components/Contact/Contact";
import { Nosotros } from "./components/Nosotros/Nosotros";
import { Footer } from "./components/Footer/Footer";
import { RiverExperience } from "./components/RIverExperience/RiverExperience";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <LenguaProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/experiencia-maradona"
              element={<ExperienciaMaradona />}
            />
            <Route
              path="/experiencia-boca-river"
              element={<RiverExperience />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
          <Footer />
        </LenguaProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
