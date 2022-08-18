import { createContext, useEffect, useState } from "react";    
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
const CatalogContext = createContext();



export function CatalogProvider({ children }) {

    const [catalogItems, setCatalogItems] = useState(null)

    useEffect(() => {
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
                }
            }
            }
        `,
        })
        .then((result) => setCatalogItems(result?.data?.category?.products));

    }, [])


    return(
        <CatalogContext.Provider value={{ productList: catalogItems }}>{children}</CatalogContext.Provider>
    )
}

export default CatalogContext;

