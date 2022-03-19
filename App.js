import React from "react";
import "./App.css";

function App() {
  const formData = () => {
    return {
      firstName: "",
      lastName: "",
      email: "",
    };
  };

  const [values, setValues] = React.useState(() => formData);

  const handleFirstNameInputChange = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };

  const handleLastNameInputChange = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };

  const handleEmailInputChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  const [submitted, setSubmitted] = React.useState(() => false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  const [valid, setValid] = React.useState(() => false);

  return (
    <div className="form-container mb-3 container mt-5">
      <form className="form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="register-form mb-3 ">
            <h2>Success! Thank you for register</h2>
          </div>
        ) : null}
        <input
          onChange={() => handleFirstNameInputChange}
          value={values.firstName}
          className="form-field form-control"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !values.firstName ? (
          <code className="text-danger">Please, enter your name</code>
        ) : null}

        <input
          onChange={() => handleLastNameInputChange}
          value={values.lastName}
          className="form-field form-control mt-4"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !values.lastName ? (
          <code className="text-danger">Please, enter your last name</code>
        ) : null}

        <input
          onChange={() => handleEmailInputChange}
          value={values.email}
          className="form-field form-control mt-4"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.email ? (
          <code className="text-danger">Please, enter your email</code>
        ) : null}
        <br />
        <button className="btn btn-primary mt-4">Submit</button>
      </form>
    </div>
  );
}

export default App;
