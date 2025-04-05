import React from "react";
import { ThemeProvider } from "./Providers/ThemeProvider";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider
        attribute={"class"}
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
};  

export default AppProvider;
