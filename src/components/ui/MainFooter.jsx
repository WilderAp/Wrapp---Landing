import texts from "../../sections.json";

function MainFooter() {
  return (
    <footer className="">
      <div className="mx-auto px-4 sm:px-1">
        {/* Top area: Blocks */}
        <div className="menu-horizontal  items-center   gap-40 py-3  border-gray-200 ">
          {/* 1st block */}
          <div
            className="btn text-start ml-20"
            style={{
              maxWidth: "600px",
              backgroundColor: "transparent",
              border: "none",
            }}
          >
            <img src={texts["section-last"].logo} alt="logo" width={130} />
          </div>

          {/* 2nd block */}
          <div className="menu-horizontal mx-auto  font-semibold gap-14">
            <a href="/#" className="hover:text-[#6953D3]">
              Home
            </a>
            <a href="/#" className="hover:text-[#6953D3]">
              Pages
            </a>
            <a href="/#" className="hover:text-[#6953D3]">
              Portfolio{" "}
            </a>
            <a href="/#" className="hover:text-[#6953D3]">
              Blog
            </a>
            <a href="/#" className="hover:text-[#6953D3]">
              Contact
            </a>
          </div>

          {/* 3rd block */}
          <div
            className="sm:col-span-2 md:col-span-3 lg:col-span-2 lg:text-end sm: text-center"
            style={{ color: "#A1A1AA" }}
          >
            <ul className="text-sm">
              <li className="mb-3">
                <span className=" hover:text-gray-900 transition duration-150 ease-in-out">
                  {texts["section-last"].item1}
                </span>
              </li>
              <li className="mb-3">
                <span className=" hover:text-white transition duration-150 ease-in-out">
                  {texts["section-last"].item2}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom area */}
        <div
          className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">
            &copy; 2023 copyrights by ITech . All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
export default MainFooter;
