import React from "react";
import { Context } from "./Context";
import { useState } from "react";
import { faker } from "@faker-js/faker";

export function ContextProvider({ children }) {
  return (
    <Context.Provider
      value={{}}
    >
      {children}
    </Context.Provider>
  );
}
