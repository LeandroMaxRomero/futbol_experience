import { useContext } from "react";
// import { LenguaContext } from "../../context/LenguaProvider";
import { HeaderMaradona } from "./HeaderMaradona";
import InfoExperience from "../InfoExperience/InfoExperience";
import TextGralExprience from "../TextGralExperience/TextGralExprience";
import DescriptionExperience from "../DescriptionExperience/DescriptionExperience";
import ActivitiesExperience from "../ActivitiesExperience/ActivitiesExperience";
import ImagesExperience from "../ImagesExperience/ImagesExperience";
import ReserveExperience from "../ReserveExperience/ReserveExperience";
import CuriosityExperience from "../CuriosityExpererience/CuriosityExperience";
useContext;

export const ExperienciaMaradona = () => {
  return (
    <>
      <HeaderMaradona />
      <div className="maradona-container">
        <InfoExperience />
        <TextGralExprience />
        <DescriptionExperience />
        <ActivitiesExperience />
        <ImagesExperience />
        <ReserveExperience />
        <CuriosityExperience />
      </div>
    </>
  );
};
