import { useState } from "react";

const alertsData = [
  {
    id: 1,
    title: "Large Public Gathering Reported",
    location: "Prayagraj, Uttar Pradesh",
    category: "Crowd Density",
    risk: "HIGH",
    confidence: 86,
    time: "10 minutes ago",
    status: "Reported",
  },
  {
    id: 2,
    title: "Heavy Traffic Near Major Road",
    location: "Lucknow, Uttar Pradesh",
    category: "Traffic",
    risk: "MODERATE",
    confidence: 78,
    time: "25 minutes ago",
    status: "Reported",
  },
  {
    id: 3,
    title: "Public Event Scheduled",
    location: "Delhi",
    category: "Public Event",
    risk: "LOW",
    confidence: 91,
    time: "1 hour ago",
    status: "Predicted Risk",
  },
];

function Alerts() {
  const [riskFilter, setRiskFilter] = useState("ALL");
  const [selectedAlert, setSelectedAlert] = useState(null);

  const filteredAlerts = alertsData.filter((alert) => {
    if (riskFilter === "ALL") {
      return true;
    }

    return alert.risk === riskFilter;
  });


  if (selectedAlert) {
  return (
    <div className="alerts-page">
      <button
        className="back-button"
        onClick={() => setSelectedAlert(null)}
      >
        ← Back to Alerts
      </button>

      <div className="news-detail-card">
        <div className="news-card-top">
          <span
            className={`risk-badge ${selectedAlert.risk.toLowerCase()}`}
          >
            {selectedAlert.risk}
          </span>

          <span className="news-time">
            {selectedAlert.time}
          </span>
        </div>

        <h2>{selectedAlert.title}</h2>

        <div className="news-detail-info">
          <p>
            <strong>Location:</strong>{" "}
            {selectedAlert.location}
          </p>

          <p>
            <strong>Category:</strong>{" "}
            {selectedAlert.category}
          </p>

          <p>
            <strong>Confidence:</strong>{" "}
            {selectedAlert.confidence}%
          </p>

          <p>
            <strong>Status:</strong>{" "}
            {selectedAlert.status}
          </p>

          <p>
            <strong>Time:</strong>{" "}
            {selectedAlert.time}
          </p>
        </div>

        <div className="risk-information">
          <h3>Alert Information</h3>

          <p>
            This alert is based on demo public-safety
            information for dashboard testing.
          </p>

          <span>DEMO DATA — NOT LIVE</span>
        </div>
      </div>
    </div>
  );
}


  return (
    <div className="alerts-page">
      <div className="alerts-header">
        <div>
          <h1>Safety Alerts</h1>
          <p>
            Monitor important public-safety alerts across India.
          </p>
        </div>

        <div className="demo-badge">
          DEMO DATA — NOT LIVE
        </div>
      </div>

      <div className="alerts-filter">
        <label htmlFor="risk-filter">
          Risk Level:
        </label>

        <select
          id="risk-filter"
          value={riskFilter}
          onChange={(e) => setRiskFilter(e.target.value)}
        >
          <option value="ALL">All Risks</option>
          <option value="HIGH">High</option>
          <option value="MODERATE">Moderate</option>
          <option value="LOW">Low</option>
        </select>
      </div>

      <div className="alerts-list">
        {filteredAlerts.map((alert) => (
         <div
        className="alert-card"
         key={alert.id}
          onClick={() => setSelectedAlert(alert)}
>
            <h2>{alert.title}</h2>

            <p>📍 {alert.location}</p>

            <p>🏷️ {alert.category}</p>

            <span
              className={`alert-risk ${alert.risk.toLowerCase()}`}
            >
              {alert.risk}
            </span>

            <p>
              Confidence: {alert.confidence}%
            </p>

            <p>
              Time: {alert.time}
            </p>

            <p>
              Status: {alert.status}
            </p>
          </div>
        ))}
      </div>


      {filteredAlerts.length === 0 && (
        <p>No alerts found.</p>
      )}
    </div>
  );
}

export default Alerts;