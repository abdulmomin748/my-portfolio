import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import quoteLft from "../assets/qtLft.png";
import quoteRgt from "../assets/qtRgt.png";
const Testimonial = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true,
    adaptiveHeight: true,
  };
  return (
    <>
      <section className="section testimonial-sec" id="testimonial">
        <div className="container">
          <h2 className="exp-ttle mb-16 text-5xl font-semibold  text-left section-title relative pb-6">
            Testimonials
          </h2>
          <div className="pt-0 pb-36 c-grid">
            <div data-aos="fade-up" data-aos-duration="3000" className="">
              <h6 className="text-xl">
                My Happy <span className="font-semibold">Clients</span>, <br />
                <br />
                What they say, <br /> <br />
                <span className="font-semibold">From my services.</span>
              </h6>
            </div>
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2000"
              className="text-xl lg:pl-20 md:pl-12"
            >
              <Slider {...settings}>
                <div>
                  <h6 className="lg:mb-4 md:pb-2 pb-2 font-semibold pl-20">
                    Nick Paul -
                  </h6>
                  <p className="para-quote relative px-20 pr-14 py-4">
                    <span className="absolute left-0 top-0">
                      <img src={quoteLft} alt="" srcset="" />
                    </span>{" "}
                    Superb. Great comms, understood the requirement, and
                    delivered quickly. Multiple revisions allowed which were
                    very helpful. I will work with him again.{" "}
                    <span className="absolute bottom-0 right-0">
                      <img src={quoteRgt} alt="" srcset="" />
                    </span>
                  </p>
                </div>
                <div>
                  <h6 className="mb-4 font-semibold pl-20">Nick Jonas -</h6>
                  <p className="para-quote relative px-20 pr-14 py-4">
                    <span className="absolute left-0 top-0">
                      <img src={quoteLft} alt="" srcset="" />
                    </span>
                    Thanks a million, I have really enjoyed working on this. I
                    appreciate the tip as well 🙂 ! Thanks!{" "}
                    <span className="absolute bottom-0 right-0">
                      <img src={quoteRgt} alt="" srcset="" />
                    </span>
                  </p>
                </div>
                <div>
                  <h6 className="mb-4 font-semibold pl-20">Sandro Lio -</h6>
                  <p className="para-quote relative px-20 pr-14 py-4">
                    <span className="absolute left-0 top-0">
                      <img src={quoteLft} alt="" srcset="" />
                    </span>{" "}
                    Thanks a lot, its always a pleasure working with clients
                    like you and knowing what they need. Thanks again!{" "}
                    <span className="absolute bottom-0 right-0">
                      <img src={quoteRgt} alt="" srcset="" />
                    </span>
                  </p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
