import { Twoslide } from "../../../component/Layout";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export function Loan() {
  return (
    <div className="main">
      <Header />
      <div className="mainpagehead">
        <div className="payment">
          <h1
            data-aos="slide-right"
            className="text-center d-flex align-items-center text-white justify-content-center"
          >
            Loan Services
          </h1>
        </div>
        <div className="p-sm-5 p-3">
          <p>
            The loan services enable Spice Money Adhikaris and customers to
            avail attractive loans at low interest rates. The service is secure,
            as loans are provided by trusted banks and financial institutions.
            With a quick turn-around time, these loans neither require extensive
            paperwork nor have a long wait time.
          </p>
          <Twoslide
            classname={"twoslide-one"}
            h1={`Grahak Loan`}
            p={`Spice Money Grahak loans are made available for Spice Money Adhikaris to offer to their customers. Through the Grahak Loan, Adhikaris can provide instant loans to their customers as per their requirements. These loans are provided by trusted Banks/NBFCs at low interest rates without unnecessary paperwork.`}
            img={require("../../../asset/sample1/main-services/ms17.png")}
          />
          <Twoslide
            classname={" twoslide-two"}
            h1={`Adhikari Loan`}
            p={`Spice Money Adhikaris have access to secure loans at low interest rates from a wide network of Banks and NBFCs across India. These loans allow him to invest in his business and expand the same, bringing growth.`}
            img={require("../../../asset/sample1/main-services/ms18.png")}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
