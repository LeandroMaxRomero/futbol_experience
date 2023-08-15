import { Button } from "../Button/Button";
import PropTypes from "prop-types";

const ReserveExperience = ({ content }) => {
  return (
    <div className="reserve-experience">
      <h1>{content[0]}</h1>
      <Button buttonStyle={"btn-contacto"}>{content[1]}</Button>
    </div>
  );
};
ReserveExperience.propTypes = {
  content: PropTypes.node.isRequired,
};

export default ReserveExperience;
