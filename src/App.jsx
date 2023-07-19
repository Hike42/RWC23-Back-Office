import React from "react";
import { Router, Link } from "@reach/router";
import Header from "/src/components/Header/Header";
import DashboardExample from "/src/components/Dashboard/Dashboard";
import ChatPage from "/src/components/Chat/Chat";
import Demandes from "/src/components/Demandes/Demandes";
import AccreditationsPage from "./Components/Accreditations/Accreditations";
import Rapports from "./Components/Rapports/Rapports";
import ProfilePage from "./Components/Profil/Profil";
import StatisticsPage from "./Components/Statistics/Statistics";
import AccessRequestPage from "./Components/Demandes/AccessRequestPage";
import DeliveryProcess from "./Components/Accreditations/DeliveryProcess";

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
        <ProfilePage path="/profil" />
        <StatisticsPage path="/statistiques" />
        <AccessRequestPage path="/demandes/:id" />
        <DeliveryProcess path="/accreditations/:id" />
      </Router>
    </div>
  );
}

export default App;
