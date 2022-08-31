import React from 'react'
import { Link } from 'react-router-dom'
import ProductImage from "../catalog/catalogItem/catalogitemimg.png"
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import "./productpage.css"
class ProductPage extends React.Component {

    componentDidMount() {
        const client = new ApolloClient({
            uri: 'http://localhost:4000/',
            cache: new InMemoryCache(),
        });
        
        client
            .query({
            query: gql`
                query {
                    product(id: "${this.props.id}") {
                        name
                        brand
                        description
                        prices {
                          currency {
                            label
                          }
                          amount
                        }
                        attributes {
                          name
                          type
                          items {
                            displayValue
                            value
                            id
                          }
                        }
                      }
                }
            `,
            })
            .then((result) => {
                console.log(result, "THIS IS RESULT")
                this.setState({
                    product: result
                })  
            })
    }

render() {

   console.log(() => this.props.changeId(), "PROPS ID")

    return(
        <div className='productmodal'>
        <div className="productmodal-images-container">
            <div className="productmodal-images-gallery">
                <img src={ProductImage}/>
                <img src={ProductImage}/>
                <img src={ProductImage}/>
            </div>
            <div className="productmodal-main-img">
                <img src={ProductImage}/>
            </div>
        </div>
        <div className='productmodal-info-container'>
            <div className='productmodal-brand'>
                Apollo
            </div>
            <div className='productmodal-name'>
                Running Short
            </div>
            <div className='productmodal-size-container'>
                <p className='productmodal-default-title'>SIZE:</p>
                <div className='productmodal-sizes'>
                    <div className='productmodal-size'>
                        XS
                    </div>
                    <div className='productmodal-size productmodal-size--active'>
                        S
                    </div>
                    <div className='productmodal-size'>
                        M
                    </div>
                    <div className='productmodal-size'>
                        L
                    </div>
                </div>
            </div>
            <div className='productmodal-color-container'>
            <p className='productmodal-default-title'>COLOR:</p>
            <div className='productmodal-colors'>
                <div className='productmodal-color productmodal-color--active'>

                </div>
                <div className='productmodal-color'>

                </div>
                <div className='productmodal-color'>

                </div>
            </div>
            </div>

            <div className='productmodal-price-container'>
            <p className='productmodal-default-title'>PRICE:</p>
            <p className='productmodal-price'>$50.00</p>
            </div>

            <button className='productmodal-add-btn'>
            ADD TO CART
            </button>

            <div className='productmodal-description'>
            Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.
            </div>
        </div>
        <div onClick={() => this.props.changeId("")}>Exit</div>
    </div>
        
        

    )
}
}

export default ProductPage;