import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Contact/>
    </div>
  );
}
