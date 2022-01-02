import PropTypes from "prop-types";
import "../css/Tasks.css";
import { TasksProps } from "../../interfaces";
import { Task } from "../index";

const Tasks = (props: TasksProps) => {
  const { tasks, onRemoveClicked, updateReminder } = props;
  return (
    <div style={{ marginTop: "30px" }}>
      {tasks.map((task: any) => (
        <Task
          key={task.id}
          id={task.id}
          text={task.text}
          day={task.day}
          reminder={task.reminder}
          onRemoveClicked={onRemoveClicked}
          updateReminder={updateReminder}
        />
      ))}
    </div>
  );
};

Tasks.defaultProps = {
  tasks: [],
  onRemoveClicked: () => {},
  updateReminder: () => {},
};

Tasks.propTypes = {
  tasks: PropTypes.any.isRequired,
  onRemoveClicked: PropTypes.func,
  updateReminder: PropTypes.func,
};

export default Tasks;
