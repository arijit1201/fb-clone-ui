import { useDispatch, useSelector } from "react-redux";
import { addAllPost, selectPost } from "../public/src/features/postSlice";
import { useEffect } from "react";
import axios from "axios";
import Post from "./Post";

const Posts = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectPost);
  useEffect(() => {
    const fetchData = () => {
      const response = axios
        .get("http://192.168.29.87:8901/api/v1/post")
        .then((response) => {
          console.log(response.data);
          dispatch(addAllPost(response.data));
        });
    };
    fetchData();
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
