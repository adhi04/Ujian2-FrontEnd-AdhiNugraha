import React, { Component } from 'react';


class Registration extends Component {
  render() {
    return (
      
            <div className="container py-5">
              <div>
                <center> <h1>Registration Form <br /><br /></h1> </center>
              </div>
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputFrontName">Nama Depan </label>
                    <input type="text" className="form-control" id="inputFrontName" placeholder="Nama Depan" />
                    {/* <label for="inputEmail4">Nama Depan </label>
                      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"> */}
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputLastname">Nama Belakang</label>
                    <input type="text" className="form-control" id="inputLastName" placeholder="Nama Belakang" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" className="form-control" id="username" placeholder="Username" />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Email </label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputLastname">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress">Alamat</label>
                  <input type="text" className="form-control" id="inputAddress" placeholder="Alamat" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputTglLahir">Tanggal Lahir</label>
                  <input type="date" className="form-control" id="inputTglLahir" placeholder="DD-MM-YYYY" />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputCity">Kota</label>
                    <input type="text" className="form-control" id="inputCity" />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="inputState">Negara</label>
                    <select id="inputState" className="form-control">
                      <option selected>Pilih Negara</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" htmlFor="gridCheck">
                      Check me out
                    </label>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
              </form>
            </div>
          );
        }
      };
    

export default Registration;
