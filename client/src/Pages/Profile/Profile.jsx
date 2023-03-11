import "./profile.css";
import TopBar from "../../components/topbar/Topbar";
import { Context } from "../../context/Context";
import { useReducer, useState } from "react";
import axios from "axios";
import { useContext } from "react";

export default function Profile() {
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5005/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = password
      ? {
          userId: user._id,
          fullname: name || user.fullname,
          email: email || user.email,
          password: password,
        }
      : {
          userId: user._id,
          fullname: name || user.fullname,
          email: email || user.email,
        };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePicture = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("/details/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <div>
      <TopBar />
      <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsTitleUpdate">Update Your Account</span>
            <span className="settingsTitleDelete">Delete Account</span>
          </div>
          <form className="settingsForm" onSubmit={handleSubmit}>
            <label htmlFor="">Profile Picture</label>
            <div className="settingsPP">
              <img
                src={
                  file ? URL.createObjectURL(file) : PF + user.profilePicture
                }
                alt=""
              />
              <label htmlFor="fileInput">
                <i className="settingsPPIcon far fa-user-circle"></i>
              </label>
              <input
                type="file"
                name=""
                id="fileInput"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <div className="profileDetails">
              <label>Username</label>
              <input type="text" placeholder={user.username} readOnly />
              <label>Name</label>
              <input
                type="text"
                placeholder={user.fullname}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <label>Email</label>
              <input
                type="email"
                placeholder={user.email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <label>Date of Birth</label>
              <input type="text" placeholder={user.DOB} readOnly />
              <label>New Password</label>
              <input
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button className="settingsSubmitButton" type="submit">
                Update
              </button>

              {success && (
                <span
                  style={{
                    color: "green",
                    textAlign: "center",
                    marginTop: "20px",
                  }}
                >
                  Profile has been updated...
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
