import Nav from "./nav";
import Hero from "./hero";
import Project from "./project";
import Tertimonial from "./testimonial";
import Footer from "./footer";

const main = () => {
  return (
    <div className="bg-indigo-600">
      <Nav />
      <Hero />
      <Project />
      <Tertimonial />
      <Footer />
    </div>
  );
};

export default main;
