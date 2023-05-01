import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../view/dashboard/home/Dashboard";
import { Footer } from "../view/dashboard/footer/Footer";
import { Header } from "../view/dashboard/header/Header";
import { About } from "../view/dashboard/About";
import { Banking } from "../view/dashboard/services/Banking";
import { Payment } from "../view/dashboard/services/Payment";
import { Tours } from "../view/dashboard/services/Tours";
import { Bada } from "../view/dashboard/services/Bada";
import { Suraksha } from "../view/dashboard/services/Suraksha";
import { Loan } from "../view/dashboard/services/Loan";
import { Devices } from "../view/dashboard/services/Devices";
import { Contactus } from "../view/dashboard/contactus/Contactus";
import { Login } from "../view/dashboard/Login";

function MainNavigator() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/banking" element={<Banking />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/bada" element={<Bada />} />
        <Route path="/suraksha" element={<Suraksha />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/devices" element={<Devices />} />

        <Route path="header" element={<Header />} />
        <Route path="footer" element={<Footer />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default MainNavigator;
