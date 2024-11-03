import { OurrecentworkData, ProductImagedata } from "../shared/InfrasturctureData";



const OurRecentWork = () => {
  return (
    <div className="py-10 bg-gradient-to-r from-[#0B666A] to-[#35A29F]">
      <div className="container mx-auto">
        {OurrecentworkData.map((item) => (
          <div key={item.id} className="flex flex-col items-center text-center ">
            <h1 className="text-4xl font-bold text-white mt-8">{item.title}</h1>
            <p className="text-xl text-white max-w-2xl mt-8">{item.description}</p>
          </div>
        ))}

    </div>
    </div>
  )
}
export default OurRecentWork;
