import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, redirect, useNavigate } from "react-router-dom";

const patterns = {
  email: /(\w{4,}).?-?_?(\w{2,})?@([a-z\d]+).com/,
  password: /^[\w]{8,20}$/,
};
const Register = () => {
  const [cookies, setCookie] = useCookies(["currentUser"]);
  const [allUsers, setAllusers] = useCookies(["allUsers"]);
  const [isRedirect, setRedirect] = useState("false");
  const [allUsersArray, setAllusersArray] = useState([]);
  const navigate = useNavigate();
  const handelSubmit = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let ConfirmPassword = document.getElementById("ConfirmPassword").value;

    if (
      patterns.email.test(email) &&
      patterns.password.test(password) &&
      password == ConfirmPassword
    ) {
      console.log("test");
      if (checkEmail(email)) {
        let newUser = { email: email, password: password };
        setAllusersArray([...allUsersArray, newUser]);
        console.log(allUsersArray);
        setCookie("currentUser", newUser, { path: "/" });
        setAllusers("AllUsers", [...allUsersArray, newUser], { path: "/" });
      } else {
        alert("This Email is already used");
      }
    } else {
      alert("Invalid password or email pattern");
    }
  };

  function checkEmail(E) {
    let rightUser = allUsersArray?.filter((user) => {
      if (user.email == E) return true;
    });
    if (rightUser[0] == null) {
      return true;
    }

    return false;
  }

  return (
    <div className="mt-5 login-form">
      <h1>Register</h1>
      <form>
        <div className="mb-3" controlId="formBasicEmail">
          <label>Email address</label>
          <input id={"email"} type="email" placeholder="Enter email" />
        </div>

        <div className="mb-3" controlId="formBasicPassword">
          <label>Password</label>
          <input id={"password"} type="password" placeholder="Password" />
        </div>

        <div className="mb-3" controlId="formBasicPassword">
          <label>Password</label>
          <input
            id={"ConfirmPassword"}
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <Link
          to="/login"
          className="text-gray-800 hover:shadow-lg"
          style={{ textDecoration: "none", color: "#00253e " }}
        >
          <small>Already have an account</small>
          <br></br>
        </Link>
        <br></br>
        <button
          style={{ backgroundColor: "#00253e " }}
          type="button"
          onClick={handelSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
