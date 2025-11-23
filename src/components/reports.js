import React, { useState } from "react";

const initialOfficers = ["Officer A", "Officer B", "Officer C"];
const initialStates = ["Open", "In Progress", "Closed"];

export default function Reports() {
  const [reports, setReports] = useState([]);
  const [newReportOfficer, setNewReportOfficer] = useState(initialOfficers[0]);
  const [newReportState, setNewReportState] = useState(initialStates[0]);

  // Add a new report
  const addReport = () => {
    const newReport = {
      id: reports.length + 1,
      officer: newReportOfficer,
      state: newReportState
    };
    setReports([...reports, newReport]);
  };

  // Update officer or state for a report
  const updateReport = (id, field, value) => {
    setReports(reports.map(report =>
      report.id === id ? { ...report, [field]: value } : report
    ));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Reports Table</h2>
      <div style={{ marginBottom: "20px" }}>
        <label>Officer:
          <select value={newReportOfficer} onChange={e => setNewReportOfficer(e.target.value)}>
            {initialOfficers.map(officer => (
              <option key={officer} value={officer}>{officer}</option>
            ))}
          </select>
        </label>
        <label style={{ marginLeft: "20px" }}>State:
          <select value={newReportState} onChange={e => setNewReportState(e.target.value)}>
            {initialStates.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </label>
        <button style={{ marginLeft: "20px" }} onClick={addReport}>Add Report</button>
      </div>
      <table border="1" cellPadding="8" style={{ width: "100%", background: "#f0f8ff" }}>
        <thead style={{ background: "#1976d2", color: "white" }}>
          <tr>
            <th>ID</th>
            <th>Assigned Officer</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {reports.map(report => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>
                <select value={report.officer} onChange={e => updateReport(report.id, "officer", e.target.value)}>
                  {initialOfficers.map(officer => (
                    <option key={officer} value={officer}>{officer}</option>
                  ))}
                </select>
              </td>
              <td>
                <select value={report.state} onChange={e => updateReport(report.id, "state", e.target.value)}>
                  {initialStates.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}