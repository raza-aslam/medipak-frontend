"use client";
import { useState } from "react";

export default function DeleteProduct() {
  const [successMessageVisible, setSuccessMessageVisible] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState<number | undefined>(undefined); // Set to number or undefined
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // Error message state

  const handleDelete = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!deleteId) {
      setErrorMessage("Product ID is required");
      return;
    }

    try {
      const response = await fetch(`https://fastapiproductapi-production.up.railway.app/products/${deleteId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setSuccessMessageVisible(true);
        setErrorMessage(null);

        setTimeout(() => {
          setSuccessMessageVisible(false);
          setDeleteId(undefined); // Clear the input after successful deletion
        }, 2000);

        const data = await response.json();
        console.log(data); // Optional: to see the response message
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.detail || "Failed to delete product");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred while deleting the product");
    }
  };

  return (
    <div className="relative">
      {successMessageVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-green-500 text-white px-6 py-4 rounded-md shadow-md max-w-xs mx-auto">
            Product deleted successfully!
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-red-500 text-white px-6 py-4 rounded-md shadow-md max-w-xs mx-auto">
            {errorMessage}
          </div>
        </div>
      )}

      {/* Delete Product Form */}
      <form onSubmit={handleDelete} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg space-y-6 mt-8">
        <div>
          <label htmlFor="delete_id" className="block text-gray-700 font-bold mb-2">Delete Product by ID:</label>
          <input
            type="number"
            id="delete_id"
            value={deleteId ?? ""} // Handle undefined value
            onChange={(e) => setDeleteId(Number(e.target.value) || undefined)} // Parse input as number
            placeholder="Enter product ID to delete"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-200"
        >
          Delete Product
        </button>
      </form>
    </div>
  );
}
