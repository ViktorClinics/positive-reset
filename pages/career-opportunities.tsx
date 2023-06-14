import {
  Title,
  WrapperHeader,
  Wrapper,
  Block,
  Text,
  WrapperBlock,
  Button,
  Iframe,
} from "../otherPages/career/style";
import { PersonalForm } from "../otherPages/career/PersonalForm/PersonalForm";
import CareerOpportunitiesInfo from "../components/CareerOpportunitiesInfo";
import { OtherHeader } from "../components/Layout/OtherHeader/OtherHeader";
import IMGHeader from "../public/couple-with-problems02а.jpg";
import IMGTwo from "../public/pexels-lukas-653429-scaled.jpg";
import { Feedbacks } from "../components/Feedbacks/Feedbacks";
import IMGOne from "../public/career.jpg";
import React, { useRef } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import Head from "next/head";

const CareerOpportunities = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>
          Positive Reset Mental Health Clinic - Call Today | Career
          Opportunities
        </title>
        <meta
          name="keywords"
          content="Career opportunities, Job openings, Employment opportunities, Careers, Hiring, Job vacancies, Work with us, Join our team, Job positions, Job application."
        />
        <meta name="description" content="CAREER OPPORTUNITIES" />
        <meta
          name="description2"
          content="GROW WITH THE TEAM THAT PUTS PATIENTS FIRST"
        />
      </Head>
      <OtherHeader />
      <Box>
        <WrapperHeader
          style={{
            backgroundImage: `url(${IMGHeader.src})`,
          }}
        >
          <Title>CAREER OPPORTUNITIES</Title>
        </WrapperHeader>
        <Wrapper>
          <Block>
            <Box>
              <Image
                width={635}
                height={421}
                src={IMGOne}
                id="img"
                alt="GROW WITH THE TEAM THAT PUTS PATIENTS FIRST"
                title="GROW WITH THE TEAM THAT PUTS PATIENTS FIRST"
              />
            </Box>
            <WrapperBlock>
              <Title>GROW WITH THE TEAM THAT PUTS PATIENTS FIRST</Title>
              <Text>
                As an employer, our clinic offers professional opportunities
                that will challenge your abilities, expand your skills, and
                reward your contributions. Ours is a positive work environment
                that encourages both personal and professional growth for every
                employee. A philosophy of mutual respect is fostered; as a
                result, many of our team members have been with us for years.
              </Text>
              <Text>
                Ensuring the safety and well-being of our patients, visitors,
                staff, and communities is our deepest commitment at our clinic.
                As a condition of employment, in our clinic requires all new
                hires to be fully vaccinated for COVID-19, unless there is an
                approved exemption. New hires will be required to have at least
                one dose of the vaccine prior to starting employment, with a
                second dose scheduled, or submit proof of previous vaccination.
              </Text>
              <Text sx={{ fontSize: 20 }}>
                To apply for a position click on the link below:
              </Text>
              <Button onClick={scrollToForm}>APPLY HERE</Button>
            </WrapperBlock>
          </Block>
          <Block>
            <WrapperBlock>
              <CareerOpportunitiesInfo />
            </WrapperBlock>
            <Box>
              <Image
                id="image"
                width={630}
                height={417}
                src={IMGTwo}
                alt="WHO WE ARE"
                title="WHO WE ARE"
              />
            </Box>
          </Block>
          <Block>
            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.836713694201!2d-74.4243125246827!3d40.41246795589985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c5710ac7b9cd%3A0x2a1b05a115f4c381!2s6%20Cornwall%20Ct%20B%2C%20East%20Brunswick%2C%20NJ%2008816!5e0!3m2!1sen!2sus!4v1684616255217!5m2!1sen!2sus"></Iframe>
          </Block>
          <Box sx={{ marginBottom: "65px" }} ref={formRef}>
            <PersonalForm />
          </Box>
        </Wrapper>
        <Feedbacks />
      </Box>
    </>
  );
};

export default CareerOpportunities;
