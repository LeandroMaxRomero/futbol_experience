import { useContext, useEffect } from "react";
import { LenguaContext } from "../../context/LenguaProvider";

import InfoExperience from "../InfoExperience/InfoExperience";
import TextGralExperienceRiver from "../TextGralExperience/TextGralExperienceRiver";
import DescriptionExperience from "../DescriptionExperience/DescriptionExperience";
import ActivitiesExperience from "../ActivitiesExperience/ActivitiesExperience";
/* import ImagesExperience from "../ImagesExperience/ImagesExperience"; */
import ReserveExperience from "../ReserveExperience/ReserveExperience";
import CuriosityExperience from "../CuriosityExpererience/CuriosityExperience";
import { CommonHeader } from "../CommonHeader/CommonHeader";
import { Slider } from "../Slider/Slider";
import * as Scroll from "react-scroll";
import { riverContent } from "../../data/data";

export const RiverExperience = () => {
  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();

  let scroll = Scroll.animateScroll;

  useEffect(() => {
    scroll.scrollToTop();
  });

  return (
    <>
      <CommonHeader
        ownStyle={"header-boca-river"}
        experienceTittleES={"Experiencia Boca - River"}
        experienceTittleEN={"Boca - River Experience"}
        image={"img/Home-Exp-RivBoc.png"}
      />
      <div className="maradona-container">
        <InfoExperience
          content={
            lang === "castellano"
              ? riverContent.spanish.infoExperience
              : riverContent.english.infoExperience
          }
        />
        <TextGralExperienceRiver
          content={
            lang === "castellano"
              ? riverContent.spanish.textExperience
              : riverContent.english.textExperience
          }
        />
        <DescriptionExperience
          content={
            lang === "castellano"
              ? riverContent.spanish.descriptionExperience
              : riverContent.english.descriptionExperience
          }
        />
        <ActivitiesExperience
          content={
            lang === "castellano"
              ? riverContent.spanish.activitiesExperience
              : riverContent.english.activitiesExperience
          }
        />

        <Slider data={riverContent.spanish.imgs} />
        <ReserveExperience
          content={
            lang === "castellano"
              ? riverContent.spanish.reserveExperience
              : riverContent.english.reserveExperience
          }
          reserve={
            lang === "castellano"
              ? riverContent.spanish.contact
              : riverContent.english.contact
          }
        />
        <CuriosityExperience
          content={
            lang === "castellano"
              ? riverContent.spanish.curiosityExperience
              : riverContent.english.curiosityExperience
          }
        />
      </div>
    </>
  );
};
