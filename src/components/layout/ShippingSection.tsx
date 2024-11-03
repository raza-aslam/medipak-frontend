import { FeatureData } from "../shared/InfrasturctureData";
import Image from 'next/image';

const ShippingSection = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#35A29F] to-[#0B666A]">
        <div className="text-center h-48">
          <h1 className="text-4xl font-light pt-20 text-white">CARING FOR YOU IS OUR PRIVILEGE</h1>
        </div>
        
        {/* Border top with reduced width on left and right */}
        <div className="relative flex flex-wrap justify-between gap-10 py-10 px-5 md:px-10">
          <div className="absolute inset-x-[12%] top-0 border-t-2 border-teal-300"></div>

          {FeatureData.map((item) => (
            <div key={item.id} className="w-full md:w-1/3 lg:w-1/4">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={item.Image}
                  alt={item.title}
                  className="w-24 h-24 object-contain"
                />
                <h2 className="text-xl font-medium text-white mt-4">{item.title}</h2>
                <p className="text-teal-300 font-light text-center">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShippingSection;
