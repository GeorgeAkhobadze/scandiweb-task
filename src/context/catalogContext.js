import React, { createContext } from "react";    
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';



const CatalogContext = createContext()

export class CatalogProvider extends React.Component {

    state = {
        productList: [],
    }

componentDidMount() {
    const client = new ApolloClient({
        uri: 'http://localhost:4000/',
        cache: new InMemoryCache(),
    });
    
    client
        .query({
        query: gql`
            query {
            category {
                products {
                name,
                gallery,
                prices {
                    amount
                }
                inStock
                id
                }
            }
            }
        `,
        })
        .then((result) => {
            // const products = result?.data?.category?.products
            this.setState({
                productList: result?.data?.category?.products
            })  
        })
}



    render() {
        const { productList } = this.state
        return(
            <CatalogContext.Provider value={{ productList }}>{this.props.children}</CatalogContext.Provider>
        )
    }

}

export default CatalogContext;

