import axios from "axios"
import { useEffect, useState } from "react";
import type { ProductType } from "./@types/ProductType";

const App = () => {
  const [products, setProducts] = useState<ProductType[]>([])
 
useEffect(() => {
   axios.get("https://dummyjson.com/product").then(res => {
   setProducts(res.data.products)
  })
console.log(products);
},[])

  return (
    <div className="p-5">
      <div className="flex items-center gap-5">

      </div>
    </div>
  )
}

export default App
