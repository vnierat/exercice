import React from "react";
import ReadContext from "./components/ReadContext";
import { AppProvider } from "./context/context";

function App() {
  return (
    <AppProvider>
      <ReadContext />
    </AppProvider>
  );
}

export default App;
