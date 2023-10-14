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
      <section className="bg-[url('/bg.svg')] px-5 bg-cover h-[868px]">
        <Navbar />
        <div className="mt-[160px] px-5">
          <Hero />
        </div>
      </section>
      <div className="mt-[200px] px-5">
        <Companies />
      </div>

      <div className="mt-[192px] px-5">
        <Why />
      </div>

      <div className="mt-[187px] px-5">
        <Shopify />
      </div>

      <div className="mt-[194px] px-5">
        <Faqs />
      </div>

      <div className=" mt-[96px] px-5">
        <Ready />
      </div>

      <div className="mt-[96px] px-5">
        <Footer />
      </div>
    </main>
  );
}
