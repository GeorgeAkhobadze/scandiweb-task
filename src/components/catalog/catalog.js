
import "./catalog.css"
import React from "react"
import CatalogContext from "../../context/catalogContext"
import CatalogItem from "./catalogItem/catalogItem"
import CartOverlay from "../cartoverlay/cartOverlay"

class Catalog extends React.Component {
    static contextType = CatalogContext

    render() {
        const { productList } = this.context;
        console.log(productList, "THIS IS NAME")

        return (
            <div className="catalog">
            {productList.map((product,i) => {
                return(
                    <CatalogItem key={i} name={product.name} image={product.gallery}/>
                )
            })}
            {/* <CatalogItem/> */}
            </div>


        )
    }

    // componentDidMount()
}

export default Catalog;