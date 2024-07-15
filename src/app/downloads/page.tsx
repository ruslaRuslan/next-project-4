import SixMenuMyAccount from "@/components/SixMenuMyAccount";
import DownloadsComponent from "@/components/DownloadsComponent";

import { Container } from "@mui/material";
import React from "react";

const Downloads = () => {
  return (
    <>
      <Container>
        <SixMenuMyAccount />
        <DownloadsComponent />
      </Container>
    </>
  );
};

export default Downloads;
