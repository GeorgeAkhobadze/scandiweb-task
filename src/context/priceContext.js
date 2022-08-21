import React, { createContext } from "react";    
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';



const PriceContext = createContext()

export class PriceProvider extends React.Component {

    state = {
        priceList: [],
        priceValue: "$",
    }

    changeCurrency = (value) => {
        this.setState({ priceValue: value})
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
                currencies {
                    label
                    symbol
                  }
            }
        `,
        })
        .then((result) => {
            this.setState({
                priceList: result?.data?.currencies
            })  
        })
}



    render() {
        return(
            <PriceContext.Provider value={{ ...this.state, changeCurrency: this.changeCurrency }}>{this.props.children}</PriceContext.Provider>
        )
    }

}

export default PriceContext;

