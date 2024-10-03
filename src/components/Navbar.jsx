import "./Navbar.css";

const Navbar = ({ setTime, time }) => {
  return (
    <div className="navwrapper" id="top">
      <div className="typewriter name">
        <h1>Bhanu Srinivasa Sai Royal Koppolu</h1>
      </div>
      <div className="page__links">
        <a href="#1">Experience</a>
        <a href="#contact">Contact me</a>
        <a
          href="#"
          onClick={() => {
            setTime((time) => (time == "day" ? "night" : "day"));
          }}
        >
          {time != "day" ? "Light Mode" : "Dark Mode"}
        </a>
      </div>
    </div>
  );
};
export default Navbar;
