import PropTypes from "prop-types";

const CuriosityExperience = ({ content }) => {
  return (
    <div className="curiosity-container">
      <h2>{content[0]}</h2>
      <div className="curiosity-container__info">
        <div className="curiosity-container__img img1">
          <img src={content[1]} alt="estadio Argentinos Juniors" />
        </div>

        <div className="curiosity-container-text text1">
          <h3>{content[2]}</h3>
          <p>{content[3]}</p>
        </div>

        <div className="curiosity-container__img img2">
          <img src={content[4]} alt="imagen de maradona" />
        </div>
        <div className="curiosity-container-text text2">
          <h3>{content[5]}</h3>
          <p>{content[6]}</p>
        </div>
      </div>
    </div>
  );
};

CuriosityExperience.propTypes = {
  content: PropTypes.node.isRequired,
};

export default CuriosityExperience;
