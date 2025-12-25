import "regenerator-runtime/runtime";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts, setLoading } from "../store/loremSlice";

const App = () => {
  const posts = useSelector((store) => store.lorem.posts);
  const loading = useSelector((store) => store.lorem.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.lorem.com/ipsum`);
        const result = await res.json();
        dispatch(setPosts(result));
      } catch (error) {
        console.error("Fetch failed:", error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h1>Intro Text</h1>
      {loading ? (
        <h4 id="loading">Loading...</h4>
      ) : (
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <p>
                <strong>Title:</strong> {post.title}
              </p>
              <p>
                <strong>Body:</strong> {post.body}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
