import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../services/admin";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const onRegister = async () => {
    if (firstName.length == 0) {
      toast.error("Please Enter First Name");
    } else if (lastName.length == 0) {
      toast.error("Please Enter Last Name");
    } else if (email.length == 0) {
      toast.error("Please Enter Email");
    } else if (password.length == 0) {
      toast.error("Please Enter Password");
    } else if (confirmPassword.length == 0) {
      toast.error("Please Enter Confirm Password");
    } else if (confirmPassword != password) {
      toast.error("Password doesn't match");
    } else {
      //Call Register API
      const result = await register(firstName, lastName, email, password);
      if (result["status"] == "success") {
        // if success go to Login screen
        toast.success("Successfully Logged in");
        navigate("/login");
      } else {
        toast.error(result["error"]);
      }
    }
  };

  return (
    <div>
      <h2 className="page-header">Register</h2>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label htmlFor="">First Name</label>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Last Name</label>
              <input
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Confirm Password</label>
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                className="form-control"
              />
            </div>
            <div className="mb-2">
              Already have an account? <Link to="/login">Login Here</Link>
            </div>
            <div className="mb-3">
              <button onClick={onRegister} className="btn btn-success">
                Register
              </button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Register;
