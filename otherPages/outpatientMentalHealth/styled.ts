import { styled, Box } from "@mui/material";

export const Main = styled(Box)(() => {
  return {};
});

export const WrapperHeader = styled(Box)(() => {
  return {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: 300,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    marginBottom: 70,
  };
});

export const TitleHeader = styled("h2")(() => {
  return {
    display: "flex",
    justifyContent: "center",
    color: "#3498db",
    margin: 0,
    fontSize: 26,
  };
});

export const Wrapper = styled(Box)(() => {
  return {
    width: "100%",
    maxWidth: 1300,
    margin: "0 auto",
    paddingBottom: 35,
  };
});

export const Block = styled(Box)(() => {
  return {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 60,

    "@media (max-width: 1090px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  };
});

export const Img = styled("img")(() => {
  return {
    width: "100%",
    maxWidth: 630,
  };
});

export const WrapperBlock = styled(Box)(() => {
  return {
    width: "100%",
    maxWidth: 620,
  };
});

export const Title = styled("h2")(() => {
  return {
    display: "flex",
    color: "#3498db",
    margin: 0,
    fontSize: 26,
  };
});

export const Text = styled("p")(() => {
  return {
    fontSize: 16,
    lineHeight: "26px",
    color: "#959595",
  };
});
