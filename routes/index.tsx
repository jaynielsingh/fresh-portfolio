import AboutMe from "../components/AboutMe.tsx";
import Footer from "../islands/Footer.tsx";
import Hero from "../islands/Hero.tsx";
import Navbar from "../islands/Navbar.tsx";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Footer />
    </div>
  );
}
