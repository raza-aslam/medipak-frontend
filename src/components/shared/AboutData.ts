import { MdDescription } from "react-icons/md";
import Image from "next/image";
import ab from "@/assets/aboutus/one.webp"
import bc from "@/assets/aboutus/two.webp"
import cd from "@/assets/aboutus/three.webp"
import de from "@/assets/aboutus/four.webp"
import ef from "@/assets/aboutus/five.webp"

interface AboutData {
    title: string;
    Aboutdata: DescriptionData[];
}

export interface DescriptionData {
    id: number;
    title: string;
    paragraph?: string;
    images?: ImageData[];
}

interface ImageData {
    id: number;
    title: string;
    image: any;
}

export const Aboutusdata: AboutData = {
    title: "ABOUT US",
    Aboutdata: [
        {
            id: 1,
            title: "OUR Company",
            paragraph:
                "MediPak International is an enterprise driven by excellence, professionalism, and technical expertise. With over 15 years of experience in purchasing, inventory, and warehousing for hospitals, we pride ourselves on our ability to respond urgently to their needs. Registered under GST, MediPak International also operates a production unit for sanitizers and other disinfection products, currently in the approval process for DRAP registration. Additionally, we run wholesale shops for surgical and general items, supported by our warehouse located in the Danso Hall medicine market in Karachi. Our company is committed to promoting local production and creating job opportunities within the community. We currently supply various hospitals and organizations across Karachi, offering a wide range of products including general order supplies (cleaning products, plastic products, chemicals, and safety goods), construction products, laboratory items, and surgical equipment."
        },
        {
            id: 2,
            title: "Our Mission",
            paragraph:
                "To be a company who can be considered a reliable business partner through our technical expertise & experience by empowering the stakeholder of the company. To become the most vibrant, articulated, and reliable partner of industry, a trustful employer, having clear standing in transforming business digitally."
        },
        {
            id: 3,
            title: "Our Values",
            images: [
                {
                    id: 1,
                    title: "INTEGRITY",
                    image: ab
                },
                {
                    id: 2,
                    title: "TRUST",
                    image: bc
                },
                {
                    id: 3,
                    title: "EXCELLENCE",
                    image: cd
                },
                {
                    id: 4,
                    title: "ACCOUNTABILITY",
                    image: de
                },
                {
                    id: 5,
                    title: "MUTUAL RESPECT",
                    image: ef
                }
            ]
        }
    ]
};