 import CatalogImage from "./catalogitemimg.png"
 import CartIcon from "./cart-icon.svg"
 import OutOfStock from "./Outofstock.png"
 import React, { useState } from "react"
import "./catalogitem.css"
import ProductContext from "../../../context/productContext"
import { useHistory } from "react-router";
import { withRouter } from "react-router-dom"
class CatalogItem extends React.Component {

    openProduct(id) {
        this.props.history.push(`/${id}`)
        console.log(this.props.productModalVisible)
        // this.setState({ productModalVisible: true })
    }

    render() {
        // console.log(this.props.history.location.pathname)
        return(
            <ProductContext.Consumer>{(productContext) => {
                const { productId, changeId } = productContext;
                // console.log("PRODUCT ID:", productId)

                return(
                    <div className="catalogitem" disabled={!this.props.inStock} onClick={() => changeId(this.props.id)}>
                        <img className="catalog-add-btn" src={CartIcon} alt="Add to Cart" onClick={() => this.openProduct(this.props.id)}/>
                        <div className="catalogitem-img">
                            <img src={this.props.image && this.props.image[0]}/>
                            {   this.props.inStock === false &&
                                    <div className="out-of-stock">OUT OF STOCK</div>     
                            }
        
                        </div>
                        <a className="catalogitem-title">{this.props.name}</a>
                        <a className="catalogitem-price">{this.props.price}</a>
                    </div>
                )
            }}</ProductContext.Consumer>
        )
    }

}

export default withRouter(CatalogItem);