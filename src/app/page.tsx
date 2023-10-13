import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Companies from "@/components/Companies";
import Why from "@/components/Why";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="bg-[url('/bg.svg')] bg-cover h-[868px]">
        <Navbar />
        <div className="mt-[160px] ml-[32px]">
          <Hero />
        </div>
      </section>
      <div className="mt-[200px] ml-[32px]">
        <Companies />
      </div>

      <div className="mt-[192px] ml-[32px]">
        <Why />
      </div>
    </main>
  );
}
