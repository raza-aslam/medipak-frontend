import Components from "@/components/DynaMicComponentFolder/Components"
import { NavbarData } from "@/components/shared/InfrasturctureData";


export const generateStaticParams =  () => {
   return NavbarData.map((data) => ({
    pages: String(data.id)
  }))
}


const Pages = ({params}: {params: {pages: string}}) => {
    console.log(params)
    
  return (
    <main>
      <Components params={params} />
    </main>
  )
}

export default Pages
