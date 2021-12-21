import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const EditStudent = () => {
  const { id } = useParams();
  const contacts = useSelector(state => state);
  const dispatch = useDispatch();
  const currentContact = contacts.find(contact => contact.id === parseInt(id));
  const history = useHistory();
  //all state from add contact
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }
  }, [currentContact]);

  //handle form submission
  const handleSubmit = e => {
    e.preventDefault();
    //cheek email
    const cheekEmail = contacts.find(
      contact => contact.id !== parseInt(id) && contact.email === email && email
    );
    //cheek number
    const cheekNumber = contacts.find(
      contact =>
        contact.id !== parseInt(id) && contact.number === parseInt(number)
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
      id: parseInt(id),
      name,
      email,
      number,
    };
    dispatch({ type: "UPDATE_CONTACT", payload: data });
    alert("Successfully Updated Student");
    //user back to the home page
    history.push("/");
  };

  return (
    <div className='container'>
      {currentContact ? (
        <div className='row'>
          <h1 className='display-3 my-5 text-center'>Edit Student Id:{id}</h1>
          <div className='col-md-6 shadow mx-auto'>
            <form onSubmit={handleSubmit}>
              <div className='form-group my-3'>
                <input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  type='text'
                  placeholder='Name'
                  className='form-control'
                />
              </div>
              <div className='form-group my-3'>
                <input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  type='email'
                  placeholder='Email'
                  className='form-control'
                />
              </div>
              <div className='form-group my-3'>
                <input
                  value={number}
                  onChange={e => setNumber(e.target.value)}
                  type='number'
                  placeholder='Phone Number'
                  className='form-control'
                />
              </div>
              <div className='form-group my-3'>
                <input
                  type='submit'
                  placeholder='Name'
                  value='Update Student'
                  className='btn btn-dark'
                />
                <Link to='/' className='btn btn-danger ms-3'>
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <h1 className='display-3 my-5 text-center'>
          Student contact Id:{id} is not exists
        </h1>
      )}
    </div>
  );
};

export default EditStudent;
