import { ProductType } from "@/components/models/productmodels";
import Image from 'next/legacy/image'

export const ParamsData = async () => {
    const response = await fetch(`https://fastapiproductapi-production.up.railway.app/products/`);
  
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    const data: ProductType[] = await response.json();
    return data;
};

const DynamicProductPage = ({ params }: { params: ProductType }) => {
    return (
        <div className="max-w-6xl mx-auto p-6 bg-white" key={params.product_id}>
            <div className="flex flex-col md:flex-row gap-10">
                
                {/* Left Section: Product Image */}
                <div className="md:w-1/2">
                    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition duration-600">
                        <Image
                        key={params.product_id}
                            src={params.product_image}
                            alt={params.product_name}
                            width={500}
                            height={500}
                            className="object-cover rounded-lg hover:scale-110 transition-transform duration-200"
                        />
                    </div>
                </div>

                <div className="md:w-1/2">
                    {/* Product Title */}
                    <h1 className=" mt-10 text-3xl font-bold text-gray-900 mb-4">{params.product_name}</h1>

                    
            </div>

         
        </div>
        </div>
    );
};

export default DynamicProductPage;
