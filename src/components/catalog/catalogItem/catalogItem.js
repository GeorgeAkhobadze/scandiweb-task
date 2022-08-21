 import CatalogImage from "./catalogitemimg.png"
 import CartIcon from "./cart-icon.svg"
 import React, { useState } from "react"
import "./catalogitem.css"
class CatalogItem extends React.Component {

    render() {
        return(
            <div className="catalogitem">
                <img className="catalog-add-btn" src={CartIcon} alt="Add to Cart"/>
                            <div className="catalogitem-img">
                    <img src={this.props.image[0]}/>   
                </div>
                <a className="catalogitem-title">{this.props.name}</a>
                <a className="catalogitem-price">{this.props.price}</a>
            </div>
        )
    }

}

export default CatalogItem;