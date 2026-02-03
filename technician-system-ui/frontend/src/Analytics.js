import React from "react";

export default function Analytics() {
  const stats = [
    { label: "Total Repairs", value: "124", trend: "+12%" },
    { label: "Revenue", value: "$4,250", trend: "+8%" },
    { label: "Avg. Turnaround", value: "1.2 Days", trend: "-5%" },
  ];

  return (
    <div>
      <h2 style={styles.title}>Weekly/Monthly Reports</h2>
      
      <div style={styles.grid}>
        {stats.map((stat, i) => (
          <div key={i} style={styles.statCard}>
            <span style={styles.label}>{stat.label}</span>
            <div style={styles.value}>{stat.value}</div>
            <span style={{ color: stat.trend.startsWith('+') ? 'green' : 'red' }}>
              {stat.trend} from last month
            </span>
          </div>
        ))}
      </div>

      <div style={styles.chartPlaceholder}>
        [Weekly Repair Volume Chart Visualization]
      </div>
    </div>
  );
}

const styles = {
  grid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginTop: "20px" },
  statCard: { padding: "20px", border: "1px solid #e2e8f0", borderRadius: "10px", textAlign: "center" },
  label: { color: "#64748b", fontSize: "14px" },
  value: { fontSize: "28px", fontWeight: "bold", margin: "10px 0" },
  chartPlaceholder: { marginTop: "30px", height: "200px", background: "#f8fafc", border: "2px dashed #cbd5e1", display: "flex", alignItems: "center", justifyContent: "center", color: "#94a3b8" }
};