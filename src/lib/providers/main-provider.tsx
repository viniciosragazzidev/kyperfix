import React from "react";
import { ThemeProvider } from "./theme-provider";

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme=""
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
};

export default MainProvider;
