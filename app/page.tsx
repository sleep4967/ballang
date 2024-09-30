"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../types/type.api";
import Link from "next/link";

function HomePage() {
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
    <div className="">
      <header className="pt-6 mb-4 flex items-center border-b-2">
        <Link className="ml-6 mb-8 font-bold text-xl" href={"/"}>발랑</Link>
        <Link className="ml-10 mb-8" href={"/brands"}>BRANDS</Link>
        <Link className="ml-auto mb-8" href={"/sign-up"}>회원가입</Link>
        <Link className="ml-10 mb-8 mr-5" href={"/log-in"}>로그인</Link>
      </header>
      <h1 className="text-3xl text-center mt-4">Trending</h1>
      <ul className="grid-cols-6 grid ml-8 mr-8">
      {products.map((product: Product) => (
        <li key={product.id} className="text-sm ml-4 mr-3">
          <img className="w-[230px] h-[270px] hover:scale-105 hover:duration-150" src={product.imgSrc}></img>
          <h2 className="font-bold mt-3">{product.brand.nameEn}</h2>
          <p className="mt-4">{product.name}</p>
          <span className="flex">
            <p className="mt-3 mr-4 mb-3 text-red-600 line-through">￦{product.originalPrice.toLocaleString()}</p>
            <p className="mt-3 mb-3">￦{product.price.toLocaleString()}</p>
          </span>
        
        </li>
        
      ))}
      </ul>
    </div>
  );
}

export default HomePage