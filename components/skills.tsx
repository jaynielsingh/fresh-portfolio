export default function Skill() {
  return (
    <div class=" py-20 lg:py-[120px] overflow-hidden relative z-10">
      <div
        // data-aos="zoom-in-up"
        // data-aos-delay="500"
        // data-aos-duration="2000"
        class="container xl:max-w-6xl mx-auto px-4"
      >
        <header class="text-center mx-auto mb-8 lg:px-20">
          <h2 class="text-4xl  antialiased font-serif leading-normal font-bold ">
            Skills
          </h2>
          <p class="text-base font-normal">
            ________________________________________
          </p>
          <p class=" leading-relaxed font-light text-xl mx-auto py-5">
            These are the tools, technologies, and frameworks I’ve learned
            through hands-on experience and continuous learning. Each skill
            reflects my dedication to building functional, responsive, and
            visually engaging web solutions:
          </p>
        </header>
      </div>

      <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
            class="w-full  rounded-lg shadow-lg p-12 flex flex-col justify-center items-center"
          >
            <div class="mb-8">
              <div
                class="radial-progress "
                style="--size:7rem; --value: 75"
              >
                75%
              </div>
            </div>
            <div class="text-center">
              <p class="text-xl font-serif  font-bold mb-2">Python</p>
              <p class="text-base font-normal">
                ________________________________________
              </p>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
            class="w-full  rounded-lg shadow-lg p-12 flex flex-col justify-center items-center"
          >
            <div class="mb-8">
              <div
                class="radial-progress  "
                style="--size:7rem; --value: 75"
              >
                75%
              </div>
            </div>
            <div class="text-center">
              <p class="text-xl font-serif font-bold mb-2">Next.Js</p>
              <p class="text-base  font-normal">
                ________________________________________
              </p>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
            class="w-full  rounded-lg shadow-lg p-12 flex flex-col justify-center items-center"
          >
            <div class="mb-8">
              <div
                class="radial-progress"
                style="--size:7rem; --value: 80"
              >
                80%
              </div>
            </div>
            <div class="text-center">
              <p class="text-xl font-serif font-bold mb-2">JavaScript</p>
              <p class="text-base  font-normal">
                ________________________________________
              </p>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
            class="w-full  rounded-lg shadow-lg p-12 flex flex-col justify-center items-center"
          >
            <div class="mb-8">
              <div
                class="radial-progress"
                style="--size:7rem; --value: 80"
              >
                80%
              </div>
            </div>
            <div class="text-center">
              <p class="text-xl font-serif font-bold mb-2">TailwindCSS</p>
              <p class="text-base  font-normal">
                ________________________________________
              </p>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
            class="w-full  rounded-lg shadow-lg p-12 flex flex-col justify-center items-center"
          >
            <div class="mb-8">
              <div
                class="radial-progress"
                style="--size:7rem; --value: 70"
              >
                70%
              </div>
            </div>
            <div class="text-center">
              <p class="text-xl font-serif font-bold mb-2">Deno - Fresh</p>
              <p class="text-base  font-normal">
                ________________________________________
              </p>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
            class="w-full  rounded-lg shadow-lg p-12 flex flex-col justify-center items-center"
          >
            <div class="mb-8">
              <div
                class="radial-progress"
                style="--size:7rem; --value: 85"
              >
                85%
              </div>
            </div>
            <div class="text-center">
              <p class="text-xl font-serif font-bold mb-2">HTML/CSS</p>
              <p class="text-base  font-normal">
                ________________________________________
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
