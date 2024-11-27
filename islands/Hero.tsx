export default function Hero() {
  return (
    <div
      className="hero min-h-screen "
      style={{
        backgroundImage:
          "url(https://utfs.io/f/nm6dxkCwAcsXEPQ3Hy8xCeuNfvVqoGZDch46pHgs9dBMFny0)",
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-2 text-5xl font-bold font-serif">Jayniel Singh</h1>
          <p className="mb-5 animate-typing font-sans">
            Hey im jayniel, a self taught web developer and a amateur photographer with an interesting in developing web applications.
          </p>
          <a href="/portfolio" className="btn btn-primary capitalize">
            View my portfolio
          </a>
        </div>
      </div>
    </div>
  );
}
