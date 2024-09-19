import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GoogleImg from "../../assets/images/googleImg.png";
import MsImg from "../../assets/images/MS.png"
const SignUp = () => {

  const [formfields, setFormfields] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    // gender:selectgen
  });

  const notify = (s, msg) => {
    if (s === 0) {
      toast.error(msg);
    } else {
      toast.success(msg);
    }
  }

  const onchangeInput = (e) => {
    setFormfields(() => ({
      ...formfields,
      [e.target.name]: e.target.value,
    }));
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    if (formfields.name === "") {
      console.log("name is empty");
      notify(0, "Fill Name Fiels")
    }
    else if (formfields.phone === ""||formfields.phone.length<10) {
      console.log("phone not valid");
      notify(0, "Fill Phone Fiels")
    }
    else if (formfields.email.length < 5) {
      console.log("email not valid");
      notify(0, "Fill email mot valid")
    } else if (formfields.password.length < 6) {
      console.log("password is short");
      notify(0, "Password is too Short")
    }else{
      notify(1,"Successfully User created")
    }
  }
  return (
    <section className="section signInPage signUpPage">
      <ToastContainer />
      <div className="shape-bottom">
        {" "}
        <svg
          fill="#fff"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 1921 819.8"
          style={{ enableBackground: "new 0 0 1921 819.8" }}
        >
          {" "}
          <path
            class="st0"
            d="M1921,413.1v406.7H0V0.5h0.4l228.1,598.3c30,74.4,80.8,130.6,152.5,168.6c107.6,57,212.1,40.7,245.7,34.4 c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z"
          ></path>{" "}
        </svg>
      </div>

      <div className="container">
        <div className="box card p-3 shadow border-0">
          <div className="text-center">
            {/* <img src={Logo} /> */}
          </div>

          <form className="mt-2" onSubmit={handlesubmit} >
            <h2 className="mb-3">Sign Up</h2>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <TextField
                    label="Name"
                    name="name"
                    onChange={onchangeInput}
                    type="text"
                    variant="standard"
                    className="w-100"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <TextField
                    label="Phone No."
                    name="phone"
                    onChange={onchangeInput}
                    type="number"
                    variant="standard"
                    className="w-100"
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <TextField
                id="standard-basic"
                label="Email"
                type="email"
                name="email"
                onChange={onchangeInput}
                variant="standard"
                className="w-100"
              />
            </div>
            <div className="form-group">
              <TextField
                id="standard-basic"
                label="Password"
                name="password"
                onChange={onchangeInput}
                type="password"
                variant="standard"
                className="w-100"
              />
            </div>

            <a className="border-effect cursor txt">Forgot Password?</a>

            <div className="d-flex align-items-center mt-3 mb-3 ">
              <div className="row w-100">
                <div className="col-md-6 pr-0">
                  <Button
                    type="submit"
                    // disabled={isLoading === true ? true : false}
                    className="btn-blue w-100 btn-lg btn-big"
                  >SignUp
                  </Button>
                </div>
                <div className="col-md-6 pr-0">
                  <Link to="/" className="d-block w-100">
                    {" "}
                    <Button
                      className="btn-lg btn-big w-100"
                      variant="outlined"
                    >
                      Cancel
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <p className="txt">
              Not Registered?{" "}
              <Link to="/signIn" className="border-effect">
                Sign In
              </Link>
            </p>

            <h6 className="mt-4 text-center font-weight-bold">
              Or continue with social account
            </h6>

            <Button
              className="loginWithGoogle mt-2"
              variant="outlined"
            onClick={()=>notify(1,"SignIn With Google")
            }
            >
              <img src={GoogleImg} /> Sign In with Google
            </Button>

            <Button
              className="loginWithGoogle mt-2"
              variant="outlined"
            // onClick={signInWithGoogle}
            
            onClick={()=>notify(1,"SignIn With MS")}
            >
              <img src={MsImg} /> Sign In with Google
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
