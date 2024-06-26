import { useState } from 'react';



function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  // TODO: Create a password variable and a function "setPassword" using useState

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!email || !userName) {
      setErrorMessage('Email or name is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    

    // If successful, we want to clear out the input after registration.
    setUserName('');
    // TODO: Set the password back to an empty string after the user clicks submit

    setEmail('');

    setMessage('')

  };

  return (
    <div className="container text-center">
      <h1>Contact Me</h1>
      <form className="form" onSubmit={handleFormSubmit}> 
      <input
          value={userName}
          name="userName"
          className="contact-input"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          className="contact-input"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
      
          <textarea
          defaultValue={message}
          name="message"
          className="contact-text"
          onChange={handleInputChange}
          type="text"
          placeholder="Write message here"
        />
        {/* TODO Add another input field with a value, name, type, and placeholder of "password" */}
        {/* TODO Add a `onChange` attribute with a value of `handleInputChange` */}
        <button className="submitButton" type="submit">
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;