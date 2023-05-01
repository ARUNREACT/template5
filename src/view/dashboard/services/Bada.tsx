import { Twoslide } from "../../../component/Layout";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export function Bada() {
  return (
    <div className="main">
      <Header />
      <div className="mainpagehead">
        <div className="bada">
          <h1
            data-aos="slide-right"
            className="text-center d-flex align-items-center text-white justify-content-center"
          >
            Bada Bazar
          </h1>
        </div>
        <div className="p-sm-5 p-3">
          <p>
            Spice Money Bada Bazar is an effort to provide e-commerce facilities
            to end consumers through Spice Money Adhikaris. Through the Spice
            Money Bada Bazar, customers can visit their nearest Spice Money
            Digital Dukaan and purchase products from platforms such as IFFCO
            and Amazon.
          </p>
          <Twoslide
            classname={"twoslide-one"}
            h1={`IFFCO Bazar`}
            p={`The IFFCO Bazar is the largest online market for agricultural products. Farmers can place the order with the local Spice Money Adhikari and get the products delivered to them. Through IFFCO Bazar Adhikari gets an opportunity to build an e-commerce business with zero investment.`}
            img={require("../../../asset/sample1/main-services/ms13.png")}
          />
          <Twoslide
            classname={" twoslide-two"}
            h1={`Amazon Easy`}
            p={`Amazon easy is a wonderful opportunity for semi-urban and rural consumers to order products from Amazon which is one of the largest e-commerce players. Consumers get great products with good discounts & offers and Spice Money Adhikaris get an opportunity to get benefitted with growth of online purchase.`}
            img={require("../../../asset/sample1/main-services/ms14.png")}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
