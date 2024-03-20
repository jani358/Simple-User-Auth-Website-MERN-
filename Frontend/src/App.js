import { Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Account from './pages/Account'

function App() {
  // Check if a user is signed in by checking if a token exists in localStorage
  const isUserSignedIn = !!localStorage.getItem('token')

  return (
    <div className="App">
      {/* Display the Navbar component */}
      <Navbar />
      
      {/* Define the routes for the application */}
      <Routes>
        {/* Route for the Home page */}
        <Route path='/' element={<Home />} />
        
        {/* Route for the Login page */}
        <Route path='/login' element={<Login />} />
        
        {/* Route for the SignUp page */}
        <Route path='/signup' element={<SignUp />} />
        
        {/* 
          Conditionally render the Route for the Account page
          This route will only be rendered if a user is signed in
        */}
        {isUserSignedIn && <Route path='/account' element={<Account />} />}
      </Routes>
    </div>
  );
}

export default App;
