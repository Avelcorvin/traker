import React, { useState } from 'react'


export const Login = () => {
const [pasword,setPasword]=useState(null);
const [email,setEmail]=useState(null);

console.log(pasword,email)
const inputHandler=(EO)=>{
  switch (EO.target.id) {
    case "password":setPasword(EO.target.value)
      break;
    case "email":setEmail(EO.target.value)
      break;
    default:
      return;
  }
}
const 

  return (

    <div className="row">
      <form className="col s12">
        <div className="row s10">
          <label className="input-field col s12" >Password
            <input
              placeholder="Password"
              id="password"
              type="password"
              className="validate"
              onChange={inputHandler}
            />
          </label>
        </div>
        <div className="row s10">
          <label className="col s14">Email
            <input
              placeholder="Email"
              id="email"
              type="email"
              className="validate"
              onChange={inputHandler}
            />
          </label>
        </div>
        <a  className="waves-effect waves-light btn">button</a>
      </form>
    </div>
  )
}