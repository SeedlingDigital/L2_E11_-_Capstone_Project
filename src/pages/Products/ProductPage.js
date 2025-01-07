import React from "react";
import "./Products.css";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../../Components/Navbar/NavBar";
import LandingCard from "../../Components/Card/LandingCard";
import ProductCard from "../../Components/Card/ProductCard";
import beanImage from "../../Assets/images/products/beans.jpg";
import carrotImage from "../../Assets/images/products/carrots.jpg";
import lettuceImage from "../../Assets/images/products/lettuce.jpg";
import onionImage from "../../Assets/images/products/onions.jpg";
import peppersImage from "../../Assets/images/products/peppers.jpg";
import tomatoeImage from "../../Assets/images/products/tomatoes.jpg";
import {ProductModel} from "../../Models/ProductModel";


const ProductPage = () => {



  // Create a list of products to display.
  const productsList = [
    new ProductModel(1, "Beans", "Green beans",2000.00, beanImage, "../../Assets/images/products/beans.jpg", false),
    new ProductModel(2,"Carrots", "Wild carrots",1980.00, carrotImage, "../../Assets/images/products/carrots.jpg",false),
    new ProductModel(3,"Lettuce", "Ice berg lettuce",1500.00, lettuceImage, "../../Assets/images/products/lettuce.jpg",false),
    new ProductModel(4,"Onions", "White Onions",899.00, onionImage, "../../Assets/images/products/onions.jpg",false),
    new ProductModel(5,"Peppers", "Red Peppers",1300.00, peppersImage, "../../Assets/images/products/peppers.jpg",false),
    new ProductModel(6,"Tomatoes", "Cocktail tomatoes",2000.00, tomatoeImage, "../../Assets/images/products/tomatoes.jpg",false)
      ]





  return (
      <div className="product-body">
        <div>
          <h2 className={"product-title"}>Add Products to your cart</h2>
          <div>
          <ul>
            {/*Map the products to a Bootstrap card*/}
            {productsList.map((item, index) =>
                (<ul className={"product-card"} key={index}>{<ProductCard productRecord={productsList[index]}/>}</ul>))}
          </ul>
          </div>
        </div>
      </div>
  );
}
export default ProductPage;