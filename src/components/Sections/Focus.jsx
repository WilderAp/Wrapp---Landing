import texts from "../../sections.json";

function Focus() {
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6  flex flex-col md:flex-row items-center justify-between mt-10">
        <div className="py-6 md:py-0 md:w-1/2 px-6 sm:px-10 md:px-0">
          <div className="relative flex flex-col items-center   ">
            <div className="md:ml-10 mt-10 w-7xl">
              <img
                className="md:max-w-none mx-auto mr-20"
                src="https://res.cloudinary.com/db60chvpz/image/upload/v1715225746/Landings/iTech/wbl7aj8eju8l6aoeybdz.png"
                width={500}
                height="300"
                alt="iPad"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-2/5 mx-auto text-center pb-12 md:pb-10">
          <div className="text-start">
            <div
              style={{
                width: "fit-content",
                color: "#6953D3",
                backgroundColor: "rgba(105, 83, 211, 0.1)",
                fontFamily: "Space",
                padding: "8px 16px 8px 16px",
              }}
              className="btn-sm text-gray-200  hover:bg-gray-800 mb-2 rounded"
            >
              <h3 className="text-start">Beautiful Themes</h3>
            </div>

            <h1
              className="text-3xl font-bold mb-3 text-start"
              style={{ color: "#333333" }}
            >
              Focus More With Dark Theme
            </h1>

            {/* Items */}
            <section className="sm:flex max-w-sm mx-auto flex flex-col gap-5  items-start md:max-w-2xl lg:max-w-4xl  mb-10 mt-10">
              {/* item 1 */}
              <div className="flex items-center">
                Apply Notero’s elegant themes to your taste. Dark themes work
                excellently for those who prefer distraction-free mode.
              </div>
              {/* item 2 */}
              <div className="flex items-center">
                <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                  <li>Filtering notes using matched keywords</li>
                  <li>8 Beautiful themes for you select</li>
                  <li>Save energy for your device</li>
                  <li>Easy to switch between light and dark mode</li>
                </ul>
              </div>
            </section>
            <button
              type="button"
              className=" flex items-center bg-[#6953D3] rounded-full py-2 px-5 text-white"
            >
              Discovery Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Focus;
