import Image from "next/image";
import whiteArrow from "@/assets/productimages/white-arrow.png"
import { Images } from "@/components/shared/InfrasturctureData"

const HowItWorksComponent = ({content}: {content: Images}) => {
  return (
    <div>
    <div className="bg-teal-600/[0.9] pb-3 md:rounded-md">
        <div key={content.position} className="relative pt-[5em] pb-[10px] ">
            <div className="md:block hidden">
            {content.isWhiteArrowAvailable && <Image src={whiteArrow} alt="whileAroowImage" className="absolute top-1 -right-20" />}
            </div>
            <div
              className="absolute top-0 left-0 right-0 mx-auto w-[70px] h-[80px] bg-no-repeat bg-[position:-30px_-828px]"
              style={{
                backgroundImage: `url(${content.bgIconImage.src})`,
                backgroundPosition: `${content.position}`,
              }}
            ></div>
          </div>
      <div className="px-3 w-full">
        <h3 className="text-center text-[1.75rem] leading-8 font-semibold mb-2">
          {content.title}
        </h3>
        <p className="mb-4 text-base text-white">
        {content.description}
        </p>
      </div>
    </div>
    <div className="lg:flex hidden w-40 h-1 bg-teal-400 m-auto mt-10"></div>
    </div>
  )
}

export default HowItWorksComponent