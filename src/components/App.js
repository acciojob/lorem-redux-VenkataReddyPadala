import "regenerator-runtime/runtime";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoremData, setLoading } from "../store/loremSlice";

const App = () => {
  const data = useSelector((store) => store.lorem.data);
  const loading = useSelector((store) => store.lorem.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));
      try {
        const res = await fetch(`https://lorem-api.com/api/lorem`);
        const result = await res.text();
        dispatch(setLoremData(result));
      } catch (error) {
        console.error("Fetch failed:", error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [dispatch]);

  return <div>{loading ? <p>Loading...</p> : <p>{data}</p>}</div>;
};

export default App;
