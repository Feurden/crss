import React, { useState, useEffect } from "react";

export default function Stock() {
  const [inventory, setInventory] = useState([
    { id: 1, item: "iPhone 13 Screen", quantity: 2, minLevel: 5 },
    { id: 2, item: "Samsung S22 Battery", quantity: 15, minLevel: 10 },
    { id: 3, item: "USB-C Charging Port", quantity: 4, minLevel: 8 },
  ]);

  return (
    <div>
      <h2 style={styles.title}>Inventory Management</h2>
      <p style={styles.subtitle}>Check stock levels and manage orders</p>

      <div style={styles.alertContainer}>
        {inventory.filter(item => item.quantity < item.minLevel).map(item => (
          <div key={item.id} style={styles.alert}>
            ⚠️ <strong>Low Stock Alert:</strong> {item.item} is at {item.quantity} units!
          </div>
        ))}
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Item Name</th>
            <th style={styles.th}>Quantity</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td style={styles.td}>{item.item}</td>
              <td style={styles.td}>{item.quantity}</td>
              <td style={styles.td}>
                {item.quantity < item.minLevel ? "Low Stock" : "In Stock"}
              </td>
              <td style={styles.td}>
                <button style={styles.btn}>Order Stock</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  title: { fontSize: "24px", color: "#1e293b" },
  subtitle: { color: "#64748b", marginBottom: "20px" },
  alert: { background: "#fee2e2", color: "#991b1b", padding: "12px", borderRadius: "8px", marginBottom: "10px", border: "1px solid #f87171" },
  table: { width: "100%", borderCollapse: "collapse" },
  th: { textAlign: "left", padding: "12px", borderBottom: "2px solid #e2e8f0", background: "#f8fafc" },
  td: { padding: "12px", borderBottom: "1px solid #e2e8f0" },
  btn: { background: "#0f172a", color: "white", border: "none", padding: "6px 12px", borderRadius: "4px", cursor: "pointer" }
};