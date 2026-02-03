import React, { useState } from "react";
import Navbar from "./Navbar";
import RepairTable from "./RepairTable";
import Stock from "./Stock";
import Analytics from "./Analytics";
import TechnicianProfile from "./TechnicianProfile";

export default function Dashboard() {
  const [active, setActive] = useState("repairs");

  // Handle Logout (The 'END' state in your flowchart)
  const handleLogout = () => {
    alert("Logging out and ending session...");
    // window.location.href = "/login"; // Redirect logic
  };

  // Switch content based on Navbar selection
  const renderContent = () => {
    switch (active) {
      case "repairs":
        return <RepairTable />;
      case "stock":
        return <Stock />;
      case "analytics":
        return <Analytics />;
      case "profile":
        return <TechnicianProfile onLogout={handleLogout} />;
      default:
        return <RepairTable />;
    }
  };

  return (
    <div style={styles.page}>
      <Navbar active={active} setActive={setActive} />
      
      <div style={styles.contentArea}>
        <div style={styles.card}>
           {renderContent()}
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f1f5f9",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  contentArea: {
    padding: "40px",
    display: "flex",
    justifyContent: "center"
  },
  card: {
    width: "100%",
    maxWidth: "1100px",
    background: "#ffffff",
    borderRadius: "12px",
    padding: "30px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
  }
};