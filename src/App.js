import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

import { v4 as uuidv4 } from 'uuid';

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const [contacts, setContacts] = useState([
    {
      name: 'Test',
      phone: '961540982',
      mail: 'test@gmail.com',
      key: uuidv4()
    },
    {
      name: 'Test2',
      phone: '916859231',
      mail: 'test2@gmail.com',
      key: uuidv4()
    },
    {
      name: 'Michael',
      phone: '913325612',
      mail: 'michaelscott@gmail.com',
      key: uuidv4()
    },
    {
      name: 'Shawn',
      phone: '9143275612',
      mail: 'shawn@gmail.com',
      key: uuidv4()
    }
  ]);
  const [appointments, setAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
    CONTACT_FORMS: "/contacts/addContact"
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const addContact = (name, phone, email) => {
    setContacts((previous) => [
      ...previous,
      {
        name,
        phone,
        email,
        key: uuidv4()
      },
    ]);
  };

  const addAppointment = (title, contact, date, time) => {
    setAppointments((previous) => [
      ...previous,
      {
        title,
        contact,
        date,
        time,
        key: uuidv4()
      },
    ]);
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage
              appointments={appointments}
              addAppointment={addAppointment}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
