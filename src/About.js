import HeroSection from "./components/HeroSlider";
import { useProductContext } from "./context/Productcontext";

const About = () => {
  const { myName } = useProductContext();
  const data = {
    name: "Shopify",
  };

  return(
<>
    {myName}
  <HeroSection myData={data} />;
  </>
  )
};

export default About;
