import React, { useState } from 'react';
import { validateEmail } from '../../utils/helper';
import { useForm } from "react-hook-form";
import { Row, Col } from 'react-bootstrap';

function ContactForm() {
  // const {state, handleSubmit} = useForm();
  const [formState, setFormState] = useState(
    {
      name: '',
      email: '',
      message: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const {
      name,
      email,
      message
    } = formState;

    function pageReload() {
      window.location.reload(false);
    };

    // if (state.succeeded) {
    // }

const handleSubmit = (e) => {
  e.preventDefault()
    console.log(formState)
    return (
      <div>
        <p>Thank you for your inquiry</p>
        <button onClick={pageReload}>Submit Inquiry</button>
      </div>
    );
}

    const handleChange = (e) => {
      if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
          setErrorMessage('Email invalid')
        } else {
          setErrorMessage('');
        }
      }
      if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        console.log('Handle Form', formState);
      }
    };

    return (
      <div>
        <p>Contact Me</p>
        <div>
          <p>Phone: 555-1212
          <br />
          Email: joe@email.com
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' defaultValue={name} onBlur={handleChange} />
          </div>

          <div>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' defaultValue={email} onBlur={handleChange} />
          </div>

          <div>
          <label htmlFor='message'>Message</label>
          <text area rows='7' defaultValue={message} onBlur={handleChange} />
          </div>

          {errorMessage && (
            <div>
              <p>{errorMessage}</p>
            </div>
          )}          
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}

export default ContactForm