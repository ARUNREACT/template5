import { Twoslide } from "../../../component/Layout";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export function Devices() {
  return (
    <div className="main">
      <Header />
      <div className="mainpagehead">
        <div className="devices">
          <h1
            data-aos="slide-right"
            className="text-center d-flex align-items-center text-white justify-content-center"
          >
            Devices & Others Services
          </h1>
        </div>
        <div className="p-sm-5 p-3">
          <p>
            The different devices provided to our Adhikaris enables them to
            offer a host of services to their customers saving them time, money,
            and effort.
          </p>
          <Twoslide
            classname={"twoslide-one"}
            h1={`Biometric Devices, Printer`}
            p={`Adhikaris can buy biometric devices and printers from Spice Money to carry out seamless operations and provide hassle-free services to their customers.`}
            img={require("../../../asset/sample1/main-services/ms19.png")}
          />
          <Twoslide
            classname={" twoslide-two"}
            h1={`Pan Card Services`}
            p={`Spice Money Adhikaris can now get a new PAN card made or get an existing one updated through authorized government channels. Our strong and secure network provides seamless service, making the whole process quick and hassle-free for our customers.`}
            img={require("../../../asset/sample1/main-services/ms20.png")}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
