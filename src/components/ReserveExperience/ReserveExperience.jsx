import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
Link;
import PropTypes from "prop-types";

const ReserveExperience = ({ content, reserve }) => {
  const { number, message } = reserve;
  return (
    <div className="reserve-experience">
      <h2>{content[0]}</h2>
      <Button buttonStyle={"btn-contacto"}>
        <a
          href={` https://wa.me/${number}?text=${message}`}
          target="_blank"
          rel="noreferrer"
        >
          {content[1]}
        </a>
      </Button>
    </div>
  );
};
ReserveExperience.propTypes = {
  content: PropTypes.node.isRequired,
  reserve: PropTypes.node.isRequired,
};

export default ReserveExperience;
