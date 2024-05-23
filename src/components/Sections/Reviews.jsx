import texts from "../../sections.json";

function Reviews() {
  return (
    <section className="relative bg-[#F1F5F9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6  md:flex items-center ">
        {/* Hero content */}
        <div className="text-center md:text-start max-w-[460px]">
          <h2 className="text-[#475569] font-semibold">NO LIMITS</h2>
          <h1 className="text-black text-4xl font-bold mb-5">
            Unlimited ideas for your projects{" "}
          </h1>
          <p className="text-black mb-7">
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
        <div className="md:ml-10 mt-10 grid  ">
          {/* face 1 */}
          <figcaption className="flex items-end gap-4">
            <figure>
              <img
                src="https://res.cloudinary.com/db60chvpz/image/upload/v1716247111/Wrapp/bxmib8gdqb3za7mjrskd.png"
                alt="idea"
              />
            </figure>
            <figure className="">
              <img
                src="https://res.cloudinary.com/db60chvpz/image/upload/v1716247112/Wrapp/rwmcfqth10ybfgzp6vem.png"
                alt="idea"
              />
            </figure>
          </figcaption>
          {/* face 2 */}
          <figcaption>
            <figure>
              <img
                src="https://res.cloudinary.com/db60chvpz/image/upload/v1716247111/Wrapp/ixfpn8zdhs7ncdpbwldx.png"
                alt="idea"
                className="w-full h-full "
              />
            </figure>
          </figcaption>
          {/* face 3 */}
          <figcaption className="flex">
            <figure className="">
              <img
                src="https://res.cloudinary.com/db60chvpz/image/upload/v1716247111/Wrapp/au8acrhvdzdiax4r6qtw.png"
                alt="idea"
              />
            </figure>
            <figure className="">
              <img
                src="https://res.cloudinary.com/db60chvpz/image/upload/v1716247111/Wrapp/m9jfa24orjrh6i3sy84p.png"
                alt="idea"
              />
            </figure>
          </figcaption>
        </div>
      </div>
    </section>
  );
}
export default Reviews;
