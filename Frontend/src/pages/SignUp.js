import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  // State variables to store user input and list of users
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // useEffect to fetch users when component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  // Function to fetch all registered users
  const fetchUsers = () => {
    axios.get("http://localhost:3001/register").then((res) => {});
  };

  // Function to handle form submission for user registration
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/register", { email, username, password })
      .then(() => {
        // Alert successful registration
        alert("Registration Successful");
        setEmail("");
        setUsername("");
        setPassword("");
        // Fetch updated list of users and navigate to login page
        fetchUsers();
        navigate("/login");
      })
      .catch((error) => {
        console.log("Unable to register user:", error);
      });
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-[50%] h-[100%] bg-gray-900 text-white flex justify-center items-center">
        <form
          className="text-center border rounded-lg w-[600px] h-[400px] p-9"
          onSubmit={handleSubmit}
        >
          <label>Email</label>
          <br />
          <input
            className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2 text-white"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />

          <label>Username</label>
          <br />
          <input
            className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2 text-white"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <br />

          <label>Password</label>
          <br />
          <input
            className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2 text-white"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />

          <button
            className="w-[200px] h-[50px] border hover:bg-teal-900"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
      <div className="w-[50%] h-[100%] flex justify-center items-center bg-teal-800">
        <h2 className="text-3xl text-white">Sign Up</h2>
      </div>
    </div>
  );
}

export default SignUp;
