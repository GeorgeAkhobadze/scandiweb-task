
import "./catalog.css"
import { useContext } from "react"
import CatalogContext from "../../context/catalogContext"
import CatalogItem from "./catalogItem/catalogItem"

const Catalog = () => {

    const { productList } = useContext(CatalogContext)
    console.log(productList)

    return(
<>
        <h3 className="catalog-title">Category Name</h3>
        <div className="catalog">
            {productList?.map((item , index) =>{
                return(
                 <CatalogItem key={index}  name={item?.name} image={item?.gallery[0]} />
                )
                
            })}
        </div>
 
        </>

    )
}

export default Catalog;