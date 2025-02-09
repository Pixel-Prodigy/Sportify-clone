import React from "react";
import { Context } from "./Context";
import { useState } from "react";
import { faker } from "@faker-js/faker";

export function ContextProvider({ children }) {
  const [scrolled, setScrolled] = useState(false);
  return (
    <Context.Provider
      value={{ scrolled, setScrolled,}}
    >
      {children}
    </Context.Provider>
  );
}
