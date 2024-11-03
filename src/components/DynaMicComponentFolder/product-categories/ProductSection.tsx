"use client";
import React, { useState } from "react";
import Image from 'next/legacy/image'
import { ProductType } from "@/components/models/productmodels";
import Button from "@/components/shared/Button";
import Link from "next/link"
const ProductSection = ({ content }: { content: ProductType[] }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 9; // Number of products per page

  // Create a Set to store unique category names
  const uniqueCategories = new Set<string>();

  content.forEach((data) => {
    data.category_names.forEach((category) => {
      uniqueCategories.add(category);
    });
  });

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? content.filter((item) => item.category_names.includes(selectedCategory))
    : content;

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Handle category selection
  const handleCategoryClick = (category: string) => {
    setSelectedCategory((prev) => (prev === category ? null : category));
    setCurrentPage(1); // Reset to the first page when category changes
  };

  // Handle page change
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Handle forward/backward navigation
  const handleForward = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleBackward = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="p-5">
      <div className="flex flex-col lg:flex-row">
        {/* Category Section */}
        <div className="lg:w-1/4">
          <h1 className="text-lg m-5 border-b-4 w-24">CATEGORY</h1>
          <div className="m-5">
            {Array.from(uniqueCategories).map((category) => (
              <div key={category} className="mb-3">
                <Button
                  text={category}
                  isSelected={selectedCategory === category}
                  onClick={() => handleCategoryClick(category)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Section */}
        <div className="lg:w-3/4">
          <h2 className="text-xl font-bold mb-5">
            {selectedCategory
              ? `${filteredProducts.length} product(s) in "${selectedCategory}"`
              : `${filteredProducts.length} product(s) in all categories`}
          </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {currentProducts.map((item) => (
                  <Link
                    href={`/${item.product_id}`}
                    key={item.product_id}
                    className="border p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <Image
                      key={item.product_id}
                      src={item.product_image}
                      alt={item.product_name}
                      width={500}
                      height={500}
                      className="w-full h-68 object-cover rounded-t-lg"
                    />
                    <h3 className="text-md text-center font-semibold mt-2">
                      {item.product_name}
                    </h3>
                  </Link>
                ))}
              </div>



          {/* Pagination Controls */}
          <div className="flex justify-center mt-5 space-x-2 items-center">
            {/* Backward Arrow */}
            {currentPage > 1 && (
              <button
                onClick={handleBackward}
                className="px-3 py-1 rounded-lg bg-gray-200 text-gray-700"
              >
                {"<"}
              </button>
            )}

            {/* Show page numbers for the first 3 pages */}
            {Array.from({ length: Math.min(totalPages, 3) }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`px-3 py-1 rounded-lg ${
                  currentPage === number
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {number}
              </button>
            ))}

            {/* Forward Arrow */}
            {currentPage < totalPages && (
              <button
                onClick={handleForward}
                className="px-3 py-1 rounded-lg bg-gray-200 text-gray-700"
              >
                {">"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
