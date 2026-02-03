import React, { useState } from "react";

export default function TechnicianProfile({ onLogout }) {
  const [techData, setTechData] = useState({
    name: "John Doe",
    email: "john.tech@repairshop.com",
    specialty: "Mobile Hardware",
    joined: "2023-05-12"
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    alert("Information Updated Successfully!");
    // In a real app, you'd fetch/patch to your API here
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Technician Account</h2>
      <p style={styles.subtitle}>Manage your profile and system access</p>

      <div style={styles.profileCard}>
        <div style={styles.field}>
          <label style={styles.label}>Full Name</label>
          {isEditing ? (
            <input 
              style={styles.input} 
              value={techData.name} 
              onChange={(e) => setTechData({...techData, name: e.target.value})}
            />
          ) : (
            <p style={styles.text}>{techData.name}</p>
          )}
        </div>

        <div style={styles.field}>
          <label style={styles.label}>Specialty</label>
          <p style={styles.text}>{techData.specialty}</p>
        </div>

        <div style={styles.buttonGroup}>
          {isEditing ? (
            <button style={styles.saveBtn} onClick={handleSave}>Save Changes</button>
          ) : (
            <button style={styles.editBtn} onClick={() => setIsEditing(true)}>Edit Information</button>
          )}
          
          <hr style={styles.hr} />
          
          <button style={styles.logoutBtn} onClick={onLogout}>
            Logout & End Session
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { maxWidth: "600px", margin: "0 auto" },
  title: { fontSize: "24px", color: "#1e293b", marginBottom: "4px" },
  subtitle: { color: "#64748b", marginBottom: "30px" },
  profileCard: { border: "1px solid #e2e8f0", padding: "24px", borderRadius: "12px" },
  field: { marginBottom: "20px" },
  label: { display: "block", fontSize: "14px", fontWeight: "600", color: "#64748b", marginBottom: "4px" },
  text: { fontSize: "16px", color: "#1e293b", margin: 0 },
  input: { width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #cbd5e1" },
  buttonGroup: { marginTop: "30px" },
  editBtn: { width: "100%", padding: "10px", background: "#38bdf8", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "600" },
  saveBtn: { width: "100%", padding: "10px", background: "#16a34a", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "600" },
  logoutBtn: { width: "100%", padding: "10px", background: "transparent", color: "#ef4444", border: "1px solid #ef4444", borderRadius: "6px", cursor: "pointer", fontWeight: "600" },
  hr: { margin: "20px 0", border: "0", borderTop: "1px solid #e2e8f0" }
};