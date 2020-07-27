import React, { useState } from 'react'






export const Login:React.FC = () => {
const [pasword,setPasword]=useState('');
const [email,setEmail]=useState('');

interface objEO{
  target:{
    id:string;
    value:string;
  }
}

const inputHandler=(EO:objEO)=>{
  const Enent= EO.target;
  switch (EO.target.id) {
    case "password":setPasword(EO.target.value)
      break;
    case "email":setEmail(EO.target.value)
      break;
    default:
      return;
  }}

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