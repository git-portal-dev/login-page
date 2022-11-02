import { useState } from 'react';
import './App.css';

const validationObject = {
  userName: {
    error: false,
    msg: ""
  },
  password: {
    error: false,
    msg: ""
  }
}


const FormFeild = ({ validation, feildName, children }) => {

  const { error, msg } = validation[feildName];

  return <div className='form'>
    {children}
    {error && <p>{msg}</p>}
  </div>
}



function App() {

  const [userName, setUserName] = useState('');
  const [passowrd, setPassword] = useState('');
  const [validation, setValidation] = useState(validationObject);

  const loginHandler = (event) => {
    event.preventDefault();
    let formError = false;

    // check user name
    if (!userName) {
      validation.userName.error = true;
      validation.userName.msg = "User name is required!";
      formError = true;
    } else {
      validation.userName.error = false;
    }

    // check passord
    if (!passowrd) {
      validation.password.error = true;
      validation.password.msg = "Password is required!";
      formError = true;
    } else {
      validation.password.error = false;
    }

    setValidation({ ...validation });

    if (!formError) {
      // send data to backend
      if (userName === "user" && passowrd === "password") {
        alert('Success!')
      } else {
        alert('Fail')
      }
    }
  }

  return (
    <div className="App">
      <p>Login</p>
      <form onSubmit={loginHandler}>
        <FormFeild validation={validation} feildName="userName">
          <label>User Name</label>
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            placeholder='User Name' />
        </FormFeild>
        <FormFeild validation={validation} feildName="password">
          <label>Password</label>
          <input
            type="password"
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormFeild>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default App;
