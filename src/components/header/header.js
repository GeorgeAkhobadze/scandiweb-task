import Logo from "../brand-icon.svg"
import CartIcon from "./headercomponents/cart-icon.svg"
import "./header.css"
import React from "react";
import PriceContext from "../../context/priceContext";



class Header extends React.Component {
    static contextType = PriceContext

    constructor(props) {
        super(props);
        this.state = {
          priceValue: "$",
        };
    
        // this.handleChange = this.handleChange.bind(this);
      }

    //   handleChange(e) {
    //     console.log("priceValue Selected!!");
    //     this.setState({ priceValue: e.target.value });
    // }
 

render() {
    // const { priceList } = this.context
    console.log(this.state.priceValue)
    return(
        <PriceContext.Consumer>{(priceContext) => {
            const { priceList,priceValue, changeCurrency } = priceContext;
            // console.log(PriceContext)
            return(
                <div className="header">
                <div className="header-navigation">
                <ul className="header-navigation-list">
                    <li className="header-navigation-list__item nav--active">WOMEN</li>
                    <li className="header-navigation-list__item">MEN</li>
                    <li className="header-navigation-list__item">KIDS</li>
                </ul>
                </div>
                <div className="header-logo"><img src={Logo} alt="Brand Name"/></div>
                <div className="header-cart">
                    <select className="value-input" value={priceValue} onChange={(e) => changeCurrency(e.target.value)}>
                        {priceList.map((currency, number) => {
                            return(
                                <option value={`${currency.symbol}`} className="value-input option value-usd">{currency.symbol}</option>
                            )
                        })}
    
                        {/* <option className="value-input option value-usd">€</option>
                        <option className="value-input option value-usd">¥</option> */}
                    </select>
                    <div className="header-cart-icon"><img src={CartIcon} alt="Cart"/></div>
                </div>       
            </div>
            )
        }}</PriceContext.Consumer>

        )
}

}

export default Header;