import first from "@/assets/image/navbar1.jpg"
import mask from "@/assets/image/mask.webp"
import uniform from "@/assets/image/uniformpic.webp"
import wheelchair from"@/assets/image/wheelchair.webp"
import bpm from "@/assets/image/Untitled-design-3.webp"
import sanitizer from "@/assets/image/Untitled-design-5.webp"
import ser1 from "@/assets/image/servicefirst.png"
import ser2 from "@/assets/image/secondimgage.webp"
import ser3 from "@/assets/image/thirdimage.webp"
import porduct1 from "@/assets/productimages/first.jpg"
import porduct2 from "@/assets/productimages/second.jpeg"
import porduct3 from "@/assets/productimages/third.jpeg"
import porduct4 from "@/assets/productimages/fourth.jpg"
import porduct5 from "@/assets/productimages/fifth.jpeg"
import porduct6 from "@/assets/productimages/six.jpeg"
import stripeImage from "@/assets/productimages/stripee.png"
import { StaticImageData } from "next/image"
import aghakhan from "@/assets/clientlogo/Aga-Khan-Foundation-.webp"
import aghakhaneducation from "@/assets/clientlogo/aghakhaneducation.png"
import faysalbank from "@/assets/clientlogo/faysal-bank.png"
import hashmani from "@/assets/clientlogo/Hashmanis-Logo.png"
import lady from "@/assets/clientlogo/lady-dufferin.webp"
import pakistan from "@/assets/clientlogo/pakistan custom.png"
import siut from "@/assets/clientlogo/Siut.png"
import kidney from "@/assets/clientlogo/Thekidneycenter.png"

export const NavbarData = 
[
{
    id: 1,
    slug: "Home",
    name : "HOME",
    path: "/"
},
{
    id: 2,
    slug: "Product categories",
    name : "PRODUCT CATEGORIES",
    path: "/product-categories"
},
{
    id: 3,
    slug: "About US",
    name : "ABOUT US",
    path: "/about-us"
},
{
    id: 4,
    slug: "Contact Us",
    name : "CONTACT US",
    path: "/contact-us"
}

] 
export const BannerImages=[
    {
        id:1,
        Image : first, 
        slug:"picture0"
    },
    {
        id:2,
        Image : mask, 
        slug:"picture1"
    },
    {
        id:3,
        Image : uniform, 
        slug:"picture2"
    },
    {
        id:4,
        Image : wheelchair, 
        slug:"picture3"
    },
    {
        id:5,
        Image : bpm, 
        slug:"picture4"
    },
    {
        id:6,
        Image : sanitizer, 
        slug:"picture5"
    }
]
export const FeatureData=[
    {
        id:1,
        Image:ser1,
        title:"AFFORDABLE SHIPPING",
        description:"We ship all across Pakistan affordable prices."
    },
    {
        id:2,
        Image: ser2,
        title:"PRICE BEAT GUARANTEE",
        description:"We will beat any & all prices you're offered."
    },
    {
        id:3,
        Image: ser3,
        title:"FAST DELIVERY TIMES",
        description:"Get your packaage quickly with our fast delivery service."
    }
]

export const OurrecentworkData=[
    {
        id: 1,
        title: "Our Recent Work",
        description: "We are committed to providing high-quality healthcare and surgical instruments that meet the stringent demands of the medical field. Our recent products demonstrate our expertise in delivering reliable and innovative solutions that are beneficial for healthcare professionals."
    }
]

export const ProductImagedata=[
    {
        id : 1,
        Image: porduct1,
        title:"Surgical and Medical Instrument"

    },
    {
        id:2,
        Image:porduct2,
        tilte: "Safety Equiment"        
    },
    {
        id:3,
        Image:porduct3,
        title:"Constraction and Safety Equiment"
    },
    {
        id:4,
        Image:porduct4,
        title: "Constraction Tools"
    },
     {
         id:5,
         Image:porduct5,
         title:"Medical Disposable Plastic Product"
     },
     {
         id:6,
         Image:porduct6,
         title:"Electronic Products"
     }
]

interface HowItWorks {
    title: string
    iconImages: Images[]
}

export interface Images {
    bgIconImage: StaticImageData
    isWhiteArrowAvailable: boolean
    position: string
    title:string
    description: string
}

export const HowitworkData: HowItWorks={
    title: "How It Works",
    iconImages: [
        {
            bgIconImage: stripeImage,
            isWhiteArrowAvailable: true,
            position: "-30px -828px",
            title: "Order form",
            description: "Kindly send us your detailed list of required items. We will provide you with competitive quotes from 2-3 reputable suppliers, allowing you to select the best option that meets your needs and budget"
},
        {
            bgIconImage: stripeImage,
            isWhiteArrowAvailable: true,
            position: "-30px -945px",
            title: "Payment Process",
            description: "Kindly provide detailed information regarding your payment terms and conditions, including policies on credit and cash payments. Additionally, please share any relevant queries. This will help me gain a clear understanding of your payment procedures"
                },
        {
            bgIconImage: stripeImage,
            isWhiteArrowAvailable: false,
            position: "-30px -1170px",
            title: "Delivery",
            description: " Your order will be delivered on time, precisely within the expected timeframe, ensuring you receive it as scheduled"
},
    ],
}
export const Slidelogodata=[
    {
        id:1,
        Image:aghakhan,
        title: "AGA KHAN FOUNDATIOM",
    },
    {
        id:2,
        Image:aghakhaneducation,
        title: "AGA KHAN EDUCATION SERVIES",
    },
    {
        id:3,
        Image:faysalbank,
        title:"FAYSAL BANK",
    },
    {
        id:4,
        Image:hashmani,
        title:"HASHMANI GROUP OF HOSPITALS",
    },
    {
        id:5,
        Image:lady,
        title:"LADY DUFFERIN HOSPITAL",
    },
    {
        id:6,
        Image:pakistan,
        title: "PAKISTAN CUSTOMS",
    },
    {
        id:7,
        Image:siut,
        title: "SIUT HOSPITAL",
    },
    {
        id:8,
        Image:kidney,
        title: "THE KIDNEY CENTER",
    },
]