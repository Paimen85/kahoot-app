import React from "react";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setEmail,
  setPassword,
  setToken,
} from "../../features/login/loginSlice";
import AuthService from "../../services/AuthService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, password, token } = useSelector((state) => state.login);

  React.useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token && token !== "" && token !== undefined) {
      dispatch(setToken(token));
    }
  }, []);

  // by click login button getting token from server and saving it into sessionStorage
  const handleLoginClick = async (e) => {
    e.preventDefault();
    await AuthService.loginPageCall(email, password)
      .then((res) => {
        sessionStorage.setItem("token", res.data.access_token);
        return res.data.access_token;
      })
      .then((token) => dispatch(setToken(token)))
      .then(() => navigate("/createKahoot"))
      .catch((e) => console.error(e));
  };

  const handleLogoutClick = () => {
    sessionStorage.removeItem("token");
    dispatch(setToken(null));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-5">
          {token && token !== "" && token !== undefined ? (
            <div>
              You are already logged in
              <div>
                <button
                  className="btn btn-primary mt-3 "
                  onClick={() => navigate("/createKahoot")}
                >
                  Create Kahoot
                </button>

                <button
                  className="btn btn-danger mt-3 ms-3 "
                  onClick={() => handleLogoutClick()}
                >
                  Log out
                </button>
              </div>
            </div>
          ) : (
            <div className="card">
              <div className="card-header">
                <h2 className="text-center">Login Form</h2>
              </div>
              <div className="card-body">
                <form action="">
                  <div className="row mb-3">
                    <label
                      htmlFor="username"
                      className="col-md-3 control-label"
                    >
                      Email
                    </label>
                    <div className="col-md-9">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        className="form-control"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => dispatch(setEmail(e.target.value))}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="password"
                      className="col-md-3 control-label"
                    >
                      Password
                    </label>
                    <div className="col-md-9">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => dispatch(setPassword(e.target.value))}
                      />
                    </div>
                  </div>

                  <div className="form-group mb-3">
                    <button
                      className="btn btn-success login-btn"
                      onClick={(e) => handleLoginClick(e)}
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
