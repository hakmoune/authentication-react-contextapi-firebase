import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Signup (Create an account)</h2>
          <Form>
            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control type="email" id="email" />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control type="password" id="password" />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="password-confirmation">
                Password Confirmation
              </Form.Label>
              <Form.Control type="password" id="password-confirmation" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 mt-3">
              Sign up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log in</Link>
      </div>
    </>
  );
};

export default Signup;
