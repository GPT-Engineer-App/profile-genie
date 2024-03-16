import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useColorMode } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Router>
      <Header toggleColorMode={toggleColorMode} colorMode={colorMode} />
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
