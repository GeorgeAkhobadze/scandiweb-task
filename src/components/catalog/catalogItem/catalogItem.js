 import CatalogImage from "./catalogitemimg.png"
 import React from "react"
import "./catalogitem.css"
const CatalogItem = ({name, price, image}) => {
    return(
      
        <div className="catalogitem">
                        <div className="catalogitem-img">
                <img src={image} alt="Product Name"/>
            </div>
            <a className="catalogitem-title">{name}</a>
            <a className="catalogitem-price">$50.00</a>
        </div>
    )
}

export default CatalogItem;