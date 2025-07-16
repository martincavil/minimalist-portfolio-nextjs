import DotGridBackground from "@/components/DotGridBackground";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Posts from "@/components/Posts";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <DotGridBackground />
      <Header />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Posts />
      <Footer />
    </>
  );
}
