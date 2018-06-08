import React, { Component } from 'react';


class Login extends Component {
  render() {
    return (
      <div >

      <div className="container py-5" style={{minHeight: 480}}>
        <div className="row">
          <div className="col-sm-4">
          </div>
          <div className="col-sm-4">
            <form>
              <div className="form-group">
                <label htmlFor="inputEmail4">Email </label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword4">Password</label>
                <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
              </div>
              <div className="form-group form-check">   
                <input className="form-check-input" type="checkbox" id="gridCheck" />
                <label className="form-check-label" htmlFor="gridCheck">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
          </div> 
        </div>
      </div>
      </div>
    );
  }
}

export default Login;
