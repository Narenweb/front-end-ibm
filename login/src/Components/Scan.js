import { Link } from "react-router-dom";
import React from 'react';


function Up(){
    <Link to="/Upload"/>
  };
  

function Scan() {

	
	return (
		<div>
			<h1>
			Scan the cheque
			</h1>
			<h3>
			Please select the correct file
			</h3>
			<div>
			<input type="file" class="upload-input" />
				<a href='/Upload'>
				<button class="btn btn-success" OnClick={Up()}>
				Upload!
				</button></a>
			</div>
		</div>
	);
	}


export default Scan;
