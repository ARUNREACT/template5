import "./Dashboard.styles.css";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import "../../../component/Layout.css";
import {
  Scroll,
  Services,
  Slider,
  Sliderinput,
} from "../../../component/Layout";

export function Dashboard() {
  return (
    <div className="main">
      <Header />
      <div className="mainpagehead p-0 home ">
        <div>
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-aos="zoom-in"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active bg-dark button"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                className="bg-dark button"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                className="bg-dark button"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={require("../../../asset/sample1/h1.png")}
                  className="img-fluid "
                  alt="."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../../asset/sample1/h2.png")}
                  className="img-fluid "
                  alt="."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../../asset/sample1/h3.png")}
                  className="img-fluid "
                  alt="."
                />
              </div>
            </div>
            {/* <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button> */}
            {/* <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button> */}
          </div>
        </div>

        <div className="py-5 main-services">
          <h2 className="text-center fw-bold" data-aos="slide-right">
            OUR SERVICES
          </h2>
          <div className="d-flex flex-wrap justify-content-around">
            <Services
              img={require("../../../asset/sample1/services/s1.png")}
              h5={`Banking `}
              span={`Services`}
              to={"/banking"}
            />
            <Services
              img={require("../../../asset/sample1/services/s2.png")}
              h5={`Payment `}
              span={`Services`}
              to={"/payment"}
            />
            <Services
              img={require("../../../asset/sample1/services/s3.png")}
              h5={`Tours `}
              span={`& Travels`}
              to={"tours"}
            />
            <Services
              img={require("../../../asset/sample1/services/s4.png")}
              h5={`Bada `}
              span={`Bazaar`}
              to={"/bada"}
            />
            <Services
              img={require("../../../asset/sample1/services/s5.png")}
              h5={`Surak `}
              span={`sha`}
              to={"/suraksha"}
            />
            <Services
              img={require("../../../asset/sample1/services/s6.png")}
              h5={`Loan `}
              span={`Services`}
              to={"/loan"}
            />
            <Services
              img={require("../../../asset/sample1/services/s7.png")}
              h5={`Devices `}
              span={`& Other Services`}
              to={"/devices"}
            />
          </div>
        </div>
        <div className="d-flex flex-wrap  py-3 join-now">
          <div
            className="col-md-8 col-12 bg-dangr one px-sm-4 px-2"
            data-aos="slide-right"
          >
            <h2>
              Zero lagat aur Zero monthly rental se shuru karein apni Digital
              Dukaan
            </h2>
          </div>
          <div className="col-md-4 col-12 bg-succss two" data-aos="slide-left">
            <button>Join Now</button>
          </div>
        </div>
        <div className="py-5 mt-5 main-services-two ">
          <h2 className="text-center fw-bold " data-aos="slide-right">
            Advantages of Spice Money
          </h2>
          <div className="d-flex flex-wrap col-lg-11 mx-auto justify-content-around">
            <Services
              icon={"fa fa-line-chart"}
              h5={`Business opportunity with zero investment `}
            />
            <Services
              icon={"fa fa-gear fa-spin"}
              h5={`Easy onboarding on
              our platform `}
            />
            <Services
              icon={"fa fa-bank"}
              h5={`One stop shop for all
              Digital & Financial services `}
            />
            <Services
              icon={"fa fa-rupee"}
              h5={`High earning
              potential `}
            />
            <Services
              icon={"fa fa-laptop"}
              h5={`Secure & Reliable
              technology platform `}
            />
          </div>
        </div>
        <div className="bg-white">
          <h2 className="text-center fw-bold mt-5 " data-aos="slide-right">
            Our Partners
          </h2>
          <div className="d-flex py-5 our-partners" data-aos="slide-in">
            <Scroll img={require("../../../asset/sample1/partner/p1.png")} />
            <Scroll img={require("../../../asset/sample1/partner/p2.png")} />
            <Scroll img={require("../../../asset/sample1/partner/p3.png")} />
            <Scroll img={require("../../../asset/sample1/partner/p4.png")} />
            <Scroll img={require("../../../asset/sample1/partner/p5.png")} />
            <Scroll img={require("../../../asset/sample1/partner/p6.png")} />
            <Scroll img={require("../../../asset/sample1/partner/p7.png")} />
          </div>
        </div>
        <div>
          <h2 className="fw-bold text-center pt-4" data-aos="slide-right">
            TESTIMONIAL
          </h2>
          <div className="slider">
            <Sliderinput type={"slide1"} />
            <Sliderinput type={"slide2"} />
            <Sliderinput type={"slide3"} />
            <div className="slider__inner">
              <Slider
                img={require("../../../asset/sample1/human.png")}
                h5={`Amit Kumar Srivastava`}
                p={`Spice Money has helped me establish and expand my business. I
            have been using Spice Money services like AePS, Bill Payment,
            Pan Card, etc., for the past 3 years. My customers and I are
            highly satisfied with the services provided by Spice Money. It
            is the best fintech company, in my opinion.`}
              />
              <Slider
                img={require("../../../asset/sample1/human.png")}
                h5={`Amit Kumar Srivastava`}
                p={`Spice Money has helped me establish and expand my business. I
            have been using Spice Money services like AePS, Bill Payment,
            Pan Card, etc., for the past 3 years. My customers and I are
            highly satisfied with the services provided by Spice Money. It
            is the best fintech company, in my opinion.`}
              />
              <Slider
                img={require("../../../asset/sample1/human.png")}
                h5={`Amit Kumar Srivastava`}
                p={`Spice Money has helped me establish and expand my business. I
            have been using Spice Money services like AePS, Bill Payment,
            Pan Card, etc., for the past 3 years. My customers and I are
            highly satisfied with the services provided by Spice Money. It
            is the best fintech company, in my opinion.`}
              />
              <div className="slider__contents"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
