import Image from "next/image";
import Main from "./components/Main";
import Breathwork from "./components/Breathwork";
import Divider from "./components/Divider";
import About from "./components/About";
import Help from "./components/Help";
import Meet from "./components/Meet";
import Testimonials from "./components/Testimonials";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Main></Main>
      <Breathwork></Breathwork>
      <About></About>
      <Divider size="ten"></Divider>
      <Help></Help>
      <Divider size="twelve"></Divider>
      <Meet></Meet>
      <Divider size="twelve"></Divider>
      <Testimonials></Testimonials>
      <Divider size="twelve"></Divider>
      <Checkout></Checkout>
      <Footer>
      </Footer>
    </>
  );
}
