import PropTypes from "prop-types";
import { useState, useContext } from "react";
import { Link, Element } from "react-scroll";
import { LenguaContext } from "../../context/LenguaProvider";

const TextGralExprience = ({ content }) => {
  const [showContent, setShowContent] = useState(false);
  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();

  const seeMore = () => {
    setShowContent(true);
  };

  const seeLess = () => {
    setShowContent(false);
  };

  return (
    <Element name="top" className="text-container">
      <h2>{content[0]}</h2>
      <p>{content[1]}</p>
      {!showContent && (
        <button onClick={() => seeMore(true)}>
          {lang === "castellano" ? "Ver más" : "See more"}{" "}
          <i className="material-icons">arrow_drop_down</i>
        </button>
      )}
      {showContent && (
        <>
          <p>{content[2]}</p>
          <p>{content[3]}</p>
          <p>{content[4]}</p>
        </>
      )}
      {showContent && (
        <button>
          <Link to="top" onClick={() => seeLess(false)}>
            {lang === "castellano" ? "Ver menos" : "See less"}
            <i className="material-icons">arrow_drop_up</i>
          </Link>
        </button>
      )}
    </Element>
  );
};
TextGralExprience.propTypes = {
  content: PropTypes.node.isRequired,
};
export default TextGralExprience;
