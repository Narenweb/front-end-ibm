import React from "react";





function Upload(){
   
    return(
        <div>
        <h2>Enter details</h2>
          <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                  name="name"
                 
                />
              </div>

              <div className="form-group">
                <label>Amount</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Amount"
                
                />
              </div>

              <div className="form-group">
                <label>Amount in words</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Amount in words"
                 
                />
              </div>

              <div className="form-group">
                <label>Date</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Date"
                  
                />
              </div>

              <div className="form-group">
                <label>Account Number</label>
                <input
                  type="Phone"
                  className="form-control"
                  placeholder="Enter Accoune Number"
                  
                />
              </div>
              
                <button type="submit" className="btn btn-dark btn-lg btn-block button1 ">
                Submit
              </button>
              
        </div>
    );
}


export default Upload;
