"use client"

import { Product } from "@/types/type.api";
import axios from "axios";
import { useEffect, useState } from "react";


function Brand() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    (async() => {
      const response = await axios.get("https://api.ballang.yoojinyoung.com/products")
      setProducts(response.data.result)
      console.log(response.data.result[0])
      
    }
    )()
    
  }, [])
  return (

    <div>
      <ul className="flex">

      {products.map((product) => (
        <li key={product.brand.id}>{product.brand.nameKr}</li>
      ))}
      </ul>
    </div>
  )
}

export default Brand