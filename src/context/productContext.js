import React, { createContext } from "react";    
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';



const ProductContext = createContext()

export class ProductProvider extends React.Component {

    state = {
        product: [],
        productId: "",
        productModalVisible: false,
    }

    changeId = (value) => {
        this.setState({ productId: value})
    }
    
    showProductModal = (value)  => {
        this.setState({ productModalVisible: value })
    }



    render() {
        return(
            <ProductContext.Provider value={{ ...this.state, changeId: this.changeId }}>{this.props.children}</ProductContext.Provider>
        )
    }

}

export default ProductContext;

