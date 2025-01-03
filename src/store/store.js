import { configureStore } from "@reduxjs/toolkit";
import userListState from "./UserListState";


const store = configureStore(
    {
      reducer: {
        userList: userListState,
      },
      devTools: process.env.NODE_ENV !== "production",
    }
);
export default store;