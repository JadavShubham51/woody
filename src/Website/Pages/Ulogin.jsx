import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Commoan_component/Footer";
import Header from "../Commoan_component/Header";

function Ulogin() {

  const redirect = useNavigate()

//   useEffect(()=>{
//     if(localStorage.getItem("userid"))
//       {
//         redirect("/")
//       }
//   })

  const [fromvalue,setfromvalue]= useState({
    email:"",
    password:"",
  })

  const getonchange=(e)=>{
    setfromvalue({...fromvalue,[e.target.name]:e.target.value})
    console.log(fromvalue)
  }

  const onsubmitfrom=async(e)=>{
    e.preventDefault();

    const {email,password} = fromvalue

    if(!email.trim() || !password.trim())
      {
        console.log("Email and Password are required!");
        return
      }

    //match process

    try {
      const res = await axios.get(`http://localhost:3000/user?email=${email}`)
      if(res.data.length === 0)
        {
          console.error("Email does not Exits")
          return
        }

        const user = res.data[0]
        if(user.password !== password)
          {
            console.error("Incorrect password")
            return
          }

        // status :- 
        if(user.status !== "unblock")
          {
            console.error("account hs been block")
            return false
          }

        // session creted
        localStorage.setItem("usersid",user.id)
        localStorage.setItem("usname",user.name)
        console.log("Login successfull")
        redirect("/")
        setfromvalue({
          email:"",
          password:""
        })
    } catch (error) {
      console.error("Error during login",error)
    }
  }

  return (
    <div>
      <Header/>
      <MDBContainer fluid className="p-3 my-5 h-custom">
       <form onSubmit={onsubmitfrom}>
       <MDBRow>
          <MDBCol col="10" md="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="img-fluid"
              alt="Sample image"
            />
          </MDBCol>

          <MDBCol col="4" md="6">
            <div className="d-flex flex-row align-items-center justify-content-center">
              <p className="lead fw-normal mb-0 me-3">Sign in with</p>

              <MDBBtn floating size="md" tag="a" className="me-2">
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>

              <MDBBtn floating size="md" tag="a" className="me-2">
                <MDBIcon fab icon="twitter" />
              </MDBBtn>

              <MDBBtn floating size="md" tag="a" className="me-2">
                <MDBIcon fab icon="linkedin-in" />
              </MDBBtn>
            </div>

            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">Or</p>
            </div>

            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              id="formControlLg"
              type="email"
              size="lg"
              onChange={getonchange}
              name="email"
              value={fromvalue.email}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="formControlLg"
              type="password"
              name="password"
              value={fromvalue.password}
              onChange={getonchange}
              size="lg"
            />

            <div className="d-flex justify-content-between mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a href="!#">Forgot password?</a>
            </div>

            <div className="text-center text-md-start mt-4 pt-2">
              <MDBBtn className="mb-0 px-5" size="lg">
                Login
              </MDBBtn>
             <Link className="btn btn-primary">register</Link>
            </div>
          </MDBCol>
        </MDBRow>
       </form>
      </MDBContainer>
      <Footer/>
    </div>
  );
}

export default Ulogin;
