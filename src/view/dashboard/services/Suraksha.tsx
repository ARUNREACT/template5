import { Twoslide } from "../../../component/Layout";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export function Suraksha() {
  return (
    <div className="main">
      <Header />
      <div className="mainpagehead">
        <div className="suraksha">
          <h1
            data-aos="slide-right"
            className="text-center d-flex align-items-center text-white justify-content-center"
          >
            Suraksha
          </h1>
        </div>
        <div className="p-sm-5 p-3">
          <p>
            Through Spice Money Suraksha services Adhikaris help consumers avail
            various Insurance products serving them at the time when they need
            it most.
          </p>
          <Twoslide
            classname={"twoslide-one"}
            h1={`Hospicash`}
            p={`The Spice Money Hospicash service was introduced to help end consumers who face a loss of regular income in case of hospitalization. In such unfortunate incident, through Hospicash, Spice Money helps them get necessary funds on recurring basis to take care of their expenses making up some of the loss of income.`}
            img={require("../../../asset/sample1/main-services/ms15.png")}
          />
          <Twoslide
            classname={" twoslide-two"}
            h1={`Spice Money Macchar Suraksha Plan`}
            p={`The Spice Money Macchar Suraksha Plan protects against 7 mosquito-borne diseases. Spice Money Adhikaris can now offer this plan to those customers who use the Spice Money DMT service. Customers can buy this plan for a nominal one-time premium amount of Rs.99 only. No medical tests are necessary and the plan doesn’t involve unnecessary paperwork. Customer can get a total payment of Rs. 20,000 in a policy period of 1 year. Rs.10,000 will be available as a lumpsum payment upon hospitalization and the policy will subsequently auto-recharge with the balance of Rs.10,000 which the policyholder can claim if he gets hospitalized for a second time within the policy period.`}
            img={require("../../../asset/sample1/main-services/ms16.png")}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
