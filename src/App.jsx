import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import DashboardExample from "./Components/Dashboard/Dashboard";
import ChatPage from "./Components/Chat/Chat";
import Demandes from "./Components/Demandes/Demandes";
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
      <Routes>
        <Route path="/admin" element={<DashboardExample />} />
        <Route path="/admin/chat" element={<ChatPage />} />
        <Route path="/admin/demandes" element={<Demandes />} />
        <Route path="/admin/accreditations" element={<AccreditationsPage />} />
        <Route path="/admin/rapports" element={<Rapports />} />
        <Route path="/admin/profil" element={<ProfilePage />} />
        <Route path="/admin/statistiques" element={<StatisticsPage />} />
        <Route path="/admin/demandes/:id" element={<AccessRequestPage />} />
        <Route path="/admin/accreditations/:id" element={<DeliveryProcess />} />
      </Routes>
    </div>
  );
}

export default App;
