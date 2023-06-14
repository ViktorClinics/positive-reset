import {
  Container,
  Title,
  WrapperHeader,
  Info,
  Post,
  TextWithWidth,
  InfoWithWidth,
  TitleWithWidth,
  BoxText,
} from "../otherPages/rates/style";

import Head from "next/head";
import IMGHeader from "../public/Price02.jpg";
import IMGOne from "../public/NoSurprisesAAct2022.png";
import IMGTwo from "../public/free-online-therapy-versus-paid-counseling_1320W-JW-1.jpg";
import IMGThree from "../public/AdobeStock_132940591-1.jpeg";
import IMGFour from "../public/Medical-record_-web.jpg";
import IMGFive from "../public/Demand-for-Payment-Letter.jpg";
import React from "react";
import { OtherHeader } from "../components/Layout/OtherHeader/OtherHeader";
import { Box } from "@mui/material";
import Image from "next/image";
import { RatesSurprise } from "../otherPages/rates/RatesSurprise/RatesSurprise";
import { Feedbacks } from "../components/Feedbacks/Feedbacks";

const Rates = () => {
  return (
    <>
      <Head>
        <title> Positive Reset Mental Health Clinic - Call Today | Rates</title>
      </Head>
      <OtherHeader />
      <WrapperHeader
        style={{
          backgroundImage: `url(${IMGHeader.src})`,
        }}
      >
        <Title>NO SURPRISE ACT/RATES</Title>
      </WrapperHeader>
      <Container>
        <Post>
          <Box sx={{ width: 252, height: 256 }}>
            <Image
              id="image"
              src={IMGOne}
              alt="ENDING SURPRISE MEDICAL BILLS"
              title="ENDING SURPRISE MEDICAL BILLS"
            />
          </Box>
          <InfoWithWidth>
            <Box>
              <TitleWithWidth>ENDING SURPRISE MEDICAL BILLS</TitleWithWidth>
              <TextWithWidth>
                SEE HOW NEW RULES HELP PROTECT PEOPLE FROM SURPRISE MEDICAL
                BILLS AND REMOVE CONSUMERS FROM PAYMENT DISPUTES BETWEEN A
                PROVIDER OR HEALTH CARE FACILITY AND THEIR HEALTH PLAN.
              </TextWithWidth>
            </Box>
            <RatesSurprise />
          </InfoWithWidth>
        </Post>
        <Post>
          <Box>
            <Image
              id="image"
              src={IMGTwo}
              alt="COUNSELING/ THERAPY (40 – 45 MIN)"
              title="COUNSELING/ THERAPY (40 – 45 MIN)"
            />
          </Box>
          <Info>
            <Title>COUNSELING/ THERAPY (40 – 45 MIN)</Title>
            <BoxText>
              <ul style={{ paddingLeft: 20 }}>
                <li>Mental Health Comprehensive Assessment – $150</li>
                <li>Follow ups – $125</li>
                <li>Group Counseling – $50 per session</li>
                <li>IOP – $250 per 3 hours per day</li>
                <li>Please call for Discounted Rates</li>
              </ul>
            </BoxText>
          </Info>
        </Post>
        <Post>
          <Info>
            <Title>MEDICATION MANAGEMENT</Title>
            <BoxText>
              <ul style={{ paddingLeft: 20 }}>
                <li>Psychiatric Intake – $290</li>
                <li>Follow ups – $150</li>
                <li>Please call for Discounted Rates</li>
              </ul>
            </BoxText>
          </Info>
          <Box>
            <Image
              id="image"
              src={IMGThree}
              alt="MEDICATION MANAGEMENT"
              title="MEDICATION MANAGEMENT"
            />
          </Box>
        </Post>
        <Post>
          <Box>
            <Image
              id="image"
              src={IMGFour}
              alt="MEDICAL RECORDS"
              title="MEDICAL RECORDS"
            />
          </Box>
          <Info>
            <Title>MEDICAL RECORDS</Title>
            <BoxText>
              <ul style={{ paddingLeft: 20 }}>
                <li>Copy or print out – $1 per page</li>
                <li>
                  Combination of records or records summary – $25 minimum plus
                  TBD by office manager based on the amount of records and
                  pages.
                </li>
              </ul>
            </BoxText>
          </Info>
        </Post>
        <Post>
          <Info>
            <Title>LETTER TO ORGANIZATIONS</Title>
            <BoxText>
              <ul style={{ paddingLeft: 20 }}>
                <li>Excuse letter for school – Free</li>
                <li>
                  Letter from the office – Please call the office: 732-955-4141
                </li>
                <li>Please call for Discounted Rates</li>
                <li>Letter from the counselor – $80</li>
                <li>Letter from the doctor, APN or PA – $120</li>
              </ul>
            </BoxText>
          </Info>
          <Box>
            <Image
              id="image"
              src={IMGFive}
              alt="LETTER TO ORGANIZATIONS"
              title="LETTER TO ORGANIZATIONS"
            />
          </Box>
        </Post>
        <Post>
          <TextWithWidth sx={{ fontSize: 20 }}>
            *No show or last than 24 hours cancellation fee – $60
            <br />
            *All service prices shall be disclosed to the patient and agreed by
            patient before the services started.
            <br />
            *All payments shall be made prior to the services.
            <br />
            *We accept Medicaid, Medicare and all Major medical Insurances.
            <br />
            *If the the service has been rendered the payment is final.
          </TextWithWidth>
        </Post>
      </Container>
      <Feedbacks />
    </>
  );
};

export default Rates;
