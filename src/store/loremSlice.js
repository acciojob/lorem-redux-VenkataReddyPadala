import { createSlice } from "@reduxjs/toolkit";

const loremSlice = createSlice({
  name: "lorem",
  initialState: {
    data: "",
    loading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setLoremData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setLoremData, setLoading } = loremSlice.actions;
export default loremSlice.reducer;
