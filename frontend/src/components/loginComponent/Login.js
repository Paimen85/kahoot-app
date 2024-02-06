import React from 'react'

const Login = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-5">
          <div className="card">
            <div className="card-header">
              <h2 className="text-center">Login Form</h2>
            </div>

            <div className="card-body">
              <form action="">
                <div className="row mb-3">
                  <label htmlFor="username" className="col-md-3 control-label">
                    Email
                  </label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="form-control"
                      placeholder="Enter email"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="password" className="col-md-3 control-label">
                    Password
                  </label>
                  <div className="col-md-9">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      placeholder="Enter password"
                    
                    />
                  </div>
                </div>

                <div className="form-group mb-3">
                  <button
                    className="btn btn-success"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login