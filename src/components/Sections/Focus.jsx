import texts from "../../sections.json";

function Focus() {
  return (
    <section className="relative">
      <div className="md:max-w-6xl mx-auto px-4 sm:px-6  md:flex items-center justify-center">
        {/* Hero content */}
        <div className="pt-10 pb-12 md:pt-10 lg:pb-20 text-center">
          <h1 className="text-6xl font-bold mb-7">
            Get your business to grow fast
          </h1>
          <p className="mb-7 md>px-40">
            Sed ut vestibulum eget purus ornare. Risus elit et fringilla
            habitant ut facilisi.
          </p>
          <a
            className="items-center btn text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white border-[#7C3AED] bg-transparent text-lg gap-2 px-10 py-2 rounded-full"
            href="/#"
          >
            View Product Tour
          </a>
        </div>
      </div>
    </section>
  );
}
export default Focus;
