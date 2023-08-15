import PropTypes from "prop-types";
import { useState } from "react";

const TextGralExprience = ({ content }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="text-container">
      <h2>{content[0]}</h2>
      <p>{content[1]}</p>
      {!showContent && (
        <button onClick={() => setShowContent(true)}>
          Ver más <i className="material-icons">arrow_drop_down</i>
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
        <button onClick={() => setShowContent(false)}>
          Ver menos <i className="material-icons">arrow_drop_up</i>
        </button>
      )}
    </div>
  );
};
TextGralExprience.propTypes = {
  content: PropTypes.node.isRequired,
};
export default TextGralExprience;
