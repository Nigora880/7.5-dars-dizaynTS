import axios from "axios"
import {useEffect, useState, type ChangeEvent } from "react";
import type { ProductType } from "./@types/ProductType";
import ProductItem from "./components/ProductItem";
import type { CategoryType } from "./@types/CategoryType";
import { Loading } from "./assets";

const App = () => {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState<ProductType[]>([])
  const [category, setCategory] = useState<CategoryType[]>([])
  const [categorySlug, setCategorySlug] = useState<string | null>(null)


useEffect(() => {
  setLoading(false)
   axios.get(`https://dummyjson.com/products`).then(res => setProducts(res.data.products))
},[])

useEffect(() => {
axios.get(`https://dummyjson.com/products/categories`).then(res => {
  setCategory(res.data);
})
},[])

useEffect(() => {
  if(categorySlug){
  axios.get(`https://dummyjson.com/products/category/${categorySlug}`).then(res => {
    setProducts(res.data.products)
    setLoading(false)
  })
}
  },[categorySlug])
  
function handleClickSelect(e:ChangeEvent<HTMLSelectElement>){
  setLoading(true)
  setCategorySlug(e.target.value)
}

  return (
    <div className="p-5">
      <div className="flex items-center gap-5 pb-[20px]">
        <input className="w-[300px] p-2 rounded-md  border-[1px] outline-none" placeholder="qidirish" name="search" type="text" />
        <select onChange={handleClickSelect} className="w-[300px] p-2.5 rounded-md border-[1px] ">
          <option value="all">all</option> 
          {category.map((item, index) => <option key={index} value={item.slug}>{item.name}</option>)}
        </select>
      </div>
      <div className="flex justify-between gap-5 flex-wrap">
        {loading ? <img className="items-center justify-center flex mx-auto scale-[0.9]" src={Loading} alt="loading..." width={200} height={200} /> : products.map(item => <ProductItem key={item.id} item={item}/>)}
      </div>
    </div>
  )
}

export default App
