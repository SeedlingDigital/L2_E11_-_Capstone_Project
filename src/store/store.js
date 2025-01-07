import { configureStore } from "@reduxjs/toolkit";
import userListState from "./UserListState";
import cartListState from "./CartListState";


const store = configureStore(
    {
      reducer: {
        userList: userListState,
        cartList: cartListState,
      },
      devTools: process.env.NODE_ENV !== "production",
    }
);
export default store;