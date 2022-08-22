 import CatalogImage from "./catalogitemimg.png"
 import CartIcon from "./cart-icon.svg"
 import OutOfStock from "./Outofstock.png"
 import React, { useState } from "react"
import "./catalogitem.css"
class CatalogItem extends React.Component {

    render() {
        console.log(this.props.inStock, "NORMAL")
        console.log(!this.props.inStock)
        return(
            <div className="catalogitem" disabled={!this.props.inStock}>
                <img className="catalog-add-btn" src={CartIcon} alt="Add to Cart"/>
                <div className="catalogitem-img">
                    <img src={this.props.image[0]}/>
                    {   this.props.inStock === false &&
                            <div className="out-of-stock">OUT OF STOCK</div>     
                    }

                </div>
                <a className="catalogitem-title">{this.props.name}</a>
                <a className="catalogitem-price">{this.props.price}</a>
            </div>
        )
    }

}

export default CatalogItem;