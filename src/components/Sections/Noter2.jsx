import texts from "../../sections.json";

function Noter2() {
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6  flex flex-col md:flex-row items-center justify-between mt-10">
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
              <h3 className="text-start">{texts["section-six"].subtitle}</h3>
            </div>

            <h1
              className="text-3xl font-bold mb-3 text-start"
              style={{ color: "#333333" }}
            >
              {texts["section-six"].title}
            </h1>
            <p className="pt-6 text-[#444444]" style={{ opacity: "60%" }}>
              {texts["section-six"].body}
            </p>

            {/* Items */}
            <section className="sm:flex max-w-sm mx-auto flex flex-col gap-5  items-start md:max-w-2xl lg:max-w-4xl  mb-10 mt-10">
              {/* item 1 */}
              <div
                className="collapse collapse-arrow"
                style={{ backgroundColor: "rgba(105, 83, 211, 0.2)" }}
              >
                <input type="checkbox" />
                <div className="collapse-title  font-medium text-[#4B2FD2]">
                  Create And Save Your Notes With Multi-Media
                </div>
                <div className="collapse-content">
                  <p>
                    Images, videos, PDFs and audio files are supported. Create
                    math expressions and diagrams directly from the app. Take
                    photos with the mobile app and save them to a note.
                  </p>
                </div>
              </div>
              {/* item 2 */}
              <div className="collapse collapse-arrow">
                <input type="checkbox" />
                <div className="collapse-title  font-medium text-[#444444]">
                  Web Clipper Extension
                </div>
                <div className="collapse-content">
                  <p>
                    Images, videos, PDFs and audio files are supported. Create
                    math expressions and diagrams directly from the app. Take
                    photos with the mobile app and save them to a note.
                  </p>
                </div>
              </div>
              {/* item 3 */}
              <div className="collapse collapse-arrow">
                <input type="checkbox" />
                <div className="collapse-title  font-medium text-[#444444]">
                  Protect Your Note With Lock
                </div>
                <div className="collapse-content">
                  <p>
                    Images, videos, PDFs and audio files are supported. Create
                    math expressions and diagrams directly from the app. Take
                    photos with the mobile app and save them to a note.
                  </p>
                </div>
              </div>
            </section>
            <a
              className="flex items-center btn text-white bg-[#E7E5E5] rounded-full  hover:bg-gray-800  w-60 h-16 sm:ml-0"
              href="#0"
            >
              <img
                src="https://res.cloudinary.com/db60chvpz/image/upload/v1715230190/Landings/iTech/zjzz6jhuui5wkycj4y8d.png"
                alt=""
              />
              {texts["section-two"].button1}
            </a>
          </div>
        </div>
        <div className="py-6 md:py-0 md:w-1/2 px-6 sm:px-10 md:px-0">
          <div className="relative flex flex-col items-center   ">
            <div className="md:ml-10 mt-10 w-7xl">
              <img
                className="md:max-w-none mx-auto lg:mr-20"
                src={texts["section-six"].picture}
                width={600}
                height="300"
                alt="iPad"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Noter2;
