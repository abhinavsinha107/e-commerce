import Slider from "../../components/slider.js/Slider";
import Product from "../../components/product/Product";
import { useEffect } from "react";

const Home = () => {
  const url = window.location.href;
  // alert(url);

  const scrollToProducts = () => {
    if(url.includes("#products")) {
      window.scrollTo({
        top: 700,
        behavior: "smooth"
      })
      return;
    }
  }

  useEffect(() => {
      scrollToProducts();
    }, [])

  return <div>
    <Slider />
    <Product />
  </div>;
};
export default Home;
