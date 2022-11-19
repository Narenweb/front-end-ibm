import React from "react";
import { Link } from "react-router-dom";
//import Profile from "./Cam";


function onCam(){
    <Link to="/Scan"/>
  };
  
  

function Home() {
  return (
    <div>
    
       <nav className="side">
        <div className="logo-name">
            <div className="logo-image">
               
            </div>

            <span className="logo_name">Welcome</span>
        </div>

        <div className="menu-items">
            <ul className="nav-links">
                <li><a href="#">
                    <i className="uil uil-estate"></i>
                    <span className="link-name">Dashboard</span>
                </a></li>
                <li><a href="/Scan">
                    <i className="uil uil-files-landscapes"></i>
                    <span OnClick={onCam()} className="link-name">Scan a cheque</span>
                </a></li>
                
            </ul>
            
          
        </div>

    </nav>
    <div className="dashboard">
        <div className="top">
          
    <nav class=" navbar navbar-expand-lg navbar-dark bg-dark">
      <i class=" icon fa-brands fa-neos fa-xl"></i>


   <a class="navbar-brand" href="">UserName</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  <div class="collapse navbar-collapse "id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto mb-1 mt-1 px-5">
        <li class ="nav-item">
            <a class="nav-link" href="#project">Copy</a>
        </li>
        <li class ="nav-item">
            <a class="nav-link" href="#images">Contact</a>
        </li>
        <li class ="nav-item ms-auto">
            <a class="nav-link" href="#contact-me">Logout</a>
        </li>
      
    </ul>

    </div>
</nav>
   
        </div>
            
          
     </div>
      
    <table class="table">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Cheque id</th>
      <th scope="col">Date</th>
      <th scope="col">Handle</th>
      <th scope="col">Handle</th>
      <th scope="col">Edit option</th>
      <th scope="col">Copy</th>
    </tr>
    
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Narayanan</td>
      <td>5</td>
      <td>@Front end</td>
      <td>1</td>
      <td>2</td>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Ramalingam</td>
      <td>4</td>
      <td>@Back-end</td>
      <td>1</td>
      <td>2</td>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Tharun Kumar</td>
      <td>3</td>
      <td>@Document</td>
      <td>1</td>
      <td>2</td>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Akash Iyer</td>
      <td>2</td>
      <td>@Document</td>
      <td>1</td>
      <td>2</td>
      <td>3</td>
    </tr>
    
  </tbody>
</table>
        
    </div>
  );
}



export default Home;