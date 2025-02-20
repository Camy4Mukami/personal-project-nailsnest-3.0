import NavBar from "./components/NavBar";
import HeroSection from "./components/Hero";
import WhyUs from "./components/WhyUs";
import Services from "./components/Services";


export default function Home() {
  return (
    <main className="relative w-full min-h-screen">
      <div className="bg-red-500"> {/* Debug wrapper */}
        <NavBar />
      </div>
      <HeroSection />
      <WhyUs/>
      <Services/>
    </main>
  );
}