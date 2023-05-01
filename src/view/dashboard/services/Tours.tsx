import { Twoslide } from "../../../component/Layout";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export function Tours() {
  return (
    <div className="main">
      <Header />
      <div className="mainpagehead">
        <div className="tours">
          <h1
            data-aos="slide-right"
            className="text-center d-flex align-items-center text-white justify-content-center"
          >
            Tours & Travel Services
          </h1>
        </div>
        <div className="p-sm-5 p-3">
          <p>
            Spice Money provides a gamut of tours and travel services including
            flight/train/bus tickets and hotel booking – all under one roof.
            These services are reasonably priced, reliable, and comprehensive.
            Spice Money Digital Dukaan has now transformed into a hub for all
            travel needs.
          </p>
          <Twoslide
            classname={"twoslide-one"}
            h1={`Train Booking`}
            p={`An authorized IRCTC partner, Spice Money allows booking train tickets through Digital Dukaan for any destination across India. The user-friendly interface enables Adhikaris to book tickets quickly & make the whole process hassle-free for customers.`}
            img={require("../../../asset/sample1/main-services/ms9.png")}
          />
          <Twoslide
            classname={" twoslide-two"}
            h1={`Flight Booking`}
            p={`The flight booking service caters to Domestic and International Flight ticketing solutions for a range of combinations. The service provides the best routing options and a dedicated customer service team to address all queries relating to flight bookings. Through a single travel management interface, Adhikaris can instantly book and confirm flight tickets for their customers.`}
            img={require("../../../asset/sample1/main-services/ms10.png")}
          />
          <Twoslide
            classname={"twoslide-one"}
            h1={`Bus Ticket`}
            p={`Spice Money has partnered with over 700 tour & travel operators across the country which helps with a high visibility of bus ticket availability for any journey of choice. Adhikaris can instantly book and confirm bus tickets for their customers.`}
            img={require("../../../asset/sample1/main-services/ms11.png")}
          />
          <Twoslide
            classname={" twoslide-two"}
            h1={`Hotel Booking`}
            p={`With the help of partnerships with Hotels & Travel agencies, Spice Money has access to hotel room inventory across India for all budgets and categories. Spice Money Adhikaris can book hotel rooms instantly at discounted tariffs.`}
            img={require("../../../asset/sample1/main-services/ms12.png")}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
