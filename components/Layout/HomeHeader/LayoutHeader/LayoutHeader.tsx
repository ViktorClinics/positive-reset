import {
  Contact,
  ContactAndFollow,
  ContactInfo,
  Email,
  Follow,
  FollowInfo,
  Link,
  Tel,
  Title,
  Wrapper,
  WrapperFollow,
  WrapperImg,
  Address,
} from "./styled";
import React, { FC, useEffect, useState } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import IMGPhoneLogo from "../../../../public/white-mobil.png";
import IMGFollowIcon from "../../../../public/white-follow-icon.png";
import IMGFacebook from "../../../../public/facebook-icon.svg";
import IMGLinkedin from "../../../../public/linkedin-icon.svg";
import IMGLocation from "../../../../public/icons8-location-50.png";
import { PRIVATE_DATA } from "../../../../otherPages/privateData";
import LogoImg from "../../../LogoImg/LogoImg";

const ID = "telephoneNumber";

export const LayoutHeader: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [telNum, setTelNum] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [linkFacebook, setLinkFaceBook] = useState<string>("");
  const [linkLinkedin, setLinkLinkedin] = useState<string>("");

  useEffect(() => {
    axios
      .get(
        `https://cdn.contentful.com/spaces/${PRIVATE_DATA.spaseID}/entries?content_type=${ID}&access_token=${PRIVATE_DATA.accessId}`
      )
      .then((response) => {
        setTelNum(
          response.data.items[0].fields.positiveresetTelephoneNumber.content[0]
            .content[0].value
        );
        setEmail(
          response.data.items[0].fields.positiveresetEmail.content[0].content[0]
            .value
        );
        setLinkFaceBook(
          response.data.items[0].fields.facebookLink.content[0].content[0].value
        );
        setLinkLinkedin(
          response.data.items[0].fields.linkedinLink.content[0].content[0].value
        );
        setLocation(
          response.data.items[0].fields.positiveresetAddress.content[0]
            .content[0].value
        );
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <Wrapper>
      <Box>
        <LogoImg />
      </Box>
      <ContactAndFollow>
        <Contact>
          <WrapperImg>
            <Image
              src={IMGPhoneLogo}
              width={25}
              height={42}
              alt="Phone"
              title="Phone"
            />
          </WrapperImg>
          <ContactInfo>
            <Tel>{telNum}</Tel>
            <Email>{email}</Email>
          </ContactInfo>
        </Contact>
        <Contact>
          <WrapperImg>
            <Image src={IMGLocation} width={45} alt="Phone" title="Phone" />
          </WrapperImg>
          <ContactInfo>
            <Address>{location}</Address>
          </ContactInfo>
        </Contact>
        <Follow>
          <WrapperImg>
            <Image
              src={IMGFollowIcon}
              width={0}
              height={50}
              alt="Follow"
              title="Follow"
            />
          </WrapperImg>
          <FollowInfo>
            <Title>Follow Us</Title>
            <WrapperFollow>
              <Link href={linkFacebook} target="_blank">
                <Image
                  src={IMGFacebook}
                  width={12}
                  height={12}
                  alt="Facebook"
                  title="Facebook"
                />
              </Link>
              <Link href={linkLinkedin} target="_blank">
                <Image
                  src={IMGLinkedin}
                  width={12}
                  height={12}
                  alt="Linkedin"
                  title="Linkedin"
                />
              </Link>
            </WrapperFollow>
          </FollowInfo>
        </Follow>
      </ContactAndFollow>
    </Wrapper>
  );
};
