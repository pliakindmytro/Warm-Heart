import Header from "../components/Header/Header";
import Preview from "../components/Preview/Preview";
import PopularProducts from "../components/PopularProducts/PopularProducts";
import Comfort from "../components/Comfort/Comfort";
import EcoMaterials from "../components/EcoMaterials/EcoMaterials";
import Follow from "../components/Follow/Follow";
import Discount from "../components/Discount/Discount";
import Footer from "../components/Footer/Footer";

export default function MainPage() {
  return (
    <>
      <Header />
      <Preview />
      <PopularProducts />
      <Comfort />
      <EcoMaterials />
      <Follow />
      <Discount />
      <Footer />
    </>
  );
}
