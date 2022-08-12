 import CatalogImage from "./catalogitemimg.png"
 import CartIcon from "./cart-icon.svg"
 import React from "react"
import "./catalogitem.css"
const CatalogItem = ({name, price, image}) => {
    return(
      
        <div className="catalogitem">
            <img className="catalog-add-btn" src={CartIcon} alt="Add to Cart"/>
                        <div className="catalogitem-img">
                <img src={image} alt="Product Name"/>   
            </div>
            <a className="catalogitem-title">{name}</a>
            <a className="catalogitem-price">$50.00</a>
        </div>
    )
}

export default CatalogItem;