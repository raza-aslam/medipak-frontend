import { NavbarData } from "../shared/InfrasturctureData";
import HeroSection from "@/components/DynaMicComponentFolder/About-us/HeroSection";
import HeroContact from "@/components/DynaMicComponentFolder/Contact-us/HeroContact";
import { ProductType } from "@/components/models/productmodels";
import DynamicProductPage, { ParamsData } from "@/components/DynaMicComponentFolder/product-categories/DynamicProductPage"
import ProductCard from "@/components/DynaMicComponentFolder/product-categories/ProductCard"
import { notFound } from "next/navigation";

const Components = async ({ params }: { params: { pages: string } }) => {
  const paramsData: ProductType[] = await ParamsData();
  const findDataBYID = paramsData.find((items) => String(items.product_id) === params.pages);
  console.log('Params:', params);
  console.log('Fetched Data:', paramsData);
  console.log('Found Data:', findDataBYID);

  return (
    <div>
      {/* If NavbarData has length, render based on page matches */}
      {NavbarData.length > 0 ? (
        params.pages === "about-us" ? (
          <div>
            <HeroSection />
          </div>
        ) : params.pages === "contact-us" ? (
          <div>
            <HeroContact />
          </div>
        ) : params.pages === "product-categories" ? (
          <div>
          <ProductCard />
          </div>
        ): null
      ) : (
        notFound()
      )}

          {paramsData.length > 0 && findDataBYID ? (
        <DynamicProductPage key={findDataBYID.product_id} params={findDataBYID} />
      ) : (
        findDataBYID && params.pages && params.pages !== "product-categories" && notFound()
      )}
    </div>
  );
};

export default Components;
