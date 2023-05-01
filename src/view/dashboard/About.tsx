import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";

export function About() {
  return (
    <div className="main">
      <Header />
      <div className="mainpagehead">
        <div className="about-main-img">
          <h1
            data-aos="slide-right"
            className="text-center d-flex align-items-end text-white pb-4 justify-content-center"
          >
            ABOUT US
          </h1>
        </div>

        <div className="py-4 my-4 d-flex flex-column">
          <h1 data-aos="fade-up" className="fw-bold text-center py-4">
            Our Journey
          </h1>
          <img
            data-aos="zoom-in"
            className="img-fluid"
            src={require("../../asset/sample1/a1.png")}
            alt=""
          />
        </div>

        <div className="col-md-10 mx-auto col-12 contact-content">
          <p>
            Spice Money is India’s leading Rural Fintech company empowering
            merchants / nanopreneurs, called Spice Money Adhikaris through
            technology to cater to the digital and financial needs of rural
            citizens in India. Spice Money through its cutting edge technology
            and wide network of Spice Money Adhikaris, is bridging the gaps in
            access to various financial services for the masses across the
            length and breadth of India. <br />
            A 100% subsidiary of DiGiSPICE Technologies (NSE: DIGISPICE), Spice
            Money offers essential digital financial and e-retail services such
            as cash deposit and Aadhaar led withdrawals, mini ATM services, bill
            payments and recharge, money transfers, loans, tours and travel and
            more to the rural citizens through Spice Money Adhikari App
            (available on Google play store with an industry best rating of 4.4)
            and Web portal. <br />
            The Spice Money network, comprising more than 10 lakh Adhikaris,
            covers more than 18,000 pin codes, 700 districts and 5,000 blocks,
            serving over 10 crore households. In fact, the network now covers
            95% rural pin codes in India.
            <br />A regulated entity under the Reserve Bank of India, the
            company possess all the relevant licenses like Prepaid Instruments
            License (PPI) & Bharat Bill Payment System (BBPS), GSP License,
            IRCTC, and the Corporate Agency license for Insurance by IRDA. Spice
            Money has partnered with various institutions, banks, service
            providers enabling the company to launch various products & services
            that help the network and consumer base in inclusive growth.
            <br />
            In December 2020, Spice Money joined hands with actor and
            philanthropist Sonu Sood with a shared vision of harnessing the
            power of technology to promote entrepreneurship among the rural and
            semi-urban population. Together with Sonu Sood, the company
            reinvented it into a new identity – Spice Money to Life Bani
            encapsulating the brand philosophy of bringing real change in the
            lives of its customers & Adhikaris.
            <br />
            Spice Money has been constantly innovating to expand its reach to
            the underbanked and underserved parts of India. In February 2021, a
            zero-investment business initiative was launched that removed the
            barrier of entry for aspiring young rural entrepreneurs and enabled
            them to become a part of the Spice Money network completely free of
            cost with their very own ‘Digital Dukaan’.
            <br />
            Spice Money is also building India’s largest mATM Network to address
            the critical issue of inaccessibility to ATMs and physical banking
            infrastructure for those living in rural India. Spice Money has
            successfully activated more than 1,00,000 micro-ATMs throughout its
            network. As a testimony of its commitment, Spice Money has even
            covered India’s last village, Chitkul with its very first ATM
            network.
            <br />
            Spice Money is constantly working towards driving innovative
            tech-driven solutions to empower rural citizens and drive financial
            inclusion across the country.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
