import Contact from "../Contact";
import Header from "../Header";
import Navbar from "../NavBar";

const LeftSection = () => {
  return (
    <div className="px-5">
      <div className="sticky top-0 grid grid-rows-[35%_45%_20 %]  md:h-[90vh] h-[40vh]">
        <Header />
        <Navbar />
        <Contact />
      </div>
    </div>
  );
};
export default LeftSection;
