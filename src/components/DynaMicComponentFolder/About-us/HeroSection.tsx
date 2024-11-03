import { Aboutusdata } from "@/components/shared/AboutData";
import Image from 'next/legacy/image'

const HeroSection = () => {
  return (
    <div className=' w-auto h-auto px-12 bg-[#48CFCB]'>
      <div className="flex items-center justify-center">
        <div className="border-t-2 rounded-lg border-[#B43F3F] flex-1"></div>
        <h1 className="px-4 text-2xl font-semibold my-12 ">
          {Aboutusdata.title}
        </h1>
        <div className="border-t-2 rounded-lg border-black flex-1"></div>
      </div>

      <div>
        {Aboutusdata.Aboutdata.map((item) => (
          <div key={item.id}>
            <div>
              <h1 className="text-2xl font-bold my-10">{item.title}</h1>
              <p className=" text-lg w-auto">{item.paragraph}</p>
              {/* Only render the images section if the item has images */}
              {item.images && item.id === 3 && (
                <div className="flex flex-wrap justify-between">
                  {item.images.map((image) => (
                    <div key={image.id} className="flex flex-col items-center mx-16 ">
                      <Image
                        src={image.image}
                        alt={image.title}
                        className="w-24 h-24 object-contain bg-white rounded-full"
                      />
                      <h1 className=" text-lg mt-4 ">{image.title}</h1>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
