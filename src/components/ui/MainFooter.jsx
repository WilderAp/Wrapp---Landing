import texts from "../../sections.json";

function MainFooter() {
  return (
    <footer className="items-center p-4  text-neutral-content grid grid-cols-2">
      <aside className="items-center grid-flow-col">
        <div
          className=" text-start "
          style={{
            backgroundColor: "none",
            border: "none",
          }}
        >
          <a href="/">
            <img src={texts["section-last"].logo} alt="logo" width={130} />
          </a>
        </div>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav className="flex flex-col gap-2 lg:grid grid-cols-5 ">
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
      </nav>
    </footer>
  );
}
export default MainFooter;
