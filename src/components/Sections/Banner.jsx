import texts from "../../sections.json";

function Banner() {
  return (
    <section className=" bg-[#4C1D95] grid md:grid-cols-3 ">
      <figure className="hidden md:flex items-end">
        <img
          src="https://res.cloudinary.com/db60chvpz/image/upload/v1716353432/Wrapp/bxgtn0dvo7hwsybhwvrw.png"
          alt="phones"
        />
      </figure>
      <div className="text-center items-center flex flex-col py-5 md:pt-20">
        <h2 className="text-[#A78BFA] font-semibold">START BUILDING IDEAS</h2>
        <h1 className="text-white text-4xl font-bold mb-5">Brainstorm now! </h1>
        <p className="text-white mb-7">
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Risus
          elit et fringilla habitant ut facilisi.
        </p>
        <a
          className="items-center btn text-white border-none  text-lg gap-2 px-10 py-2 rounded-full"
          href="/#"
          style={{ backgroundColor: "#7C3AED" }}
        >
          {texts["section-one"].item7}
        </a>
      </div>
      <figure className="hidden md:flex items-end">
        <img
          src="https://res.cloudinary.com/db60chvpz/image/upload/v1716247111/Wrapp/nsygwqixw8zejwglraom.png"
          alt="phones"
        />
      </figure>
    </section>
  );
}
export default Banner;
