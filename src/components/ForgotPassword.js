import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center">Reset Password</h2>
          <Form>
            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control type="email" id="email" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Reset Password
            </Button>
          </Form>
          <div className="text-center mt-2">
            <Link to="/login">Log In</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="text-center mt-3">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
};

export default ForgotPassword;
