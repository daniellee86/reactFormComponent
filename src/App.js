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
      label: "Username"
    },
    {
      id:2,
      name:"email",
      type:"text",
      placeholder:"Email",
      label: "Email"
    },
    {
      id:3,
      name:"dateofbirth",
      type:"text",
      placeholder:"Date of birth",
      label: "Date of birth"
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Password",
      label: "Password"
    },
    {
      id:5,
      name:"confirmpassword",
      type:"password",
      placeholder:"Confirm password",
      label: "Confirm password"
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
    <form onSubmit={handleSubmit}>
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