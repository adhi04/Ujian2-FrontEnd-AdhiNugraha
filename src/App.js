import React, { Component } from 'react';


class App extends Component {
constructor(){
  super();
  this.state= {pilihan:'pilih jenjang',pela :'pilih tingkat',tingkat:"pilih dulu"}
  

};



// constructor1(){
//   this.state ={ting:'pilih tingkaton'}
  
// }


klik(jenjang){
  this.setState({pilihan:jenjang})
}


klik2(list){
  this.setState({tingkat:list})
}

klik3(woi){
  this.setState({pela:woi})
}




  render() {
    return (
      <div >
            <center>
              <h1>Jenjang Pendidikan</h1>
            </center>
              
                <div className="container" style={{marginLeft:"300px"}} >
                
                <div className="row">

                      <div className="dropdown col-lg-3" >
                      <button className="btn btn-primary dropdown-toggle" data-toggle="dropdown" style={{width:"250px"}} >
                      {this.state.pilihan} <div className="caret"></div>
                      </button>
                        <ul className="dropdown-menu">
                          <li onClick={()=>{this.klik('Pendidikan Pra Sekolah')}}><a   onClick={()=>{this.klik2(<div><li onClick={()=>{this.klik3('Paud')}}><a >PAUD</a></li><li onClick={()=>{this.klik3('TK')}}><a >TK</a></li><li onClick={()=>{this.klik3('RA')}}><a >RA</a></li></div>)}}>Pendidikan Pra Sekolah</a></li>
                          <li onClick={()=>{this.klik('Pendidikan Dasar')}}><a   onClick={()=>{this.klik2(<div><li onClick={()=>{this.klik3('sd')}}><a >SD</a></li><li onClick={()=>{this.klik3('MI')}}><a >MI</a></li><li onClick={()=>{this.klik3('SMP')}}><a >SMP</a></li><li onClick={()=>{this.klik3('MTS')}}><a >MTS</a></li></div>)}}>Pendidkan Dasar</a></li>
                          <li onClick={()=>{this.klik('Pendidikan Menengah')}} ><a onClick={()=>{this.klik2(<div><li onClick={()=>{this.klik3('SMA')}}><a >SMA</a></li><li onClick={()=>{this.klik3('MA')}}><a >MA</a></li><li onClick={()=>{this.klik3('SMK')}}><a >SMK</a></li></div>)}}>Pendidikan Menengah</a></li>
                          <li onClick={()=>{this.klik('Pendidikan Tinggi')}}><a   onClick={()=>{this.klik2(<div><li onClick={()=>{this.klik3('d3')}}><a >D3</a></li><li onClick={()=>{this.klik3('d4')}}><a >D4</a></li><li onClick={()=>{this.klik3('s2')}}><a >s2</a></li><li onClick={()=>{this.klik3('s3')}}><a >s3</a></li></div>)}}>Pendidikan Tinggi</a></li> 
                        </ul>
                    </div>
                  
                       
                      <div className="dropdown col-lg-3" >
                      <button className="btn btn-danger dropdown-toggle " data-toggle="dropdown" style={{width:"250px"}}>
                       {this.state.pela} <div className="caret"></div>
                      </button>

                        <ul className="dropdown-menu" id="belum">
                          {this.state.tingkat}
                        </ul>

                  

                    </div>
         
            </div>
            
            </div>
            
       
      </div>
    );
  }
}

export default App;
