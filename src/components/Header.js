import { LOGO_URL } from "../../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="imgg" src={LOGO_URL} />
      </div>
      <div className="Nav-lists">
        <ul>
          <li>Help</li>
          <li>About</li>
          <li>Feedback</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
