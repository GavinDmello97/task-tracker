import PropTypes from "prop-types";
import "../css/Header.css";

interface headerProps {
  name: String;
}

const Header = (props: headerProps) => {
  const { name: userName } = props;
  return (
    <div className="header-container">
      <header>
        <h1 className="title">Task Tracker</h1>
      </header>
      <p id="username-p">{userName}</p>
    </div>
  );
};

Header.defaultProps = {
  name: "User 1",
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
