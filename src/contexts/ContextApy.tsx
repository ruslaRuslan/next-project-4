"use client";
import { createContext } from "react";

export const ContextApy = createContext("");

const ContextApyProvider = ({ children }: any) => {
  return <ContextApy.Provider value={""}>{children}</ContextApy.Provider>;
};

export default ContextApyProvider;
