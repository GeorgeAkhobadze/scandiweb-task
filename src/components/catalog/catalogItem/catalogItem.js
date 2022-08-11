import CatalogImage from "./catalogitemimg.png"

const CatalogItem = () => {
    return(
        <div className="catalogitem">
            <img src={CatalogImage} alt="Product Name"/>
        </div>
    )
}

export default CatalogItem;