import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LenguaProvider } from "./context/LenguaProvider";
import { HomePage } from "./components/Home/HomePage";
import { ExperienciaMaradona } from "./components/ExperienciaMaradona/ExperienciaMaradona";
import { Contact } from "./components/Contact/Contact";
import { Nosotros } from "./components/Nosotros/Nosotros";
import { Footer } from "./components/Footer/Footer";
import { RiverExperience } from "./components/RIverExperience/RiverExperience";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={"true"}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnHover
          theme="light"
          style={{ fontSize: "1.5rem" }}
        />

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
