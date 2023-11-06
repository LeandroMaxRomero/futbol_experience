import { Button } from "../Button/Button";
import PropTypes from "prop-types";

const ReserveExperience = ({ content, reserve }) => {
  const { number, message } = reserve;
  return (
    <div className="reserve-experience">
      <h2>{content[0]}</h2>
      <a
        href={` https://wa.me/${number}?text=${message}`}
        target="_blank"
        rel="noreferrer"
      >
        <Button buttonStyle={"btn-contacto"}>
          {content[1]}
        </Button>
      </a>
    </div>
  );
};
ReserveExperience.propTypes = {
  content: PropTypes.node.isRequired,
  reserve: PropTypes.node.isRequired,
};

export default ReserveExperience;
