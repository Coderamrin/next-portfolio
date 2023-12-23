import About from "../components/About";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
