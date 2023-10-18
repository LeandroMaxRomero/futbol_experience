import "../../scss/layout/_home.scss";
import { Header } from "./Header/Header";
import { Prestaciones } from "./Prestaciones";
import { Experiencias } from "./Experiencias";
import { Reviews } from "./Reviews";
import { Atributos } from "./Atributos";
import { Entradas } from "./Entradas";
import { FAQs } from "./FAQs";
import { Reserva } from "./Reserva";
import PrestacionesSlides from "./PrestacionesSlides";
import { ReviewsTablet } from "./ReviewsTablet";
import { ReviewsMobile } from "./ReviewsMobile";
import { useEffect } from "react";
import * as Scroll from "react-scroll";

export const HomePage = () => {
  let scroll = Scroll.animateScroll;

  useEffect(() => {
    scroll.scrollToTop();
  });

  return (
    <div className="container-home">
      {/*//* Header */}
      <Header />

      {/*//* Prestaciones */}
      <Prestaciones />
      <PrestacionesSlides />

      {/*//* Experiencias */}
      <Experiencias />

      {/*//*  Reviews */}
      <Reviews />
      <ReviewsTablet />
      <ReviewsMobile />

      {/*//* Atributos */}
      <Atributos />

      {/*//* Entradas */}
      <Entradas />

      {/*//* FAQs */}
      <FAQs />

      <Reserva />
    </div>
  );
};
