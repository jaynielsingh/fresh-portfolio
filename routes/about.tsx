import Navbar from "../islands/Navbar.tsx";
import AboutMe from "../components/AboutMe.tsx";
import Footer from "../components/Footer.tsx";
import Skill from "../components/Skills.tsx";

export default function About() {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Skill />
      <Footer />
    </div>
  );
}
