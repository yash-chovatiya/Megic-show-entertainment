import "./blog.css";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/topbar/Topbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/blog" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <div>
      <TopBar />
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitleLg">BLOG</span>
          <Link to={"/writepost"}>
            <button className="NewPostBtn">New Post</button>
          </Link>
        </div>
        <div className="headerImg" />
      </div>
      <div className="blogPosts">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </div>
  );
}
