import { Mail } from "../../../component/Layout";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export function Contactus() {
  return (
    <div className="main">
      <Header />
      <div className="mainpagehead">
        <div className="contactus">
          <h1
            data-aos="slide-right"
            className="text-center d-flex align-items-center text-white justify-content-center"
          >
            Contact us
          </h1>
        </div>

        <div className="py-md-5 py-2">
          <h1 data-aos="fade-right" className="text-center fw-bold">
            We are here to help
          </h1>
          <div
            className="d-flex flex-wrap col-md-11 mx-auto"
            data-aos="fade-up"
          >
            <Mail
              icon={"fa fa-phone"}
              p1={`+91 120 3986786, +91 120 5077786`}
              p2={`(7:00 AM to 11:00 PM, All days)`}
            />
            <Mail icon={"fa fa-envelope"} p1={`Customercare@paype.co.in`} />
            <Mail
              icon={"fa fa-envelope"}
              p1={`(For Money transfer using PPI - Quereies & Complaint)`}
              p2={`Paype.co.in@.com`}
            />
          </div>
        </div>

        <div className="col-lg-11 col-12 mx-auto d-flex p-0 flex-wrap ">
          <div className="col-md-6 col-12 p-3" data-aos="fade-up">
            <h3 className="mb-3 fw-bold">Spice Money Corporate Office</h3>
            <p>
              <strong>Address:</strong>Spice Money Limited, Spice Global
              Knowledge Park, 19A &19B, Sector-125,Noida-201301, Uttar Pradesh
            </p>
            <p>
              <strong>Contact No:</strong>0120-3355 131 (Monday to Friday, 10:00
              AM to 6:00 PM)
            </p>
            <p>
              <strong>Email ID:</strong>customercare@spicemoney.com
            </p>

            <div className="about-input py-4">
              <h3 className="fw-bold">Fill the form to Connect with us</h3>

              <input
                className="col-12"
                name="firstname"
                type="text"
                placeholder="First Name"
              />
              <div className="d-flex flex-wrap justify-content-between">
                <input
                  className="col-sm-5 col-12"
                  type="text"
                  name="mail"
                  placeholder="E-mail"
                />
                <input
                  className="col-sm-5 col-12"
                  type="number"
                  name="number"
                  placeholder="Number"
                />
              </div>
              <textarea
                className="col-12"
                name="Message"
                placeholder="Message"
              />

              <button>Submit</button>
            </div>
          </div>
          <div className="col-md-6 col-12" data-aos="zoom-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.65032837567!2d78.80688921424331!3d10.369818369403879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0079b31104e759%3A0x956c030a29bd68ff!2sPayPe%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1677848314235!5m2!1sen!2sin"
              className="map"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
