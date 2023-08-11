import { useContext } from "react";
import { LenguaContext } from "../../context/LenguaProvider";
import { NavBar } from "../NavBar/NavBar";
import PropTypes from "prop-types";

export const CommonHeader = ({ ownStyle }) => {
  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();
  return (
    <div className={ownStyle}>
      <NavBar />
      {lang === "castellano" ? (
        <h2>Experiencia Maradona</h2>
      ) : (
        <h2>Maradona Experience</h2>
      )}
    </div>
  );
};
CommonHeader.propTypes = {
  ownStyle: PropTypes.node.isRequired,
};
