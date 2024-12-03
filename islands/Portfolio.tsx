const features = [
  {
    name: "Seriously Eats",
    description:
      'Our laptop sleeve is compact and precisely fits 13" devices. The zipper allows you to access the interior with ease, and the front pouch provides a convenient place for your charger cable.',
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-feature-07-detail-01.jpg",
    imageAlt:
      "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
    ProjectLink: "https://www.seriouslyeats.com/",
  },
  {
    name: "Refined details",
    description:
      "We design every detail with the best materials and finishes. This laptop sleeve features durable canvas with double-stitched construction, a felt interior, and a high quality zipper that hold up to daily use.",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-feature-07-detail-02.jpg",
    imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Portfolio() {
  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight font-seri  sm:text-4xl">
            Portfolio
          </h2>
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
                <h3 className="text-lg font-medium ">
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
                {feature.ProjectLink ? (
                  <a
                    href={feature.ProjectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt={feature.imageAlt}
                      src={feature.imageSrc}
                      className="aspect-[5/2] w-full rounded-lg bg-gray-100 object-cover"
                    />
                  </a>
                ) : (
                  <img
                    alt={feature.imageAlt}
                    src={feature.imageSrc}
                    className="aspect-[5/2] w-full rounded-lg bg-gray-100 object-cover"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
