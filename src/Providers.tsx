import React from "react";
import ContextApyProvider from "./contexts/ContextApy";

const Providers = ({ children }: { children: any }) => {
  return (
    <>
      <ContextApyProvider>{children}</ContextApyProvider>
    </>
  );
};

export default Providers;
