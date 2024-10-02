
import { BrandIdProps } from "@/types/type.brandId";
import { BrandProps } from "@/types/type.brands";
import axios from "axios";
import Link from "next/link";
import HomePage from "../page";
import HeaderLayout from "../layout/HeaderLayout";

async function Brands(props: BrandIdProps) {
  const response = await axios.get("https://api.ballang.yoojinyoung.com/brands");
  const brands = response.data.result;
  console.log(brands[0]);

  async (props: {brand: BrandIdProps}) => {
    const response = await axios.get(`https://api.ballang.yoojinyoung.com/brands/${props.brand.searchParams.brandId}`);
    const brandId = response.data.result;
    console.log(brandId)
    console.log(props)
  }
  console.log(props.searchParams.brandId);

  return (
    <main className="h-screen">
      <h2 className="text-center mt-10 text-2xl">BRAND</h2>
      <p className="mt-4 cursor-pointer text-center">All</p>
      <ul className="grid grid-cols-6 mt-4 ml-20">

      {brands.map((brand: BrandProps) => (
        <li key={brand.id} className="mt-4 mb-4">
          <Link href={`/brands?brandId=${brand.id}`}>
            {brand.nameKr}
          </Link>
          </li>
      ))}
      <HeaderLayout />
      </ul>
    </main>
  )
}

export default Brands