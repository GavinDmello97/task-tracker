import PropTypes from "prop-types";
import "../css/Body.css";
import { Button, Tasks } from "../index";
import { useState } from "react";
import { BodyProps } from "../../interfaces";

const Body = (props: BodyProps) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Teachers Appointment",
      day: "Feb 6th at 2:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Go out for a drink",
      day: "Feb 7th at 2:30pm",
      reminder: false,
    },
    {
      id: 4,
      text: "Convolution Seminar",
      day: "Feb 5th at 4:30pm",
      reminder: true,
    },
  ]);

  const {} = props;
  const onAddClicked = () => {
    console.log("Add Button");
  };

  const onRemoveClicked = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateReminder = (id: number) => {
    setTasks(
      tasks.map((task) => {
        return {
          ...task,
          reminder: task.id === id ? !task.reminder : task.reminder,
        };
      })
    );
  };
  return (
    <div className="body-container">
      <div className="content-container">
        <Button
          name="Add"
          backgroundColor="green"
          color="white"
          onClicked={onAddClicked}
        />
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onRemoveClicked={onRemoveClicked}
            updateReminder={updateReminder}
          />
        ) : (
          <p>No tasks in list</p>
        )}
      </div>
    </div>
  );
};

Body.defaultProps = {
  //   name: "User 1",
};

Body.propTypes = {
  //   name: PropTypes.string.isRequired,
};

export default Body;
