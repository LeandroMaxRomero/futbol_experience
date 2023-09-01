import { useContext, useEffect } from "react";
import { LenguaContext } from "../../context/LenguaProvider";

import InfoExperience from "../InfoExperience/InfoExperience";
import TextGralExprience from "../TextGralExperience/TextGralExprience";
import DescriptionExperience from "../DescriptionExperience/DescriptionExperience";
import ActivitiesExperience from "../ActivitiesExperience/ActivitiesExperience";
/* import ImagesExperience from "../ImagesExperience/ImagesExperience"; */
import ReserveExperience from "../ReserveExperience/ReserveExperience";
import CuriosityExperience from "../CuriosityExpererience/CuriosityExperience";
import { CommonHeader } from "../CommonHeader/CommonHeader";
import { Slider } from "../Slider/Slider";
import * as Scroll from "react-scroll";
import { maradonaContent } from "../../data/data";

export const ExperienciaMaradona = () => {
  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();

  let scroll = Scroll.animateScroll;

  useEffect(() => {
    scroll.scrollToTop();
  });

  return (
    <>
      <CommonHeader
        ownStyle={"header-maradona"}
        experienceTittleES={"Experiencia Maradona"}
        experienceTittleEN={"Maradona Experience"}
        image={"img/Home-Exp-Marado.png"}
      />
      <div className="maradona-container">
        <InfoExperience
          content={
            lang === "castellano"
              ? maradonaContent.spanish.infoExperience
              : maradonaContent.english.infoExperience
          }
        />
        <TextGralExprience
          content={
            lang === "castellano"
              ? maradonaContent.spanish.textExperience
              : maradonaContent.english.textExperience
          }
        />

        <DescriptionExperience
          content={
            lang === "castellano"
              ? maradonaContent.spanish.descriptionExperience
              : maradonaContent.english.descriptionExperience
          }
        />
        <ActivitiesExperience
          content={
            lang === "castellano"
              ? maradonaContent.spanish.activitiesExperience
              : maradonaContent.english.activitiesExperience
          }
        />

        <Slider data={maradonaContent.spanish.imgs} />
        <ReserveExperience
          content={
            lang === "castellano"
              ? maradonaContent.spanish.reserveExperience
              : maradonaContent.english.reserveExperience
          }
          reserve={
            lang === "castellano"
              ? maradonaContent.spanish.contact
              : maradonaContent.english.contact
          }
        />
        <CuriosityExperience
          content={
            lang === "castellano"
              ? maradonaContent.spanish.curiosityExperience
              : maradonaContent.english.curiosityExperience
          }
        />
      </div>
    </>
  );
};
