import texts from "../../sections.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Noter2() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Tiempo en milisegundos entre cada transición
  };
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6  md:flex items-center justify-center">
        {/* Hero content */}
        <div className="pt-10 pb-12 md:pt-10 lg:pb-20 text-center">
          <h1 className="text-6xl font-bold mb-7">Find similar stories</h1>
          <p className="mb-7 ">
            Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis
            dictumst. Ornare faucibus quis velit fringilla aliquam ultricies.
            Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Sed
            ut vestibulum eget purus ornare. Risus elit et fringilla habitant ut
            facilisi.
          </p>
        </div>
      </div>

      <Slider {...settings}>
        <div className=" p-5 rounded ">
          <img
            src="https://res.cloudinary.com/db60chvpz/image/upload/v1716247111/Wrapp/rkypchxtnexmufporbc9.png"
            alt="img1"
            className="border-8 border-white rounded-lg"
            style={{ borderWidth: "20px" }}
          />
        </div>
        <div className=" p-5 rounded ">
          <img
            src="https://res.cloudinary.com/db60chvpz/image/upload/v1716247111/Wrapp/rkypchxtnexmufporbc9.png"
            alt="img1"
            className="border-8 border-white rounded-lg"
            style={{ borderWidth: "20px" }}
          />
        </div>
        <div className=" p-5 rounded ">
          <img
            src="https://res.cloudinary.com/db60chvpz/image/upload/v1716247111/Wrapp/rkypchxtnexmufporbc9.png"
            alt="img1"
            className="border-8 border-white rounded-lg"
            style={{ borderWidth: "20px" }}
          />
        </div>
      </Slider>
    </section>
  );
}
export default Noter2;
