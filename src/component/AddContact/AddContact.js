import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const history = useHistory();

  const contacts = useSelector(state => state);
  //use dispatch
  const dispatch = useDispatch();

  //handle form submission
  const handleSubmit = e => {
    e.preventDefault();
    //cheek email
    const cheekEmail = contacts.find(
      contact => contact.email === email && email
    );
    //cheek number
    const cheekNumber = contacts.find(
      contact => contact.number === parseInt(number)
    );
    if (!email || !number || !name) {
      return alert("Please Fill Up all Fields");
    }
    if (cheekEmail) {
      return alert("This email already exist");
    }
    if (cheekNumber) {
      return alert("This number already exists");
    }
    //adding data
    const data = {
      id: contacts[contacts.length - 1].id + 1,
      name,
      email,
      number,
    };
    dispatch({ type: "ADD_CONTACT", payload: data });
    alert("Successfully Added Student");
    //user back to the home page
    history.push("/");
  };

  return (
    <div className='container'>
      <div className='row'>
        <h1 className='display-3 my-5 text-center'>Add New Student</h1>
        <div className='col-md-6 shadow mx-auto'>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Name'
                className='form-control'
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type='email'
                placeholder='Email'
                className='form-control'
              />
            </div>
            <div className='form-group'>
              <input
                onChange={e => setNumber(e.target.value)}
                value={number}
                type='number'
                placeholder='Phone Number'
                className='form-control'
              />
            </div>
            <div className='form-group'>
              <input
                type='submit'
                placeholder='Name'
                value='Add Student'
                className='btn btn-block btn-dark'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
