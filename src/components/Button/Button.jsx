import PropTypes from "prop-types";
import '../../scss/layout/_button.scss';

export const Button = ({children}) => {
  return (
    <button className="btn-contacto">
          {children}
    </button>
  )
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
};