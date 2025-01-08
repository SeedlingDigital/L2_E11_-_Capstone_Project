import React from "react";
import "./CartPage.css"
import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";
import ProductCard from "../../Components/Card/ProductCard";
import { FaInfoCircle } from "react-icons/fa";
import { Button } from "react-bootstrap"
import MessageModal from "../../Components/Modal/MessageModal";
import {MessageModel} from "../../Models/MessageModel";



const CartPage = () => {

  // Get the user details and the cart records
  const cartState = useSelector(state => state.cartList);
  const userState = useSelector(state => state.userList);


  const [showModal, setShowModal] = useState(false);
  const messageModelInit = new MessageModel("NONE", "NONE", false);
  const [modalMessage, setModalMessage] = useState(messageModelInit);
  let userName = "NO_USER";
  userName = userState.userList[0].userName ?? "NO_USER";

  let productsList = [];
  productsList = cartState.cartList;


  function checkOut()
  {
    const qty = Number(cartState.totalQty);

    // If Qty is 0 or less then we cant proceed as there is nothing to check out.
    if(qty <= 0)
    {
      displayMessage("No Items", "There is no items to check out, please select products and then check out");
    }
    else
    {
      //Continue to payment screen
    }
  }

  // If the user selected info on shipping methods then display the popup modal
  function showHelp()
  {
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


  // return the display.
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