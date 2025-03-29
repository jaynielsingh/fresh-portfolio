export default function AboutMe() {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div
          data-aos="zoom-in-right"
          data-aos-delay="300"
          className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-48 lg:pt-40 xl:col-span-6"
        >
          <div className="mx-auto max-w-lg lg:mx-0">
            <h1 className="mt-24 text-pretty text-3xl font-serif font-semibold tracking-tight sm:mt-10 sm:text-4xl">
              About Me
            </h1>
            <p class="text-base font-normal">
              ________________________________________
            </p>
            <p className="mt-8 text-pretty  font-medium  ">
              Hi, I’m Jayniel, a self-taught web developer who discovered a
              passion for coding during the COVID lockdown. After being laid
              off, I took the opportunity to dive into web development,
              transforming a challenging time into a new and exciting career.
            </p>
            <p className="mt-8 text-pretty  font-medium ">
              I focus on building responsive, user-friendly websites that help
              businesses stand out and connect with their audience. Every
              project is an opportunity to solve problems and create something
              meaningful.
            </p>
            <p className="mt-8 text-pretty  font-medium  ">
              Outside of web development, I’m an amateur photographer who loves
              capturing the world through my lens. Photography fuels my
              creativity and helps me see the world from new perspectives.
            </p>
            <p className="mt-8 text-pretty  font-medium ">
              I’m always excited to collaborate—let’s bring your vision to life!
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in-left"
          data-aos-duration="1000"
          className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0"
        >
          <img
            alt=""
            src="https://utfs.io/f/nm6dxkCwAcsX2dd1oJc6bkiXNV4lzRBSFAQYIaph1C9Wov6E"
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
          />
        </div>
      </div>
    </div>
  );
}
