import texts from "../../sections.json";

function Noter() {
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6  flex flex-col md:flex-row items-center justify-between mt-10">
        <div className="py-6 md:py-0 md:w-1/2 px-6 sm:px-10 md:px-0">
          <div className="relative flex flex-col items-center   ">
            <div className="md:ml-10 mt-10 w-7xl">
              <img
                className="md:max-w-none mx-auto mr-20"
                src={texts["section-five"].picture}
                width={600}
                height="300"
                alt="iPad"
              />
            </div>
          </div>
        </div>
        <div className="w-2/5 mx-auto text-center pb-12 md:pb-10">
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
              <h3 className="text-start">{texts["section-five"].subtitle}</h3>
            </div>

            <h1
              className="text-3xl font-bold mb-3 text-start"
              style={{ color: "#333333" }}
            >
              {texts["section-five"].title}
            </h1>
            <p className="pt-6 text-[#444444]" style={{ opacity: "60%" }}>
              {texts["section-five"].body}
            </p>

            {/* Items */}
            <section className="sm:flex max-w-sm mx-auto flex flex-col gap-5  items-start md:max-w-2xl lg:max-w-4xl  mb-10 mt-10">
              {/* item 1 */}
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
                      d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"
                    />
                  </svg>
                </div>
                <h2 className="font-bold">
                  {texts["section-five"].infoButton1}
                </h2>
              </div>
              {/* item 2 */}
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
                <h2 className="font-bold">
                  {texts["section-five"].infoButton1}
                </h2>
              </div>
              {/* item 3 */}
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
                    <title>down</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
                    />
                  </svg>
                </div>
                <h2 className="font-bold">
                  {texts["section-five"].infoButton1}
                </h2>
              </div>
            </section>
            <button
              type="button"
              className=" flex items-center bg-[#6953D3] rounded-full py-2 px-5 text-white"
            >
              {/* <FaPlayCircle size={30} color="#0a9f00" /> */}
              {texts["section-five"].button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Noter;
