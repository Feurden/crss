import React, { useEffect, useState } from "react";

export default function RepairTable() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/devices")
      .then(res => res.json())
      .then(data => setDevices(data))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  return (
    <>
      <h1 style={styles.title}>Technician Repair Dashboard</h1>
      <p style={styles.subtitle}>Overview of devices currently under repair</p>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Device</th>
            <th style={styles.th}>Issue</th>
            <th style={styles.th}>Status</th>
          </tr>
        </thead>
        <tbody>
          {devices.length === 0 ? (
            <tr><td colSpan="3" style={styles.empty}>No records found</td></tr>
          ) : (
            devices.map((d, i) => (
              <tr key={i}>
                <td style={styles.td}>{d.model}</td>
                <td style={styles.td}>{d.issue}</td>
                <td style={{ ...styles.td, ...statusStyle(d.status) }}>{d.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}

// Copy your statusStyle and table styles here too...
const styles = {
  title: { fontSize: "26px", color: "#1e293b", margin: 0 },
  subtitle: { marginTop: "6px", marginBottom: "24px", color: "#64748b" },
  table: { width: "100%", borderCollapse: "collapse" },
  th: { background: "#f8fafc", padding: "12px", textAlign: "left", borderBottom: "2px solid #e2e8f0" },
  td: { padding: "12px", borderBottom: "1px solid #e2e8f0" },
  empty: { textAlign: "center", padding: "20px", color: "#94a3b8" }
};

function statusStyle(status) {
  if (status?.toLowerCase() === "completed") return { color: "#16a34a", fontWeight: 600 };
  if (status?.toLowerCase() === "pending") return { color: "#ca8a04", fontWeight: 600 };
  if (status?.toLowerCase() === "in progress") return { color: "#2563eb", fontWeight: 600 };
  return {};
}