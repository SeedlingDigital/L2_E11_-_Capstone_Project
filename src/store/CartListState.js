import { createSlice } from '@reduxjs/toolkit';
import { CartModel } from "../Models/CartModel";


const cartSlice = createSlice(
    {
      name: "cartList",
      initialState: {
        heading: "Cart List",
        totalQty: 0,
        totalPrice: 0,
        cartList: []
      },
      reducers: {
        addItem: (state, action) => {
          let recordExists = false;
          let recordIndex = state.cartList.indexOf(action.payload.id);
          for(var i = 0; i < state.cartList.length; i++)
          {
            if(state.cartList[i].id === action.payload.id)
            {
              recordExists = true;
              recordIndex = i;
            }
          }

          console.log(recordIndex);

          if(recordIndex === -1)
          {
            state.cartList.push(action.payload);
          }

          const cartTmpList = [];
          let totalQtyValue = 0;
          for(let i =0; i < state.cartList.length; i++)
          {
            state.totalQty += 1;
            state.totalPrice += Number(action.payload.price);
            cartTmpList.push(state.cartList[i]);
          }

          console.log(cartTmpList);


        },
        removeItem: (state, action) => {
          let index = state.cartList.indexOf(action.payload.id);
          state.totalQty -= 1;
          state.totalPrice -= Number(action.payload.price);
          state.cartList.splice(index, 1);
        },
        editItem: (state, action) => {
          state.cartList.forEach((userRec, index, array) => {
            array[index] = action.payload;
          })
        }
      }
    }
);

export const {addItem, removeItem, editItem} = cartSlice.actions;

export default cartSlice.reducer;
