import React, { useState } from "react";
import PropTypes from 'prop-types';

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */

  const [appointmentInfo, setAppointmetInfo] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
      </section>
    </div>
  );
};

AppointmentsPage.propTypes = {
  appointments: PropTypes.array.isRequired,
  addAppointment: PropTypes.func.isRequired,
}