import AboutMe from "../components/AboutMe.tsx";
import Skill from "../components/skills.tsx";
import Blog from "../islands/Blog.tsx";
import Footer from "../islands/Footer.tsx";
import Gallery from "../islands/Gallery.tsx";
import Hero from "../islands/Hero.tsx";
import Navbar from "../islands/Navbar.tsx";
import Portfolio from "../islands/Portfolio.tsx";

export default function Home() {
  return (
    <div className="m-1">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skill />
      <Portfolio />
      {/* <Blog/> */}
      <Gallery />
      <Footer />
    </div>
  );
}
