const features = [
  {
    name: "Seriously Eats",
    description:
      "Seriously Eats is a Foodie website made with Typescript, Next.js, Tailwind CSS and deployed on Vercel.",
    imageSrc:
      "https://utfs.io/f/nm6dxkCwAcsXhkH1GOmQhbCKmtX02F4ITxS5dO98HoUgrjwE",
    imageAlt: "website picture of food.",
    ProjectLink: "https://www.seriouslyeats.com/",
  },
  {
    name: "Ignis Byte",
    description:
      "Ignis Byte is a freelance web design agency based in San Francisco, CA. It specialize in creating modern, user-friendly websites for startups and small businesses. Made With Next.js, Tailwind CSS, and Typescript.",
    imageSrc:
      "https://utfs.io/f/nm6dxkCwAcsXAp71wuKyyFU58hSotLdNiMulmxcpO0fW23ev",
    imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
    ProjectLink: "https://www.ignisbyte.com/",
  },
  {
    name: "Note Keeper",
    description:
      "Note Keeper is a google note keeping app that allows users to create, edit, and delete notes. It is built with React.JS, Vite.Js, Tailwind CSS, and Typescript.",
    imageSrc:
      "https://utfs.io/f/nm6dxkCwAcsXvOyfQfuoapQhjfn4YLru8q2dw1yceKWA5XsI",
    imageAlt: "note pad and pen",
    ProjectLink: "https://fabulous-sprinkles-8d43dc.netlify.app",
  },
  {
    name: "Morse Code",
    description: "Simple morse code decoder made with Python.",
    imageSrc:
      "https://utfs.io/f/nm6dxkCwAcsXhkw0dsDQhbCKmtX02F4ITxS5dO98HoUgrjwE",
    imageAlt: "Morse code paper",
    ProjectLink: "https://github.com/jaynielsingh/Morse_Code",
  },
  {
    name: "BlackJack",
    description: "Simple blackjack game made with Python.",
    imageSrc:
      "https://utfs.io/f/nm6dxkCwAcsXHn5ZvJMUU8owadKmBNTpq0lh1YD3Wg9zjMG5",
    imageAlt: "blackjack table with cards",
    ProjectLink: "https://github.com/jaynielsingh/BlackJack",
  },
  {
    name: "Weather App Pro",
    description:
      "Weather app made with Python and Flask. Has user authentication and uses twilio API to send sms to users only if they have an account",
    imageSrc:
      "https://utfs.io/f/nm6dxkCwAcsXJWsxljfUdbDXoWliu83TLE7Ng0v1KtPfQkFZ",
    imageAlt: "blackjack table with cards",
    ProjectLink: "https://github.com/jaynielsingh/Weather_App",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Portfolio() {
  return (
    <div className="bg-slate-900">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight font-serif  sm:text-4xl">
            Portfolio
          </h2>
          <p class="text-base font-normal">
            ________________________________________
          </p>
          <p className="mt-4 ">
            Here is a collection of some of my work. I've been working on
            projects for the past few years, and I'm always looking for new
            challenges to push myself and my skills.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {features.map((feature, featureIdx) => (
            <div
              key={feature.name}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
            >
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? "lg:col-start-1"
                    : "lg:col-start-8 xl:col-start-9",
                  "mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4",
                )}
              >
                <h3 className="text-2xl font-medium ">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm ">
                  {feature.description}
                </p>
              </div>
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? "lg:col-start-6 xl:col-start-5"
                    : "lg:col-start-1",
                  "flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8",
                )}
              >
                {feature.ProjectLink
                  ? (
                    <a
                      href={feature.ProjectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        alt={feature.imageAlt}
                        src={feature.imageSrc}
                        className="aspect-[4/2] w-full rounded-lg bg-gray-100 object-cover"
                      />
                    </a>
                  )
                  : (
                    <img
                      alt={feature.imageAlt}
                      src={feature.imageSrc}
                      className="aspect-[4/2] w-full rounded-lg bg-gray-100 object-cover"
                    />
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center item-center">
        <button
          href={"https://www.github.com"}
          className="btn bg-white  text-black hover:bg-accent hover:text-white mb-16"
        >
          View My GitHub
        </button>
      </div>
    </div>
  );
}