import AboutMe from "../components/AboutMe.tsx";
import ContactForm from "../components/ContactForm.tsx";
import Blog from "../components/Blog.tsx";
import Footer from "../components/Footer.tsx";
import Gallery from "../components/Gallery.tsx";
import Hero from "../components/Hero.tsx";
import Navbar from "../islands/Navbar.tsx";
import Portfolio from "../components/Portfolio.tsx";
import Skills from "../components/MySkills.tsx";

export default function Home() {
  return (
    <div className="m-1">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Blog />
      <Gallery />
      <ContactForm />
      <Footer />
    </div>
  );
}
