import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { login } from "../APIposts";
import {useNavigate} from "react-router-dom";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const validate= ()=>{
    if(email===""){
      return false;
    }
    if(password===""){
      return false;
    }
    return true;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {email,password} = values;
    if(validate()){
        const {data} = await login({email,password});
        if(data.status===false){
          console.log(data.msg);
        }
        else{
          console.log(data.msg);
          navigate("/Home");
        }
    }
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-card card border  p-4">
      <div className="card border border-primary">
        <div className="card-header bg-primary text-white text-center">
          Login
        </div>
        <div className="card-body bg-gray">
          <Form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
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

            <Button variant="primary" type="submit">
              Sign in
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
