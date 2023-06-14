import { Container } from "../otherPages/contactUs/styled";
import { ContactInfo } from "../otherPages/contactUs/ContactInfo/ContactInfo";
import { ContactForm } from "../otherPages/contactUs/ContactForm/ContactForm";
import { OtherHeader } from "../components/Layout/OtherHeader/OtherHeader";
import Head from "next/head";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>
          Positive Reset Mental Health Clinic - Call Today | Contact Us
        </title>
        <meta name="description" content="CONTACT INFO" />
      </Head>
      <OtherHeader />
      <Container>
        <ContactForm />
        <ContactInfo />
      </Container>
    </>
  );
};

export default ContactUs;
