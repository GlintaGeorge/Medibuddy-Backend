import React from "react";
import Navbar from "../../components/user/Navbar/Navbar";

import AppointmentOnlineBookingPage from "../../components/user/onlineBookingPage";

const Appoinment: React.FC = () => {
  return (
    <>
      <Navbar />
      <AppointmentOnlineBookingPage />
    </>
  );
};

export default Appoinment;
