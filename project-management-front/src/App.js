import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import { Route, Routes } from "react-router-dom";
import ClientDetails from "./pages/ClientDetails";

function App(props) {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home type="home" />} />
        <Route path=":id" element={<ProjectDetails type="project-details" />} />
        <Route path=":id" element={<ClientDetails type="client-details" />} />
      </Routes>
    </div>
  );
}

export default App;
