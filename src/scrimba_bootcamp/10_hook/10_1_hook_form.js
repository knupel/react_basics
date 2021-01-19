import React, { Component, useState } from 'react';

function SuperForm() {
  const [inputData, setInputData] = useState({ firstName: '', lastName: '' });
  const [contactsData, setContactsData] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    // split the data array and replace the old data by the new one
    // need to wrap the element between () to indicate to react is not an object, if I nderstand well
    setInputData((prevInputData) => ({ ...prevInputData, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // here we call the previous list, split it and add element and make a new one te replace if I understand well
    setContactsData((prevContacts) => [...prevContacts, inputData]);
  }

  const contacts = contactsData.map((contact) => (
    <h2 key={contact.firstName + contact.lastName}>
      {contact.firstName} {contact.lastName}
    </h2>
  ));

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="First Name"
          name="firstName"
          value={inputData.firstName}
          onChange={handleChange}
        />
        <input
          placeholder="Last Name"
          name="lastName"
          value={inputData.lastName}
          onChange={handleChange}
        />
        <br />
        <button>Add contact</button>
      </form>
      {contacts}
    </>
  );
}

class C extends Component {
  render() {
    return (
      <div>
        <SuperForm />
      </div>
    );
  }
}

export default C;
