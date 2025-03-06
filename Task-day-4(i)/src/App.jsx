import React from "react";
import { ThemeProvider } from "./context/ThemeProvider";
import AllRoutes from "./AllRoutes";

function App() {

  return (
    <ThemeProvider>
      {/* <Theme /> */}
      <AllRoutes />
    </ThemeProvider>
  )
}

export default App;
