import React, { Component } from 'react';


class Prodetail extends Component {
  render() {
    return (
        <div className="container" id="product-section">
        <br /><br /><br />
        <div className="row">
          <div className="col-md-6">
            <img src="https://i2.wp.com/www.meongku.com/wp-content/uploads/2017/09/kucing-persia.jpg" style={{height: 300, width: 300}} alt="Kucing" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12">
                <h2>Kucing Persia 3 Bulan</h2>
                <h4 className="price">Harga: <span>$180</span></h4>
              </div>
            </div>
            <br />
            <p> 2 bulan betina, aktif, lincah, menggemaskan, sehat, sudah bisa makan dry food, pup dipasir chat olx/wa no call. </p>
          </div>
        </div>
        <br /><br />
        </div>

    );
  }
}

export default Prodetail;
