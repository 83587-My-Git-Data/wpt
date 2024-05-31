import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../services/admin";

function Login() {
  const [isEmailEmpty, setEmailEmpty] = useState(false);
  const [isPasswordEmpty, setPasswordEmpty] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //get navigation hook
  const navigate = useNavigate();

  const onLogin = async () => {
    if (email.length == 0) {
      toast.error("Please Enter Email");
    } else if (password.length == 0) {
      toast.error("Please Enter Password");
    } else {
      //call login API and check if its success or not
      const result = await login(email, password);
      if (result["status"] == "success") {
        const data = result["data"];

        sessionStorage["name"] = data["name"];
        sessionStorage["token"] = data["token"];
        toast.success("Successfully logged in");
        //go to home screen
        navigate("/home");
      } else {
        toast.error(result["error"  ]);
      }
    }
  };

  return (
    <div>
      <h2 className="page-header">Login</h2>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label htmlFor="">Email</label>
              <input
                onChange={(e) => {
                  if (e.target.value.length == 0) {
                    setEmailEmpty(true);
                  } else {
                    setEmailEmpty(false);
                  }
                  setEmail(e.target.value);
                }}
                type="email"
                className="form-control"
              />
              {isEmailEmpty && (
                <p style={{ color: "red" }}>Email is mandatory</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="">Password</label>
              <input
                onChange={(e) => {
                  if (e.target.value.length == 0) {
                    setPasswordEmpty(true);
                  } else {
                    setPasswordEmpty(false);
                  }
                  setPassword(e.target.value);
                }}
                type="password"
                className="form-control"
              />
              {isPasswordEmpty && (
                <p style={{ color: "red" }}>Password is mandatory</p>
              )}
            </div>
            <div className="mb-2">
              Don't have an account? <Link to="/register">Register Here</Link>
            </div>
            <div className="mb-3">
              <button onClick={onLogin} className="btn btn-success">
                Login
              </button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Login;
