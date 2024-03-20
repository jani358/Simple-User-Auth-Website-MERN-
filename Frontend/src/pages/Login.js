import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState(""); // State to store username input
  const [password, setPassword] = useState(""); // State to store password input
  const navigate = useNavigate(); // Navigate from React Router

  useEffect(() => {
    // Fetch users when the component mounts
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    // Fetch all registered users from the backend
    axios
      .get("http://localhost:3001/register")
      .then((res) => {
        console.log(res.data); // Log the fetched users data
      })
      .catch((error) => {
        console.error("Error fetching users:", error); // Log any errors
      });
  };

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    try {
      // Send a POST request to the backend for user login
      const response = await axios.post("http://localhost:3001/login", {
        username,
        password,
      });
      const token = response.data.token; // Get the JWT token from the response

      alert("Login successful");

      // Clear the input fields after successful login
      setUsername("");
      setPassword("");

      // Fetch updated list of users
      fetchUsers();

      // Navigate to '/account' route
      navigate("/account");

      // Reload the page to update user data
      window.location.reload();

      // Store the JWT token in localStorage for authentication
      localStorage.setItem("token", token);
    } catch (error) {
      console.log("Login Error", error); // Log any errors during login
    }
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-[50%] h-[100%] bg-gray-900 text-white flex justify-center items-center">
        <form
          className="text-center border rounded-lg w-[600px] h-[400px] p-9"
          onSubmit={handleLogin} // Call handleLogin function on form submission
        >
          <label className="text-lg">Username</label>
          <br />
          <input
            className="w-[400px] h-[40px] rounded-xl bg-gray-800 text-white p-2 mt-2"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Update username state on input change
          />
          <br />
          <br />

          <label className="text-lg">Password</label>
          <br />
          <input
            className="w-[400px] h-[40px] rounded-xl bg-gray-800 text-white p-2 mt-2"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state on input change
          />
          <br />
          <br />

          <button
            className="w-[200px] h-[50px] border bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-md"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>

      <div className="w-[50%] h-[100%] flex justify-center items-center bg-teal-800">
        <h2 className="text-3xl text-white">Login</h2>
      </div>
    </div>
  );
}

export default Login;
