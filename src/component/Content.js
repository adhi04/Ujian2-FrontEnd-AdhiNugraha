import React, { Component } from 'react';
// import link from 'react-router-dom';

class Content extends Component {
    
    render() {
        return (
         
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-3">
                          <h1 className="my-4">MyPet</h1>
                          <div className="list-group">
                            <a href="plist1.html" className="list-group-item">Hewan Peliharaan</a>
                            <a href="plist1.html" className="list-group-item">Makanan Hewan</a>
                            <a href="plist1.html" className="list-group-item">Aksesoris</a>
                          </div>
                        </div>
                       
                        <div className="col-lg-9">
                          <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
                            <ol className="carousel-indicators">
                              <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" /> 
                              <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                              <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                            </ol>
                            <div className="carousel-inner" role="listbox">
                              <div className="carousel-item active">
                                <img className="d-block img-fluid" src="img/jbt1.jpg" alt="First slide" style={{height: 350}} />
                              </div>
                              <div className="carousel-item">
                                <img className="d-block img-fluid" src="img/jbt2.jpg" alt="Second slide" style={{height: 350}} />
                              </div>
                              <div className="carousel-item">
                                <img className="d-block img-fluid" src="img/jbt3.jpg" alt="Third slide" style={{height: 350}} />
                              </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                              <span className="carousel-control-prev-icon" aria-hidden="true" />
                              <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                              <span className="carousel-control-next-icon" aria-hidden="true" />
                              <span className="sr-only">Next</span>
                            </a>
                          </div>
                          <div className="row">
                            <div className="col-lg-4 col-md-6 mb-4">
                              <div className="card h-100">
                                <a href="#"><img className="card-img-top" src="img/cat1.jpg" style={{height: 190}} alt /></a>
                                <div className="card-body">
                                  <h4 className="card-title">
                                    <a href="detailprod.html">Kucing Persia</a>
                                  </h4>
                                  <h5>$24.99</h5>
                                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                                </div>
                                <div className="card-footer">
                                  <small className="text-muted">★ ★ ★ ★ ☆</small>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                              <div className="card h-100">
                                <a href="#"><img className="card-img-top" src="img/cat2.jpg" style={{height: 190}} alt /></a>
                                <div className="card-body">
                                  <h4 className="card-title">
                                    <a href="detailprod.html">Kucing Pignose</a>
                                  </h4>
                                  <h5>$24.99</h5>
                                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="card-footer">
                                  <small className="text-muted">★ ★ ★ ★ ☆</small>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                              <div className="card h-100">
                                <a href="#"><img className="card-img-top" src="img/cat3.jpg" style={{height: 190}} alt /></a>
                                <div className="card-body">
                                  <h4 className="card-title">
                                    <a href="detailprod.html">Kucing Sphinx</a>
                                  </h4>
                                  <h5>$24.99</h5>
                                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                                </div>
                                <div className="card-footer">
                                  <small className="text-muted">★ ★ ★ ★ ☆</small>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                              <div className="card h-100">
                                <a href="#"><img className="card-img-top" src="img/dog.jpg" style={{height: 190}} alt /></a>
                                <div className="card-body">
                                  <h4 className="card-title">
                                    <a href="#">Anjing Kintamani</a>
                                  </h4>
                                  <h5>$24.99</h5>
                                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                                </div>
                                <div className="card-footer">
                                  <small className="text-muted">★ ★ ★ ★ ☆</small>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                              <div className="card h-100">
                                <a href="#"><img className="card-img-top" src="img/dog1.jpg" style={{height: 190}} alt /></a>
                                <div className="card-body">
                                  <h4 className="card-title">
                                    <a href="#">Anjing Bulldog</a>
                                  </h4>
                                  <h5>$24.99</h5>
                                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="card-footer">
                                  <small className="text-muted">★ ★ ★ ★ ☆</small>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                              <div className="card h-100">
                                <a href="#"><img className="card-img-top" src="img/dog2.jpg" style={{height: 190}} alt /></a>
                                <div className="card-body">
                                  <h4 className="card-title">
                                    <a href="#">Anjing Cihuahua</a>
                                  </h4>
                                  <h5>$24.99</h5>
                                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                                </div>
                                <div className="card-footer">
                                  <small className="text-muted">★ ★ ★ ★ ☆</small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div></div></div>
                  );
                }
              
          
        }
      
    

export default Content;
