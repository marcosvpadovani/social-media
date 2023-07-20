import React from "react";

import NotificationProvider from "./NotificationContext";
import ThemeProvider from "./ThemeContext";

const OverallContext = ({ children }) => {
  return (
    <ThemeProvider>
      <NotificationProvider>{children}</NotificationProvider>
    </ThemeProvider>
  );
};

export default OverallContext;
