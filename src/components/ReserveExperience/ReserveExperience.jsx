import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
Link;
import PropTypes from "prop-types";

const ReserveExperience = ({ content }) => {
  return (
    <div className="reserve-experience">
      <h1>{content[0]}</h1>
      <Button buttonStyle={"btn-contacto"}>
        <Link to={"/contact"}>{content[1]}</Link>
      </Button>
    </div>
  );
};
ReserveExperience.propTypes = {
  content: PropTypes.node.isRequired,
};

export default ReserveExperience;
