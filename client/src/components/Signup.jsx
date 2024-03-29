import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { register } from "../APIposts";

function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });
  const validate=()=>{
    if(values.name===""){
      return false;
    }
    if(values.password===""){
      return false;
    }
    if(values.email===""){
      return false;
    }
    if(values.password.length<8){
      return false;
    }
    return true;
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    const{name,email,password,mobile}=values;
    if(validate()){
      const {data} = await register({name, password, email, mobile});
      if(data.status===false){
        console.log(data.msg);
      }
      else{
        console.log(data.msg);
      }
    }

  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="signup-card card border  p-4">
      <div className="card border border-primary">
        <div className="card-header bg-primary text-white text-center">
          Sign up
        </div>
        <div className="card-body bg-gray">
          <Form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                id="name"
                name="name"
                placeholder="Enter name"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone no.</Form.Label>
              <Form.Control
                type="tel"
                placeholder="phone number"
                id="mobile"
                name="mobile"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign up
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
