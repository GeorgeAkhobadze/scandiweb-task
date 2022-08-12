import Logo from "../brand-icon.svg"
import CartIcon from "./headercomponents/cart-icon.svg"
import "./header.css"



const Header = () => {

 


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
            <select className="value-input">
                <option value="$" disabled selected hidden>$</option>
                <option className="value-input option value-usd">$</option>
                <option className="value-input option value-usd">€</option>
                <option className="value-input option value-usd">¥</option>
            </select>
            <div className="header-cart-icon"><img src={CartIcon} alt="Cart"/></div>
        </div>       
    </div>






    )
}

export default Header;