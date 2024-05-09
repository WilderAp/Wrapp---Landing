import texts from "../../sections.json";

function MainFooter() {
  return (
    <footer className="">
      <div className="mx-auto px-4 sm:px-1">
        {/* Top area: Blocks */}
        <div className="grid items-center  lg:grid-cols-9 gap-8 py-3  border-gray-200 ">
          {/* 1st block */}
          <div
            className="sm:col-span-2 md:col-span-3 lg:col-span-3 text-start ml-20"
            style={{ maxWidth: "600px" }}
          >
            <div
              className="font-bold flex items-center gap-4"
              style={{ color: "#FFFFFF", fontSize: "25px" }}
            >
              <img src={texts["section-last"].logo} alt="logo" width={130} />
              {texts["section-last"].title}
            </div>
          </div>

          {/* 2nd block */}
          <ul className="menu-horizontal  gap-16">
            <li>
              <a href="/#">Home</a>
            </li>
            <li>
              <a href="/#">Pages</a>
            </li>
            <li>
              <a href="/#">Portfolio </a>
            </li>
            <li>
              <a href="/#">Blog</a>
            </li>
            <li>
              <a href="/#">Contact</a>
            </li>
          </ul>

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
            &copy; Copyright 2024 . All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
export default MainFooter;
