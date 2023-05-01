import { Twoslide } from "../../../component/Layout";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export function Banking() {
  return (
    <div className="main">
      <Header />
      <div className="mainpagehead">
        <div className="banking">
          <h1
            data-aos="slide-right"
            className="text-center d-flex align-items-center text-white justify-content-center"
          >
            Banking Services
          </h1>
        </div>
        <div className="p-sm-5 p-3">
          <p>
            Spice Money is committed to bridge the digital divide between urban
            & rural India by providing basic banking & financial services to
            everyone – securely and instantly. Spice Money’s banking solutions
            have made services like Cash Deposit, Withdrawals, and Money
            Transfer easily accessible to the under-banked population of India.
            Anyone can now avail these services without visiting their banks,
            simply through the strong Spice Money Adhikari network.
          </p>
          <Twoslide
            classname={"twoslide-one"}
            h1={`AePS (Aadhaar Enabled Payment System)`}
            p={`The Spice Money AePS service enables the customer to use their Aadhaar card to access their Aadhaar-linked bank account and carry out basic banking transactions like withdrawals, deposits, balance enquiry, and bank transfers. These transactions can be easily done using a secure Biometric Scanner which is available with all Adhikaris at Spice Money with Digital Dukaan.`}
            img={require("../../../asset/sample1/main-services/ms1.png")}
          />
          <Twoslide
            classname={" twoslide-two"}
            h1={`Money Transfer (DMT)`}
            p={`Spice Money customers can transfer money between different banks spread across a wide network. With the help of Adhikaris, they can remit funds across all major nationalized and private banks that operate in India. This is a secure money transfer process with multiple authentication levels to ensure optimum safety. Spice Money Wallet is an RBI approved semi-closed PPI wallet linked to the sender’s mobile number which makes it very secure.`}
            img={require("../../../asset/sample1/main-services/ms2.png")}
          />
          <Twoslide
            classname={"twoslide-one"}
            h1={`Cash withdrawal through mini ATM`}
            p={`With the help of the Spice Money MiniATM, Adhikaris can now withdraw cash for their customers with Debit & Credit cards. You can withdraw cash with all major cards like RuPay, Master, Visa, and Maestro.`}
            img={require("../../../asset/sample1/main-services/ms3.png")}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
