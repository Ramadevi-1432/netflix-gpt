import movieSlice from "./movieSlice";

const { configureStore } = require("@reduxjs/toolkit");
const { default: userSlice } = require("./userSlice");

const store = configureStore({
  reducer: {
    user: userSlice,
    movie: movieSlice,
  },
});
export default store;
