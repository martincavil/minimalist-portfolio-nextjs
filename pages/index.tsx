import DotGridBackground from "@/components/DotGridBackground";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <DotGridBackground />
      <Header />
      <Hero />
      <div className="h-screen"></div>
    </>
  );
}
