import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
function Admin() {
  const [values, setValues] = useState({
    eventname: "",
    desc: "",
    date: "",
    place: "",
    eventtype: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { ...values };
    console.log(JSON.stringify(formData));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    // setValues({ ...values, [e.target.name]: e.target.value });
    // const { name, value, type, checked } = e.target;
    // const newValue = type === "radio" ? (checked ? value : "") : value;
    // setValues({ ...values, [name]: newValue });
  };

  return (
    <div className="signup-card card border  p-4">
      <div className="card border border-primary">
        <div className="card-header bg-primary text-white text-center">
          Admin
        </div>
        <div className="card-body bg-gray">
          <Form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label>Event Name</Form.Label>
              <Form.Control
                type="text"
                id="eventname"
                name="eventname"
                placeholder="Enter event name"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Event description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                id="desc"
                name="desc"
                placeholder="Enter event description"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Event date</Form.Label>
              <Form.Control
                type="date"
                placeholder="date"
                id="date"
                name="date"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Event place</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                id="place"
                name="place"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              {/* <Form.Label>Example textarea</Form.Label>
              <Form.Control 
              as="textarea" 
              rows={3} 
              type="text"
                placeholder="Address"
                id="place"
                name="place"
                onChange={(e) => {
                  handleChange(e);
                }}
              /> */}
            </Form.Group>
            <h3>What are you organizing ? </h3>
            <Form.Group className="mb-3">
              <Form.Check // prettier-ignore
                type="radio"
                id="eventtype1"
                name="eventtype"
                label="Event"
                value="Event"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <Form.Check // prettier-ignore
                type="radio"
                id="eventtype2"
                name="eventtype"
                value="Drive"
                label="Drive"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </Form.Group>
            {/* {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Drive"
                  name="type"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="Event"
                  name="type"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))} */}

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Admin;
