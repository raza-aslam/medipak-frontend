import HowItWork from "@/components/layout/HowItWork"
import { HowitworkData } from "@/components/shared/InfrasturctureData"

const Howitworksection = () => {
  return (
    <div className="bg-[#97FEED]">
        
    <div className="text-center  basis-full px-4 w-full  mb-16 text-4xl leading-none text-black font-semibold md:max-w-full pt-16">
    <h2 >{HowitworkData.title}</h2>
 
      </div>

      <div className="flex-wrap flex md:flex-row flex-col ">
          {HowitworkData.iconImages.map((items) => {
            return (
              <div key={items.position} className="basis-1/3 px-4 w-full min-h-[0.06rem] text-black md:max-w-[33.3333%]">
                <HowItWork
                key={items.position}
                content={items}
                />
              </div>
            )
          })}
          </div>

    </div>
  )
}

export default Howitworksection
