import withLayoutBasic from "@/libs/components/layout/layoutBasic";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";

const PropertyDetail: NextPage = () => {
  console.log("PROPERTYLIST COMPONENT - PAGES ROUTER");

  return (
    <>
      <Container>PROPERTY Detail</Container>
    </>
  );
};

export default withLayoutBasic(PropertyDetail);
