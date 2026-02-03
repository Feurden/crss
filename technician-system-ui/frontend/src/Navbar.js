import React from "react";

export default function Navbar({ active, setActive }) {
  const menuItems = ["stock", "repairs", "analytics"];

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>TechRepair</div>

      <ul style={styles.navList}>
        {menuItems.map((item) => (
          <li
            key={item}
            style={{
              ...styles.navItem,
              ...(active === item ? styles.navActive : {}),
            }}
            onClick={() => setActive(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </li>
        ))}
      </ul>

      {/* Clicking here now sets active to 'profile' per the flowchart */}
      <div 
        style={styles.profile} 
        onClick={() => setActive("profile")}
      >
        <div style={styles.avatar}>T</div>
        <span style={{ color: active === "profile" ? "#38bdf8" : "#fff" }}>
          Technician
        </span>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    height: "64px",
    background: "#0f172a",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 30px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  },
  logo: { fontSize: "20px", fontWeight: "700" },
  navList: { 
    listStyle: "none", 
    display: "flex", 
    gap: "28px", 
    margin: 0, 
    padding: 0 
  },
  navItem: { 
    cursor: "pointer", 
    color: "#cbd5f5", 
    fontWeight: "500", 
    paddingBottom: "4px",
    transition: "0.3s"
  },
  navActive: { 
    color: "#ffffff", 
    borderBottom: "2px solid #38bdf8" 
  },
  profile: { 
    display: "flex", 
    alignItems: "center", 
    gap: "10px",
    cursor: "pointer"
  },
  avatar: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    background: "#38bdf8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#0f172a",
    fontWeight: "bold"
  },
};