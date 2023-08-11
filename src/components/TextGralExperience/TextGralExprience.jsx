import PropTypes from "prop-types";

const TextGralExprience = ({ content }) => {
  return (
    <div className="text-container">
      <h2>{content[0]}</h2>
      <p>{content[1]}</p>
    </div>
  );
};
TextGralExprience.propTypes = {
  content: PropTypes.node.isRequired,
};
export default TextGralExprience;
