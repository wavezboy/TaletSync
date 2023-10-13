import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="bg-[url('/bg.svg')] bg-cover h-[868px]">
        <Navbar />
        <div className="mt-[160px]">
          <Hero />
        </div>
      </section>
    </main>
  );
}
