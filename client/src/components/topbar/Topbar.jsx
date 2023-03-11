import "./topbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5005/images/";
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <Link to={"/home"}>
          <img src="../../../logo.png" alt="" className="logo-img" />
        </Link>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem" data-testid="test-id-01">
            <Link className="link" to={"/home"}>
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to={"/movies"}>
              Movies
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to={"/games"}>
              Games
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to={"/music"}>
              Music
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to={"/blog"}>
              Blog
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <ul className="topList">
          {/* Profile Photo */}
          <Link to={"/profile"}>
            <img className="topImg" src={PF + user.profilePicture} alt="" />
          </Link>

          <li className="topListItem" onClick={handleLogout}>
            {user && "Signout"}
          </li>
        </ul>
      </div>
    </div>
  );
}
