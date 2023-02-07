import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [name, setName] = useState("");

  let [email, setEmail] = useState("");
  let [mobileno, setMobileno] = useState("");

  let [nameValidated, setNameValidated] = useState(true);
  let [emailValidated, setEmailValidated] = useState(true);
  let [mobilenoValidated, setMobilenoValidated] = useState(true);

  let [mobilenoMessage, setMobilenoMessage] = useState("plese enter mobileno");
  let [emailMessage, setEmailMessage] = useState("plese enter email");





  function handelChange(e) {
    e.preventDefault();
    if (
      e.target.id === "name") 
      setName(e.target.value);

    
    else if (e.target.id === "email")
      setEmail(e.target.value);
    else if (e.target.id === "mobileno")
      setMobileno(e.target.value);
  }




  function save(e) {
    e.preventDefault();

    setNameValidated(name === "" ? false : true);
    setEmailValidated(true);

    if (email === "") {
      setEmailMessage("plese enter email");
      setEmailValidated(false);
    }
    else if (
      (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) === false) {
      setEmailValidated(false);
      setEmailMessage("plese enter valied email")
    }
    setMobilenoValidated(true);
    if (mobileno === "") {
      setMobilenoMessage("plese enter mobile no");
      setMobilenoValidated(false);
    }
    else if (
      (/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/.test(mobileno)) === false) {
      setMobilenoValidated(false);

      setMobilenoMessage("plese enter valied mobile no")

    }

  }
  return (
    <div className='container'>
      <div className='col-lg-6 ' >
        <form onSubmit={(e) => { save(e) }}>
          <div className='form-group d-block mx-auto'>
            NAME {!nameValidated && <span className='text-danger'>plese enter name</span>}
            <input type='text' className='form-control' id='name' value={name} onChange={(e) => { setName(e.target.value) }} />


          </div>
          <div className='form-group'>
            EMAIL {!emailValidated && <span className='text-danger'> {emailMessage}</span>}
            <input type='email' className='form-control' id='email' value={email} onChange={(e) => { setEmail(e.target.value)}} />
          </div>

          <div className='form-group'>
            MOBILE NO {!mobilenoValidated && <span className='text-danger'>{mobilenoMessage}</span>}
            <input type='text' className='form-control' id='mobileno' value={mobileno} onChange={(e) => { setMobileno(e.target.value) }} />
          </div>
          <br />
          <div className='form-group'>

            <input type='submit' value="save" className='btn btn-primary' />
          </div>

        </form>
      </div>
    </div>
  );
}

export default App;
