import React from "react";
import "./Contact.css";
import { ContactInfo } from "../Components/ContactInfo";
import { Form } from "react-bootstrap";

function Contact() {
  return (
    <div>
      <div className="contact-page">
        <header className="mt-5">
          <div className="container h-100 d-flex align-items-center justify-content-center">
            <h1 className="text-light ">ارتباط با ما</h1>
          </div>
        </header>
        <div className="container contact">
          <div className="row">
            <div className="mx-auto col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5">
              <ContactInfo />
            </div>

            <div className="col-lg-6 d-flex justify-content-center mb-5">
              <Form>
                <Form.Group className="row mb-1">
                  <div className="col-lg-6">
                    <Form.Label htmlFor="first-name">نام</Form.Label>
                    <Form.Control type="text" id="first-name" />
                  </div>

                  <div className="col-lg-6">
                    <Form.Label htmlFor="last-name">نام خانوادگی</Form.Label>
                    <Form.Control type="text" id="last-name" />
                  </div>
                </Form.Group>

                <Form.Group className="row mb-1">
                  <div className="col-lg-6">
                    <Form.Label htmlFor="email-address">ایمیل</Form.Label>
                    <Form.Control type="email" id="email-address" />
                  </div>

                  <div className="col-lg-6">
                    <Form.Label htmlFor="phone-number">شماره تلفن</Form.Label>
                    <Form.Control type="tel" id="phone-number" />
                  </div>
                </Form.Group>

                <Form.Group className="row mb-1">
                  <div className="col-lg-6">
                    <Form.Label htmlFor="first-name">نام</Form.Label>
                    <Form.Control type="text" id="first-name" />
                  </div>

                  <div className="col-lg-6">
                    <Form.Label htmlFor="date">تاریخ</Form.Label>
                    <Form.Control type="date" id="date" />
                  </div>
                </Form.Group>

                <Form.Group className="row mb-1">
                  <Form.Label htmlFor="comments">پیامک</Form.Label>
                  <Form.Control type="textarea" id="comments" />
                </Form.Group>
                <button className="btn btn-success btn-lg mt-3" type="submit">
                  فرستادن
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
