import React from "react";
import ContextApyProvider from "./contexts/ContextApy";
import ReduxProvider from "./store/redux-provider";

const Providers = ({ children }: { children: any }) => {
  return (
    <>
      <ReduxProvider>
        <ContextApyProvider>{children}</ContextApyProvider>
      </ReduxProvider>
    </>
  );
};

export default Providers;
