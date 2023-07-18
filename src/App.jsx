import React from "react";
import { Router, Link } from "@reach/router";
import Header from "/src/components/Header/Header";
import DashboardExample from "/src/components/Dashboard/Dashboard";
import ChatPage from "/src/components/Chat/Chat";
import Demandes from "/src/components/Demandes/Demandes";
import AccreditationsPage from "./Components/Accreditations/Accreditations";
import Rapports from "./Components/Rapports/Rapports";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <DashboardExample path="/" />
        <ChatPage path="/chat" />
        <Demandes path="/demandes" />
        <AccreditationsPage path="/accreditations" />
        <Rapports path="/rapports" />
      </Router>
    </div>
  );
}

export default App;
