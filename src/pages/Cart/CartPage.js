import React from "react";
import "./CartPage.css"
import {useSelector, useDispatch} from "react-redux";
import {addItem, removeItem, editItem} from "../../store/CartListState";
import {useRef, useState} from "react";
import {ProductModel} from "../../Models/ProductModel";
import ProductCard from "../../Components/Card/ProductCard";
import { FaInfoCircle } from "react-icons/fa";
import { Button } from "react-bootstrap"
import MessageModal from "../../Components/Modal/MessageModal";
import {MessageModel} from "../../Models/MessageModel";



const CartPage = () => {

  const cartState = useSelector(state => state.cartList);
  const userState = useSelector(state => state.userList);


  const [showModal, setShowModal] = useState(false);
  const messageModelInit = new MessageModel("NONE", "NONE", false);
  const [modalMessage, setModalMessage] = useState(messageModelInit);
  let userName = "NO_USER";
  userName = userState.userList[0].userName ?? "NO_USER";

  let qty = cartState.totalQty;

  let productsList = [];
  productsList = cartState.cartList;


  function checkOut()
  {

    const qty = Number(cartState.totalQty);

    if(qty <= 0)
    {
      displayMessage("No Items", "There is no items to check out, please select products and then check out");
    }
    else
    {
      //Continue to payment screen
    }
  }



  function showHelp()
  {
    const messageText = <div>
      <div>The following shipping methods are available</div>
      <ul>
        <il>Courier: Will take 2 - 5 business days</il>
        <il>Over-night: Will be express and delivered by cob tomorrow</il>
      </ul>
    </div>;


    displayMessage("Shipping methods", `The following shipping methods are available
    - Courier: Will take 2 - 5 business days
    - Over-night: Will be express and delivered by cob tomorrow`);
  }


  function displayMessage(heading, message)
  {
    const messageModel = new MessageModel(heading,message, true);
    setModalMessage(messageModel);
    setShowModal(true);
  }


  return (
      <div className="cart-body">
        <div>
          <h2 className={"cart-title"}>{Number(cartState.totalQty)} Item(s) in {userName}'s Cart</h2>
          <div>
            <div>
              <h3>R {cartState.totalPrice}.00</h3>
            </div>
            <div>
            <ul>
              {/*Map the products to a Bootstrap card*/}
              {productsList.map((item, index) =>
                  (<ul className={"product-card"} key={index}>{<ProductCard
                      productRecord={productsList[index]} cartRecord={"Y"}/>}</ul>))}
            </ul>
            </div>
            <Button variant={"primary"} className={"checkout-button"} onClick={() => checkOut()}>Check Out</Button>
          </div>
          <div className={"checkout-info-click"} onClick={() => showHelp()}>
          <div className={"checkout-info"}>
            <p>Need assistance with shipping</p> <FaInfoCircle className={"checkout-info-icon"}/>
          </div>
          </div>
        </div>
        {(showModal) ?
            <MessageModal show={showModal} heading={modalMessage.heading}
                          message={modalMessage.message}/> : null}
      </div>
  );
}

export default CartPage;