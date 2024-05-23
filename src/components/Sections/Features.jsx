import texts from "../../sections.json";

function Features() {
  return (
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6">
      {/* Section 1 */}
      <img
        src="https://res.cloudinary.com/db60chvpz/image/upload/v1716247113/Wrapp/a97ipkhndjhyzuu6qjy3.png"
        alt="Hero"
      />
      <div className="flex justify-center w-100 mx-auto pt-7 gap-4 text-[#7C3AED] font-semibold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <title>play</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
          />
        </svg>

        <h2>Watch Demo</h2>
      </div>
      {/* Section 2 */}
      <div className="lg:text-left text-center  pb-12 border-t mt-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mt-20 items-center">
          {/* Item 1 */}
          <div className="max-w-sm  mx-auto flex flex-col ">
            <div className="mx-auto">
              <img
                src="https://res.cloudinary.com/db60chvpz/image/upload/v1716423907/Wrapp/q6ilexkfft0bqyljcelu.png"
                alt="img1"
                width={100}
              />
            </div>
            <div className="mt-4 font-bold text-center">
              <h2>Notes Powerful and Security</h2>
            </div>
            <p className="text-center">
              Pellentesque quis tincidunt sit sed. Tortor massa sed habitant.
            </p>
          </div>
          {/* Item 2 */}
          <div className="max-w-sm  mx-auto flex flex-col ">
            <div className="mx-auto">
              <img
                src="https://res.cloudinary.com/db60chvpz/image/upload/v1716423907/Wrapp/yrighmkgcftiqywp002u.png"
                alt="img1"
                width={100}
              />
            </div>
            <div className="mt-4 font-bold text-center">
              <h2>Notes Powerful and Security</h2>
            </div>
            <p className="text-center">
              Pellentesque quis tincidunt sit sed. Tortor massa sed habitant.
            </p>
          </div>
          {/* Item 3 */}
          <div className="max-w-sm  mx-auto flex flex-col ">
            <div className="mx-auto">
              <img
                src="https://res.cloudinary.com/db60chvpz/image/upload/v1716423907/Wrapp/ycerbsypqhwnwaxq624j.png"
                alt="img1"
                width={100}
              />
            </div>
            <div className="mt-4 font-bold text-center">
              <h2>Notes Powerful and Security</h2>
            </div>
            <p className="text-center">
              Pellentesque quis tincidunt sit sed. Tortor massa sed habitant.
            </p>
          </div>
          {/* Item 4 */}
          <div className="max-w-sm  mx-auto flex flex-col ">
            <div className="mx-auto">
              <img
                src="https://res.cloudinary.com/db60chvpz/image/upload/v1716423907/Wrapp/lwcwbnoder6juxdwj8c0.png"
                alt="img1"
                width={100}
              />
            </div>
            <div className="mt-4 font-bold text-center">
              <h2>Notes Powerful and Security</h2>
            </div>
            <p className="text-center">
              Pellentesque quis tincidunt sit sed. Tortor massa sed habitant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Features;
