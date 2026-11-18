import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../lib/types/screen";

// Initial state
const initialState: HomePageState = {
  popularDishes: [],
  newDishes: [],
  topUsers: [],
};

const homePageSlice = createSlice({
  // OPTIONS
  name: "homePage",
  initialState,
  // Reducer helps to change data inside  STORE
  reducers: {
    setPopularDishes: (state, action) => {
      // boyitish
      state.popularDishes = action.payload;
    },

    setNewDishes: (state, action) => {
      state.newDishes = action.payload;
    },

    setTopUsers: (state, action) => {
      state.topUsers = action.payload;
    },
  },
});
// Export for using in selectors
export const { setPopularDishes, setNewDishes, setTopUsers } =
  homePageSlice.actions;

// connecting Reducer with Store
const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer;
