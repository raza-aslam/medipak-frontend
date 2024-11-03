import {ProductType} from "@/components/models/productmodels" 
import ProductSection from "./ProductSection"

export const ProductCategories  = async (): Promise<ProductType[]> => {
    const response = await fetch("https://fastapiproductapi-production.up.railway.app/products/", {
        cache: "no-store"
    })
    const data:ProductType[] = await response.json()
    if (!data){
        throw new Error("Failed to fetch data")
    }
    return data
}



const ProductCard = async () => {
const data: ProductType[] = await ProductCategories();
    console.log(data)
    return  <ProductSection content={data} />
}

export default ProductCard
