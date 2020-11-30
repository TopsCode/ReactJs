import React from 'react';
import  App  from "../components/App";
import {
   
   FormGroup,
   FormControl
 } from "react-bootstrap";



const formValid = ({ formErrors, ...rest }) => {
  let valid = true;
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });
}

class Login extends React.Component {
	constructor(props) {
    super(props);

	this.state = {
	      firstName: null,
	      formErrors: {
	        firstName: ""
	      }
	    };
	  }
	handleChange = e => {
	    e.preventDefault();
	    const { name, value } = e.target;
	    let formErrors = { ...this.state.formErrors };
	    // alert(name);
	    switch (name) {
	      case "firstName":
	        formErrors.firstName =
	          value.length < 3 ? "minimum 3 characaters required" : "";
	        break;
	    }
	    // console.log(formErrors.firstName);
	     this.setState({ formErrors, [name]: value }, () => console.log(this.state));
	}  
   render() {
   	const { formErrors } = this.state;
      return (
         <div>
            <App/>
         	<h1>Login</h1>
            <form onSubmit={this.handleConfirmationSubmit}>
        {/* <FormGroup controlId="confirmationCode" bsSize="large">
          <FormControl
            autoFocus
            type="tel"
            value="a"
          />
          </FormGroup>
          */}

          <div class="row">
  <div class="col-md-3"></div>
         <div class="col-md-6">
         <div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  
  <div class="card-body">

  			<div className="row form-group firstName">
  				<div class="col-md-3">
              		<label htmlFor="firstName">First Name</label>
              	</div>	
	              <div class="col-md-9">
	              <input
	                className='form-control {formErrors.firstName.length > 0 ? "error" : null} '
	                placeholder="First Name"
	                type="text"
	                name="firstName"
	                noValidate
	                onChange={this.handleChange}
	              />
	              
	              {formErrors.firstName.length > 0 && (
	                <span className="errorMessage">{formErrors.firstName}</span>
	              )}
	              </div>
            </div>

         <div class="row form-group">
            <div class="col-md-3">
               <label>User Name</label>
            </div>
            <div class="col-md-9">
                 <input type="text" name="UserName" class="form-control"></input>
            </div>
         </div>
         <div class="row form-group">
            <div class="col-md-3">
               <label>Password</label>
            </div>
            <div class="col-md-9">
                 <input type="text" class="form-control"></input>
            </div>
         </div>
         <div class="row form-group">
            <div class="col-md-3">
               
            </div>
            <div class="col-md-9">
                  <button class="btn btn-primary" bsStyle="primary" bsSize="xsmall"> test </button>
                  <button>Default</button>
            </div>
         </div>
   </div>
   <div class="card-footer text-muted">
      2 days ago
   </div>
   </div>
         </div>
  </div>



          
      </form>
         </div>
      )
   }
}
export default Login;
