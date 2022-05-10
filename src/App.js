import './App.css';
import { useState } from 'react';
import FormInput from './components/FormInput';

function App() {
  const [values, setValues] = useState({
    username:"",
    email:"",
    dateofbirth:"",
    password:"",
    confirmpassword:"",
  })

  const inputs = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"Username",
      errorMessage:"Username should be between 3-16 characters and shouldn't include special characters!",
      label: "Username",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"Email",
      errorMessage:"Email address not valid.",
      label: "Email",
      required: true,
    },
    {
      id:3,
      name:"dateofbirth",
      type:"date",
      placeholder:"Date of birth",
      errorMessage:"",
      label: "Date of birth"
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Password",
      errorMessage:"Password should be 8-20 charachters and include at least 1 letter, number and special character",
      label: "Password",
      required: true,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,

    },
    {
      id:5,
      name:"confirmpassword",
      type:"password",
      placeholder:"Confirm password",
      errorMessage:"Passwords dont match!",
      label: "Confirm password",
      pattern: values.password,
      required: true,
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

console.log(values)
  return (
    <div className="App">
    <form className='form' onSubmit={handleSubmit}>
      <h1>Register</h1>
    {inputs.map((input) => (
      <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
    ))}
      <button>Submit</button>
    </form>
    </div>
  );
}

export default App;



//simple version
//app.js
// const [username, setUsername] = useState("")
//
//forminput.jsx
// onChange={e=>props.setUsername(e.target.value)}
//

//
//versions that dont re-render onchange 
//useRef
//app.js
//  const usernameRef = useRef()
//reference={usernameRef}
//
//forminput.jsx
//ref={props.reference}

//formdata
//app.js
// const data = new FormData(e.target)
// console.log(Object.fromEntries(data.entries()))
//
//forinput.js
//name={props.name}