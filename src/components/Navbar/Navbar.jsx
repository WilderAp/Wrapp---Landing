import useNav from "../../hooks/useNav";
import MenuMobile from "./MenuMobile";
import texts from "../../sections.json";

const Navbar = () => {
  const { isOpen, handleIsOpen } = useNav();

  return (
    <div
      className=" flex justify-between px-10 py-10"
      style={{ backgroundColor: "white" }}
    >
      <div className="">
        <a className="btn btn-ghost text-xl" href="/#">
          <img src={texts["section-one"].logo} alt="logo" />
        </a>
      </div>
      <div className="justify-between hidden lg:flex items-center">
        <ul className="menu menu-horizontal hover:text-[#6953D3] font-semibold  gap-16">
          <li>
            <a href="/#">{texts["section-one"].item1}</a>
          </li>
          <li>
            <a href="/#">{texts["section-one"].item2}</a>
          </li>
          <li>
            <a href="/#">{texts["section-one"].item3}</a>
          </li>
          <li>
            <a href="/#">{texts["section-one"].item4}</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <a
          className="flex items-center btn  gap-2 px-3 py-2 rounded-full"
          href="/#"
          style={{ backgroundColor: "white" }}
        >
          Contact
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <title>arrow</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </a>
      </div>
      <MenuMobile isOpen={isOpen} onClick={handleIsOpen} />
    </div>
  );
};
export default Navbar;
