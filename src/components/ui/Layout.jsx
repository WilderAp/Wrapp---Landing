const Layout = ({ maxWidth, children }) => {
  return (
    <div
      className={`
    py-[20px] px-2 ${maxWidth}  mx-auto bg-white
    `}
    >
      {children}
    </div>
  );
};
export default Layout;
