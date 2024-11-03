"use client"
import  BannerImage  from "@/components/layout/BannerImage"
import ShippingSection from "@/components/layout/ShippingSection"
import OurRecentWork from "@/components/layout/OurRecentWork"
import Howitworksection from "@/components/layout/Howitworksection"
import AutoSlider from "@/components/layout/SliderLogo"


 


const page = () => {
  return (
    <div>
    
      
    <BannerImage/>
    <ShippingSection/>
    <OurRecentWork/>
    <Howitworksection/>
    <AutoSlider/> 
  
  
    </div>
  )
}

export default page
