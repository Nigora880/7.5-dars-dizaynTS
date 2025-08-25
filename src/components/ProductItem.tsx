import type { FC } from "react"
import type { ProductType } from "../@types/ProductType"

const ProductItem:FC<{item:ProductType}> = ({item}) => {
  return (
    <div className="card w-[250px] bg-blue-200 rounded-md overflow-hidden">
    <img className="mb-2" src={item.images[0]} alt="product img" width={300} height={200}/>
    <div className="p-3">
      <h2 className="line-clamp-1 font-bold text-[20px]">{item.title}</h2>
      <p className="line-clamp-2 font-semibold">description: {item.description}</p>
        <p>brand: {item.brand}</p>
        <p>category: {item.category}</p>
        <div className="flex items-center justify-between">
          <strong>{item.price}</strong>
          <strong>{item.rating}</strong>
        </div>
    </div>
  </div>
  )
}

export default ProductItem
