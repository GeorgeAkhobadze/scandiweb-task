
import "./catalog.css"
import React from "react"
import CatalogContext from "../../context/catalogContext"
import CatalogItem from "./catalogItem/catalogItem"
import CartOverlay from "../cartoverlay/cartOverlay"
import PriceContext from "../../context/priceContext"

class Catalog extends React.Component {
    static contextType = CatalogContext

    render() {
        return (
            <PriceContext.Consumer>{(priceContext) => (
                <CatalogContext.Consumer>{(catalogContext) => {
                    const { productList } = catalogContext;
                    const { priceList, priceValue } = priceContext;
                    const CurrencyPosition = priceList.map(function(e) { return e.symbol}).indexOf(priceValue)
                    return(
                        <div className="catalog">
                        {productList.map((product,i) => {
                            return(
                                <CatalogItem key={i} name={product.name} image={product.gallery} price={`${priceValue}` + product.prices[CurrencyPosition].amount}/>
                            )
                        })}
                        </div>
                    )
                }}
                </CatalogContext.Consumer>
            )}
            </PriceContext.Consumer>


        )
    }

    // componentDidMount()
}

export default Catalog;