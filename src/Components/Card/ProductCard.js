import {Button, Card} from "react-bootstrap";
import "./Card.css";
import {useSelector, useDispatch} from "react-redux";
import {addItem, removeItem, editItem} from "../../store/CartListState";
import {useRef, useState} from "react";
import {CartModel} from "../../Models/CartModel";
import {ProductModel} from "../../Models/ProductModel";

const ProductCard = (props) => {

  const state = useSelector(state => state.cartList);
  const dispatch = useDispatch();

  const [buttonState, setButtonState] = useState(props.cartRecord === "Y" ? "Remover Item" : props.productRecord.selected ? "Remover Item" : "Add Item");
  const [selectedState, setSelectedState] = useState(props.cartRecord === "Y" ? true : props.productRecord.selected);

  let buttonText = props.productRecord.selected ? "Remove Item" : "Add Item";

  let cartTmpList = [];
  cartTmpList = state.cartList;
  listCartProducts();





  function addProduct()
  {
    //Add Product to the Cart
    //CartModel(id, productCode, productDescription, qty)

    //ProductModel(id, name, description, price, image, color, selected)
    const product = new ProductModel(props.productRecord.id, props.productRecord.name, props.productRecord.description, props.productRecord.price, props.productRecord.image, null,props.productRecord.selected);
    if(selectedState)
    {
      dispatch(removeItem(product));
      //buttonText = "Add Item";
      setButtonState("Add Item");
      setSelectedState(false);
    }
    else
    {
      dispatch(addItem(product));
      //buttonText = "Remove Item";
      setButtonState("Remove Item");
      setSelectedState(true);
    }

    const listLength = state.cartList.length;
    const listTmp = [];

    for(let i = 0; i < state.cartList.length; i++){
      listTmp.push(state.cartList[i]);
    }


    console.log(`Record Count: ${listTmp.length}`);

  }

  function listCartProducts() {
    for(var i = 0; i < cartTmpList.length; i++) {
      console.log(cartTmpList[i]);
    }
  }




// constructor(id, name, description, price, image, color, selected)
  return (
      <Card className={"product-card-color"}>
        {/*<Card.Img className={"card-image"} variant={"top"} src={props.productRecord.image} alt={props.imageAltDescription}/>*/}
        <Card.Img className={"card-image"} variant={"top"} src={props.productRecord.image} alt={props.productRecord.description}/>
        <Card.Body className={"padding-card"}>
          <Card.Title className={"card-title"}>{props.productRecord.name}</Card.Title>
          <Card.Subtitle className={"card-sub-title"}>{props.productRecord.description}</Card.Subtitle>
          <Card.Text className={"card-description"}>R {props.productRecord.price}.00</Card.Text>
          <Button variant="secondary" onClick={() => addProduct()}>{buttonState}</Button>
        </Card.Body>
      </Card>
  );
}

export default ProductCard;