import { createSlice } from "@reduxjs/toolkit";
import { HomePageState, OrdersPageState } from "../../../lib/types/screen";

// Initial state
const initialState: OrdersPageState = {
  pausedOrders: [],
  processOrders: [],
  finishedOrders: [],
};

const ordersPageSlice = createSlice({
  // OPTIONS
  name: "ordersPage",
  initialState,
  // Reducer helps to change data inside  STORE
  reducers: {
    setPausedOrders: (state, action) => {
      // boyitish
      state.pausedOrders = action.payload;
    },

    setProcessOrders: (state, action) => {
      state.processOrders = action.payload;
    },

    setFinishedOrders: (state, action) => {
      state.finishedOrders = action.payload;
    },
  },
});
// Export for using in selectors
export const { setPausedOrders, setProcessOrders, setFinishedOrders } =
  ordersPageSlice.actions;

// connecting Reducer with Store
const OrdersPageReducer = ordersPageSlice.reducer;
export default OrdersPageReducer;
