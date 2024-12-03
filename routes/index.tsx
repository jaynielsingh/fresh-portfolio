import AboutMe from "../components/AboutMe.tsx";
import Skill from "../components/skills.tsx";
import Footer from "../islands/Footer.tsx";
import Hero from "../islands/Hero.tsx";
import Navbar from "../islands/Navbar.tsx";
import Portfolio from "../islands/Portfolio.tsx";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Skill/>
      <Portfolio/>
      <Footer />
    </div>
  );
}
