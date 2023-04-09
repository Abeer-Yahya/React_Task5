import React from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["currentUser"]);
  const [allUsers, setAllusers] = useCookies(["allUsers"]);

  const handelSubmit = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    const currentUser = { email: email, password: password };
    if (checkUser()) {
      setCookie("currentUser", currentUser, { path: "/" });
      navigate("/");
    } else {
      alert("Invalid Email or password!");
    }

    function checkUser() {
      console.log(allUsers);
      let user = allUsers.AllUsers.filter(
        (user) => user.email == currentUser.email
      );
      if (user.length > 0) return true;
    }
  };

  return (
    <div className="mt-5  login-form">
      <h1>Login</h1>
      <form>
        <div className="mb-3" controlId="formBasicEmail">
          <label>Email address</label>
          <input id={"email"} type="email" placeholder="Enter email" />
        </div>

        <div className="mb-3" controlId="formBasicPassword">
          <label>Password</label>
          <input id={"password"} type={"password"} placeholder="Password" />
        </div>
        <Link
          to="/register"
          className="text-gray-800 hover:shadow-lg"
          style={{ textDecoration: "none", color: "#00253e " }}
        >
          <small>Create new account</small>
          <br></br>
        </Link>
        <br></br>
        <button
          style={{ backgroundColor: "#00253e ", marginBottom: "1rem" }}
          type="button"
          onClick={handelSubmit}
        >
          Submit
        </button>
        <p style={{ color: "#00253e" }}>OR</p>
      </form>
    </div>
  );
}
