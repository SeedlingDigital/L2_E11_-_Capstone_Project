import React from "react";
import "./CartPage.css"
import {useSelector, useDispatch} from "react-redux";
import {addItem, removeItem, editItem} from "../../store/CartListState";
import {useRef, useState} from "react";
import {ProductModel} from "../../Models/ProductModel";
import ProductCard from "../../Components/Card/ProductCard";
import beanImage from "../../Assets/images/products/beans.jpg";
import carrotImage from "../../Assets/images/products/carrots.jpg";
import lettuceImage from "../../Assets/images/products/lettuce.jpg";
import onionImage from "../../Assets/images/products/onions.jpg";
import peppersImage from "../../Assets/images/products/peppers.jpg";
import tomatoeImage from "../../Assets/images/products/tomatoes.jpg";



const CartPage = () => {

  const cartState = useSelector(state => state.cartList);
  const userState = useSelector(state => state.userList);

  let userName = "NO_USER";
  userName = userState.userList[0].userName ?? "NO_USER";

  let productsList = [];
  productsList = cartState.cartList;

  return (
      <div className="cart-body">
        <div>
          <h2 className={"cart-title"}>Items in {userName}'s Cart</h2>
          <div>
            <div>
            <ul>
              {/*Map the products to a Bootstrap card*/}
              {productsList.map((item, index) =>
                  (<ul className={"product-card"} key={index}>{<ProductCard
                      productRecord={productsList[index]}/>}</ul>))}
            </ul>
            </div>
            <button className={"checkout-button"}>Check Out</button>
          </div>
        </div>
      </div>
  );
}

export default CartPage;