import { createSlice } from "@reduxjs/toolkit";

const loremSlice = createSlice({
  name: "lorem",
  initialState: {
    posts: [],
    loading: true,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { setPosts, setLoading } = loremSlice.actions;
export default loremSlice.reducer;
