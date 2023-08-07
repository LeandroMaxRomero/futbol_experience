import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LenguaProvider } from "./context/LenguaProvider";
import { HomePage } from "./components/Home/HomePage";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Contact } from "./components/Contact/Contact";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        {/* <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          style={{ fontSize: "1.5rem" }}
        /> */}

        <LenguaProvider>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <HomePage />
                </>
              }
            />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
          <Footer />
        </LenguaProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
