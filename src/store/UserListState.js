import { createSlice } from '@reduxjs/toolkit';
import { UserModel } from "../Models/UserModel";


const userSlice = createSlice(
    {
      name: "userList",
      initialState: {
        heading: "User List",
        userList: []
      },
      reducers: {
        addUser: (state, action) => {
          let recordExists = false;
          let recordIndex = state.userList.indexOf(action.payload.userName);
          for(var i = 0; i < state.userList.length; i++)
          {
            if(state.userList[i].userName === action.payload.userName)
            {
              recordExists = true;
              recordIndex = i;
            }
          }

          console.log(recordIndex);

          if(recordIndex === -1)
          {
            state.userList.push(action.payload);
          }

        },
        removeUser: (state, action) => {
          let index = state.userList.indexOf(action.payload.userName);
          state.userList.splice(index, 1);
        },
        editUser: (state, action) => {
          state.userList.forEach((userRec, index, array) => {
            array[index] = action.payload;
          })
        }
      }
    }
);

export const {addUser, removeUser, editUser} = userSlice.actions;

export default userSlice.reducer;
