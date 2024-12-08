const files = [
  {
    id: 1,
    source:
      "https://utfs.io/f/nm6dxkCwAcsXfKbI3oHujyi96LUO1MeB05Tmpt4NgkzCGFAr",
  },
  {
    id: 2,
    source:
      "https://utfs.io/f/nm6dxkCwAcsXCX0iHnWDFhVZn8x6msev9wKqTH1fcktQSY5O",
  },
  {
    id: 3,
    source:
      "https://utfs.io/f/nm6dxkCwAcsXQnI3DWwlOsd54QkVJxHKwt8LmuqcZ7FW9XbT",
  },
  {
    id: 4,
    source:
      "https://utfs.io/f/nm6dxkCwAcsXZIeZUnw9nCquXrpOsJE3hkDWL69Poli4fjGg",
  },
  {
    id: 5,
    source:
      "https://utfs.io/f/nm6dxkCwAcsXHh8nBGUU8owadKmBNTpq0lh1YD3Wg9zjMG5V",
  },
  {
    id: 6,
    source:
      "https://utfs.io/f/nm6dxkCwAcsXIdwtwpajG53p0hxzltNVkmQyMuXKYe7sw2Ho",
  },
  {
    id: 7,
    source:
      "https://utfs.io/f/nm6dxkCwAcsXKX1OHfQIDhLQxnsVBgXtkjGF7Z1bAaPeuJCH",
  },
  {
    id: 8,
    source:
      "https://utfs.io/f/nm6dxkCwAcsXA4AISvyyFU58hSotLdNiMulmxcpO0fW23evz",
  },
];

export default function Gallery() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
      <div
        data-aos="zoom-in-up"
        data-aos-delay="500"
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight font-serif  sm:text-4xl">
          Gallery
        </h2>
        <p class="text-base font-normal">
          ________________________________________
        </p>
        <p className="my-10 ">
          Photography is more than just a hobby for me; it’s a way to express
          creativity, tell stories, and preserve the beauty of the world around
          us. Each image in this collection reflects a unique perspective, from
          serene landscapes and vibrant cityscapes to candid portraits and
          intricate details often overlooked.
        </p>
      </div>
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {files.map((file) => (
          <li
            key={file.id}
            data-aos="zoom-in-up"
            data-aos-delay="500"
            data-aos-duration="3000"
            className="relative"
          >
            <div className="aspect-w-4 aspect-h-3 overflow-hidden  rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              <img
                alt=""
                src={file.source}
                className=" pointer-events-none w-full h-full object-contain group-hover:opacity-75"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
