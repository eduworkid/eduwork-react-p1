import React, { useState, useEffect } from "react";
import ErrorMessage from "./ErrorMessage";
import { Card, Form, Button } from "react-bootstrap";
import SuccessMessageAlert from "./SuccessMessageAlert";
import messagesId from "../../messages/id";
import NavbarBerita from "../Router/Navbar";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length === 0) {
      setSuccessMessage("Registrasi berhasil!");
      setErrors({});
      setShowSuccessAlert(true);
    } else {
      setSuccessMessage("");
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.username) {
      errors.username = messagesId.usernameRequired;
    }

    if (!data.email) {
      errors.email = messagesId.emailRequired;
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = messagesId.invalidEmail;
    }

    if (!data.password) {
      errors.password = messagesId.passwordRequired;
    } else if (data.password.length < 6) {
      errors.password = messagesId.shortPassword;
    }

    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = messagesId.confirmPasswordMismatch;
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      alert("Ada kesalahan dalam formulir");
    }
  }, [errors]);

  return (
    <>
      <NavbarBerita />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
        }}
      >
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Form Registrasi</Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
                {errors.username && <ErrorMessage message={errors.username} />}
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <ErrorMessage message={errors.email} />}
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <ErrorMessage message={errors.password} />}
              </Form.Group>

              <Form.Group controlId="formConfirmPassword">
                <Form.Label>Konfirmasi Password:</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && (
                  <ErrorMessage message={errors.confirmPassword} />
                )}
              </Form.Group>

              <Button variant="primary" type="submit">
                Registrasi
              </Button>
            </Form>

            <SuccessMessageAlert
              message={successMessage}
              data={formData}
              onClose={() => setShowSuccessAlert(false)}
            />
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Register;
