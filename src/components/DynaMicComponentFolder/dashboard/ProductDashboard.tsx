"use client";
import { useState, useRef } from "react";
import { ProductType } from "@/components/models/productmodels";
import DeleteProduct from "./ProductDelete";
import GetallId from "@/components/DynaMicComponentFolder/dashboard/GetallId";

export default function ProductManager() {
  const [productName, setProductName] = useState<string>("");
  const [productImage, setProductImage] = useState<File | null>(null);
  const [categoryNames, setCategoryNames] = useState<string>("");
  const [productDescription, setProductDescription] = useState<string>("");
  const [successMessageVisible, setSuccessMessageVisible] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<"add" | "delete">("add");

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setProductImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("product_name", productName);
    formData.append("product_description", productDescription);
    formData.append("category_names", categoryNames);

    if (productImage) {
      formData.append("file", productImage);
    }

    fetch(`https://fastapiproductapi-production.up.railway.app/products/`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data: ProductType) => {
        console.log(data);
        console.log("Product added successfully");
        setSuccessMessageVisible(true);

        setTimeout(() => {
          setSuccessMessageVisible(false);
          setProductName("");
          setProductImage(null);
          setCategoryNames("");
          setProductDescription("");

          if (fileInputRef.current) {
            fileInputRef.current.value = ""; // Reset the file input
          }
        }, 2000);
      })
      .catch((error) => {
        console.error("Failed to add product", error);
      });
  };

  return (
    <div className="flex relative">
      {/* Fixed Form Section */}
      <div className="w-1/2 p-6 bg-white shadow-lg rounded-lg">
        <div className="flex justify-start space-x-4 mb-6 mt-6">
          <button
            className={`px-4 py-2 rounded-md ${
              activeSection === "add" ? "bg-blue-600 text-white" : "bg-gray-300 text-black"
            }`}
            onClick={() => setActiveSection("add")}
          >
            Add Product
          </button>
          <button
              className={`px-4 py-2 rounded-md ${activeSection === "delete" ? "bg-blue-600 text-white" : "bg-gray-300 text-black"}`}
              onClick={() => {
                setActiveSection("delete");
                console.log("Delete section activated");
              }}
            >
              Delete Product
          </button>
        </div>

        {successMessageVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-green-500 text-white px-6 py-4 rounded-md shadow-md max-w-xs mx-auto">
              Product added successfully!
            </div>
          </div>
        )}

        {activeSection === "add" ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h1 className="block text-gray-700 font-bold mb-2">Product Name:</h1>
              <input
                type="text"
                id="product_name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <h1 className="block text-gray-700 font-bold mb-2">Product Image:</h1>
              <input
                type="file"
                id="product_image"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ref={fileInputRef}
                required
              />
            </div>

            <div>
              <h1 className="block text-gray-700 font-bold mb-2">Category Names:</h1>
              <input
                type="text"
                id="category_names"
                value={categoryNames}
                onChange={(e) => setCategoryNames(e.target.value)}
                placeholder="Comma separated values (e.g., Electronics, Fashion)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <h1 className="block text-gray-700 font-bold mb-2">Product Description:</h1>
              <textarea
                id="product_description"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Add Product
            </button>
          </form>
        ) : (
          <div>
            <DeleteProduct />
          </div>
        )}
      </div>

      {/* Scrollable GetallId Section */}
      <div className="w-1/2 p-6 overflow-y-auto max-h-screen">
        <h2 className="text-xl font-semibold mb-4">Product List</h2>
        <GetallId />
      </div>
    </div>
  );
}
