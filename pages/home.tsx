import { HomeHeader } from "../components/Layout/HomeHeader/HomeHeader";
import { MotivationalQuotes } from "../otherPages/home/MotivationalQuotes/MotivationalQuotes";
import { FranchiseOptions } from "../otherPages/home/FranchiseOptions/FranchiseOptions";
import { AboutFranchising } from "../otherPages/home/AboutFranchising/AboutFranchising";
import { Feedbacks } from "../components/Feedbacks/Feedbacks";
import { OurPartners } from "../otherPages/home/OurPartners/OurPartners";
import { Services } from "../otherPages/home/Services/Services";
import { Box } from "@mui/material";
import React, { FC } from "react";
import Head from "next/head";

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Positive Reset Mental Health Clinic - Call Today</title>
        <meta
          name="description"
          content="POSITIVE RESET is a successful franchise company that operates Mental Health Clinics across the United States. We provide a professional system with a proven track record of financial success and positive treatment outcomes. Call us today at 732-955-4141."
        />
        <meta
          name="description"
          content="reset, positive reset, mental health, wellness, therapy, healing, personal growth, self-improvement, well-being, mind-body balance, positive mindset, emotional well-being, stress management, self-care"
        />
      </Head>
      <HomeHeader />
      <Box>
        <Services />
        <MotivationalQuotes />
        <Feedbacks color={"#fff"} />
        <FranchiseOptions />
        <AboutFranchising />
        <OurPartners />
      </Box>
    </>
  );
};

export default Home;
