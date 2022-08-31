
import "./catalog.css"
import React from "react"
import CatalogContext from "../../context/catalogContext"
import CatalogItem from "./catalogItem/catalogItem"
import CartOverlay from "../cartoverlay/cartOverlay"
import PriceContext from "../../context/priceContext"
import ProductPage from "../productpage/productpage"
import { withRouter } from "react-router-dom"
import ProductContext from "../../context/productContext"


class Catalog extends React.Component {
    static contextType = CatalogContext

    constructor(props) {
        super(props)

        this.state = { CatalogItemVisible: false }
    }

    componentDidMount() {
        // if(this.props?.match.params.id !== undefined) {
        //     this.setState({CatalogItemVisible: true})
        //     document.body.style.overflowY = "hidden"
        // } 
    }



    

    render() {
        console.log(this.props.match.params.id, "this is ID")

        return (
            <PriceContext.Consumer>{(priceContext) => (
                <CatalogContext.Consumer>{(catalogContext) => (
                    <ProductContext.Consumer>{(productContext) => {
                        const { productId, productModalVisible, changeId } = productContext
                        const { productList } = catalogContext;
                        const { priceList, priceValue } = priceContext;
                        const CurrencyPosition = priceList.map(function(currency){return currency.symbol}).indexOf(priceValue)
                        return(
                            <div className="catalog">
                                {this.state.CatalogItemVisible && 
                                <ProductPage changeId={changeId} id={this.props.match.params.id}/>
                                }
                                
                            {productList.map((product,i) => {
                                return(
                                    <CatalogItem location={this.props} history={this.props.history} id={product.id} key={i} name={product.name} image={product.gallery} price={`${priceValue}` + product.prices[CurrencyPosition].amount} inStock={product.inStock} />
                                )
                            })}
                            </div>
                        )

                    }}</ProductContext.Consumer>


                )}
                </CatalogContext.Consumer>
            )}
            </PriceContext.Consumer>


        )
    }

    // componentDidMount()
}

export default withRouter(Catalog);