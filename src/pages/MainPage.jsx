import Preview from "../components/Preview/Preview";
import PopularProducts from "../components/PopularProducts/PopularProducts";
import Comfort from "../components/Comfort/Comfort";
import EcoMaterials from "../components/EcoMaterials/EcoMaterials";
import Follow from "../components/Follow/Follow";
import Discount from "../components/Discount/Discount";

export default function MainPage() {
  return (
    <>
      <Preview />
      <PopularProducts />
      <Comfort />
      <EcoMaterials />
      <Follow />
      <Discount />
    </>
  );
}
