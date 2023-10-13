import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Companies from "@/components/Companies";
import Why from "@/components/Why";
import Shopify from "@/components/Shopify";
import Faqs from "@/components/Faqs";
import Ready from "@/components/Ready";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <section className="bg-[url('/bg.svg')] ml-[160px] bg-cover h-[868px]">
        <Navbar />
        <div className="mt-[160px] ml-[32px]">
          <Hero />
        </div>
      </section>
      <div className="mt-[200px] ml-[162px]">
        <Companies />
      </div>

      <div className="mt-[192px] ml-[160px]">
        <Why />
      </div>

      <div className="mt-[187px] ml-[160px]">
        <Shopify />
      </div>

      <div className="mt-[194px] ml-[160px]">
        <Faqs />
      </div>

      <div className=" mt-[96px] ml-[160px]">
        <Ready />
      </div>

      <div className="mt-[96px] ml-[160px]">
        <Footer />
      </div>
    </main>
  );
}
