import Footer from "@/components/Footer";
import TopNav from "@/components/TopNav";
import InstructionsPage1 from "./InstructionsPage";

const page = () => {
  return (
    <section className="bg-white text-black">
      <TopNav />
      <InstructionsPage1 />
      <Footer />
    </section>
  );
};

export default page;
