export default function AboutMe() {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-48 lg:pt-40 xl:col-span-6">
          <div className="mx-auto max-w-lg lg:mx-0">
            <h1 className="mt-24 text-pretty text-5xl font-serif font-semibold tracking-tight sm:mt-10 sm:text-7xl">
              About Me
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium  sm:text-xl/8">
              Hi, I’m Jayniel, a self-taught web developer who discovered a
              passion for coding during the COVID lockdown. After being laid
              off, I took the opportunity to dive into web development,
              transforming a challenging time into a new and exciting career.
            </p>
            <p className="mt-8 text-pretty text-lg font-medium  sm:text-xl/8">
              I focus on building responsive, user-friendly websites that help
              businesses stand out and connect with their audience. Every
              project is an opportunity to solve problems and create something
              meaningful.
            </p>
            <p className="mt-8 text-pretty text-lg font-medium  sm:text-xl/8">
              Outside of web development, I’m an amateur photographer who loves
              capturing the world through my lens. Photography fuels my
              creativity and helps me see the world from new perspectives.
            </p>
            <p className="mt-8 text-pretty text-lg font-medium  sm:text-xl/8">
              I’m always excited to collaborate—let’s bring your vision to life!
            </p>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            alt=""
            src="https://utfs.io/f/nm6dxkCwAcsXNZrKRYFS29Uh5IfGZHtvnAbsrag7JCmjRFVY"
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
          />
        </div>
      </div>
    </div>
  );
}
