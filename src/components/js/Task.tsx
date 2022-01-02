import PropTypes from "prop-types";
import "../../index.css";
import { FaTimes } from "react-icons/fa";

const Task = (props: any) => {
  return (
    <div
      className={props.reminder ? "task reminder" : "task"}
      onDoubleClick={() => props.updateReminder(props.id)}
    >
      <h3>
        {props.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => props.onRemoveClicked(props.id)}
        />
      </h3>
      <p style={{ textAlign: "left" }}>{props.day}</p>
    </div>
  );
};

Task.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  day: PropTypes.string,
  reminder: PropTypes.bool,
  onRemoveClicked: PropTypes.func,
  updateReminder: PropTypes.func,
};

export default Task;
