import "./single.css";
import Sidebar from "../sidebar/Sidebar";
import SinglePost from "../singlePost/SinglePost";
import TopBar from "../topbar/Topbar";

export default function singlePost({}) {
  return (
    <div>
      <TopBar />
      <div className="single">
        {
          // post
        }
        <SinglePost />
        <Sidebar />
      </div>
    </div>
  );
}
