import texts from "../../sections.json";

function Hero() {
  return (
    <section className="relative">
      <div className="md:max-w-6xl mx-auto px-4 sm:px-6  md:flex items-center justify-center">
        {/* Hero content */}
        <div className=" pb-12 md:pt-10 lg:pb-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-7 md:pt-10">
            All your ideas in one place
          </h1>
          <p className="mb-7 md:px-40">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
            suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
            amet, dui sit suspendisse.
          </p>
          <a
            className="items-center btn text-white text-lg gap-2 px-10 py-2 rounded-full"
            href="/#"
            style={{ backgroundColor: "#7C3AED" }}
          >
            {texts["section-one"].item7}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <title>arrow</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
export default Hero;
