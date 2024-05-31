import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Bookings from "./screens/Bookings";
import AddProperty from "./screens/AddProperty";
import Home from "./screens/Home";
import Properties from "./screens/Properties";
import PropertyDetails from "./screens/PropertyDetails";
import UserDetails from "./screens/UserDetails";
import Users from "./screens/Users";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route path="properties" element={<Properties />} />
        <Route path="PropertyDetails" element={<PropertyDetails />} />
        <Route path="addProperty" element={<AddProperty />} />
        <Route path="users" element={<Users />} />
        <Route path="userDetails" element={<UserDetails />} />
        <Route path="bookings" element={<Bookings />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
