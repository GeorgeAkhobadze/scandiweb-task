
import "./catalog.css"
import React from "react"
import CatalogContext from "../../context/catalogContext"
import CatalogItem from "./catalogItem/catalogItem"
import CartOverlay from "../cartoverlay/cartOverlay"

class Catalog extends React.Component {
    static contextType = CatalogContext
    render() {
        console.log(this.context)
        return <CatalogItem/>
    }

    // componentDidMount()
}

export default Catalog;