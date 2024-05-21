import texts from "../../sections.json";

function Noter() {
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6  flex flex-col gap-2 items-center justify-between mt-10">
        {/* Section 1 */}
        <div className="grid md:grid-cols-2  gap-2">
          <img
            src="https://res.cloudinary.com/db60chvpz/image/upload/v1716247113/Wrapp/xfrlbipp44yacxde6iiy.png"
            alt="team1"
            className=""
          />
          <div className="text-center md:text-start p-10 bg-[#4C1D95]">
            <h2 className="text-[#A78BFA] font-semibold">TEAM WORK</h2>
            <h1 className="text-white text-4xl font-bold mb-5">
              Easily brainstorm with your team{" "}
            </h1>
            <p className="text-white mb-7">
              Scelerisque auctor dolor diam tortor, fames faucibus non interdum
              nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie
              adipiscing lacinia.
            </p>
            <a
              className="items-center btn text-white border-none  text-lg gap-2 px-10 py-2 rounded-full"
              href="/#"
              style={{ backgroundColor: "#7C3AED" }}
            >
              {texts["section-one"].item7}
            </a>
          </div>
        </div>
        {/* Section 2 */}
        <div className="grid grid-cols-6 md:grid-cols-6  gap-2">
          {/* Img 1 */}
          <figure className="col-span-2">
            <img
              src="https://res.cloudinary.com/db60chvpz/image/upload/v1716247112/Wrapp/ayjmkmyd1auz8nfjoive.png"
              alt="team1"
              className="w-full h-full object-cover"
            />
          </figure>
          {/* Img 2 */}
          <figure>
            <img
              src="https://res.cloudinary.com/db60chvpz/image/upload/v1716247112/Wrapp/xfnroomeuamso30zfi1h.png"
              alt="team1"
              className="w-full h-full object-cover"
            />
          </figure>
          {/* Img 3 */}
          <figure className="col-span-2">
            <img
              src="https://res.cloudinary.com/db60chvpz/image/upload/v1716247112/Wrapp/wsvpuoantrvtdrosx9lu.png"
              alt="team1"
              className="w-full h-full object-cover"
            />
          </figure>
          {/* Img 4 */}
          <figure>
            <img
              src="https://res.cloudinary.com/db60chvpz/image/upload/v1716247112/Wrapp/vnwgopj0qkf4hfhlsn2w.png"
              alt="team1"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
export default Noter;
