import PropTypes from "prop-types";
import '../../scss/layout/_button.scss';

export const Button = ({children, buttonStyle}) => {
  return (
    <button className={buttonStyle}>
      <p>{children}</p>
    </button>
  )
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  buttonStyle: PropTypes.node.isRequired,
};