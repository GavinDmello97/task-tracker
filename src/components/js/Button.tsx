import PropTypes from "prop-types";
import "../css/Button.css";
import { ButtonProps } from "../../interfaces";

const Button = (props: ButtonProps) => {
  const { name: buttonName, backgroundColor, color, onClicked } = props;

  return (
    <button
      className="btn"
      style={{
        backgroundColor: backgroundColor,
        color: color,
      }}
      onClick={onClicked}
    >
      {buttonName}
    </button>
  );
};

Button.defaultProps = {
  name: "Button",
  backgroundColor: "black",
  color: "white",
  onClicked: () => {
    console.log("Button Pressed");
  },
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClicked: PropTypes.func.isRequired,
};

export default Button;
