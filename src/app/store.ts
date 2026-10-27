import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

export const store = configureStore({
  // Redux requires at least one reducer. Keep the root state empty until the
  // app adds feature slices.
  reducer: (state = {}) => state,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
