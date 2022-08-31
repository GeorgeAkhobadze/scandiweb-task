import React from "react";
import "./cartpage.css"
import CartImage from "../catalog/catalogItem/catalogitemimg.png"

class CartPage extends React.Component {
    render() {
        return(
            <div className="cartpage-wrapper">
                <div className="cartpage-title">Cart</div>
                <div className="cart">
                    <div className="cart-item">
                        <div className="cart-item__information">
                            <p className="cart-item__title cart-item__title_bold">Apollo</p>
                            <p className="cart-item__title">
                            Running Short
                            </p>
                            <p className="cart-item__price">$50.00</p>
                            <p className="cart-small-title">
                            SIZE:
                            </p>
                            
                            <div className="cart-item--sizes">
                                <div className="cart-item__size">
                                    XS
                                </div>
                                <div className="cart-item__size cart-item__size--active">
                                    S
                                </div>
                                <div className="cart-item__size">
                                    M
                                </div>
                                <div className="cart-item__size">
                                    L
                                </div>
                            </div>
                            <p className="cart-small-title">
                            COLORS:
                            </p>
                            <div className="cart-item__colors">
                                <div className="cart-item__color"/>
                                <div className="cart-item__color cart-item__color--active"/>
                                <div className="cart-item__color"/>
                            </div>
                     
                        </div>
                        <div className="cart-item__image">
                            <img src={CartImage}/>
                        </div>
                    </div>
                </div>
            </div>
            
        )
        
    }
}

export default CartPage;