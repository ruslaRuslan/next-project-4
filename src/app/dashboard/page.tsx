import DashboardComponent from "@/components/DashboardComponent";
import SixMenuMyAccount from "@/components/SixMenuMyAccount";
import { Container } from "@mui/material";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <Container>
        <SixMenuMyAccount />
        <DashboardComponent />
      </Container>
    </>
  );
};

export default Dashboard;
