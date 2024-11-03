"use client"
import { ProductType } from "@/components/models/productmodels"
import { ProductCategories } from "../product-categories/ProductCard"
import { useEffect, useState } from "react";


const GetallId = () => {
  const [data, setData] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from your API endpoint
        const response = await fetch("https://fastapiproductapi-production.up.railway.app/products/");
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error("Failed to fetch product data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {data.map((item) => (
        <div
          key={item.product_id}
          className="border border-gray-300 m-4 p-4 rounded-lg shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
        >
          <p className="text-gray-700">Product ID: {item.product_id}</p>
          <h1 className="text-lg font-semibold">{item.product_name}</h1>
        </div>
      ))}
    </div>
  );
};

export default GetallId;
  
