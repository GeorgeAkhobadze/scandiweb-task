 import CatalogImage from "./catalogitemimg.png"
 import CartIcon from "./cart-icon.svg"
 import React, { useState } from "react"
import "./catalogitem.css"
class CatalogItem extends React.Component {
    // {name, price, image, inStock}
    render() {
        return(

            <div className="catalogitem">
                <img className="catalog-add-btn" src={CartIcon} alt="Add to Cart"/>
                            <div className="catalogitem-img">
                    <img src={CatalogImage}/>   
                </div>
                <a className="catalogitem-title">test123</a>
                <a className="catalogitem-price">$50.00</a>
            </div>
        )
    }

}

export default CatalogItem;