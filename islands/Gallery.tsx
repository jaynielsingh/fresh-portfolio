const files = [
  {
    id: 1,
    source:
      "https://utfs.io/f/nm6dxkCwAcsXX9if1IEsBufkz15cUV7AKiq3ESC9LlYmW8eT",
  },
  {
    id: 2,
    source:
      "https://utfs.io/f/nm6dxkCwAcsX52pJ6InQ7G8FvZb5SXImHUfogM1n3jOdPxWr",
  },
  {
    id: 3,
    source:
      "https://utfs.io/f/nm6dxkCwAcsXJEvkQNfUdbDXoWliu83TLE7Ng0v1KtPfQkFZ",
  },
  {
    id: 4,
    source:
      "https://utfs.io/f/nm6dxkCwAcsXXeOO0kaEsBufkz15cUV7AKiq3ESC9LlYmW8e",
  },
  {
    id: 5,
    source:
      "https://utfs.io/f/nm6dxkCwAcsXDK1I113YkErVxICUnMgF5AR2Bc06vyj9ZSN4",
  },
  {
    id: 6,
    source:
      "https://utfs.io/f/nm6dxkCwAcsXR5hxctV2dXFvIeTptfbaHs3Wzurig1DKo4cM",
  },
  {
    id: 7,
    source:
      "https://utfs.io/f/nm6dxkCwAcsXQ6HgxYwlOsd54QkVJxHKwt8LmuqcZ7FW9XbT",
  },
  {
    id: 8,
    source:
      "https://utfs.io/f/nm6dxkCwAcsXWHDT3aq8ABbO3RxEq1hndJ9sGfZQaF5MUvDt",
  },
];

export default function Gallery() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
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
          <li key={file.id} className="relative">
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
