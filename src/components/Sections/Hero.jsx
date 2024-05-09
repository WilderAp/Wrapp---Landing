import texts from "../../sections.json";

function Hero() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6  md:flex items-center justify-center">
        {/* Hero content */}
        <div className="pt-10 pb-12 md:pt-10 lg:pb-20">
          <div className="flex lg:justify-start justify-center">
            <span
              style={{
                width: "fit-content",
                color: "#6953D3",
                fontFamily: "Space",
                marginBottom: "24px",
                backgroundColor: "rgba(105, 83, 211, 0.1)",
                padding: "8px 16px 8px 16px",
              }}
              className="btn-sm text-gray-200 font-semibold  hover:bg-gray-800 rounded"
            >
              {texts["section-two"].bread}
            </span>
          </div>
          {/* Section header */}
          <div className="text-left pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-4.5xl font-semibold leading-tighter tracking-tighter mb-4 expressa"
              data-aos="zoom-y-out"
            >
              {texts["section-two"].title}{" "}
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8 text-left"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                {texts["section-two"].description}
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-start"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div className="flex justify-start gap-12">
                  <a
                    className="flex gap-2 items-center btn text-white bg-[#6953D3] rounded-full p-4 hover:bg-gray-800 w-full sm:w-auto sm:ml-0"
                    href="#0"
                  >
                    <img
                      src="https://res.cloudinary.com/db60chvpz/image/upload/v1715148094/Landings/eoxpvt8alr5dbvzjgwjj.png"
                      alt=""
                    />
                    {texts["section-two"].button1}
                  </a>
                  <a className="flex items-center" href="/#">
                    <div className="border rounded-full flex items-center justify-center w-14 h-14 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#6953D3"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        // stroke="currentColor"
                        className="w-12 h-12 pl-1"
                      >
                        <title>play</title>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h2>View</h2>
                      <h2>Promotion</h2>
                    </div>
                  </a>
                </div>
              </div>
              {/* Information btns */}
              <div className="flex mt-10 justify-start gap-10">
                {/* Info 1 */}
                <div className="flex items-center">
                  <div
                    className="border rounded-full flex items-center justify-center w-10 h-10 mr-3"
                    style={{ backgroundColor: "rgba(105, 83, 211, 0.1)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#6953D3"
                      className="w-6 h-6"
                    >
                      <title>trial</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  </div>
                  <h2>{texts["section-two"].infoButton1}</h2>
                </div>
                {/* Info 2 */}
                <div className="flex items-center">
                  <div
                    className="border rounded-full flex items-center justify-center w-10 h-10 mr-3"
                    style={{ backgroundColor: "rgba(105, 83, 211, 0.1)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#6953D3"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className="w-6 h-6"
                    >
                      <title>Card</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                      />
                    </svg>
                  </div>
                  <h2>{texts["section-two"].infoButton2}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:ml-10 mt-10">
          <img
            className="md:max-w-none mx-auto rounded"
            src={texts["section-two"].image}
            width={500}
            height="150"
            alt="Business man"
          />
        </div>
      </div>
    </section>
  );
}
export default Hero;
