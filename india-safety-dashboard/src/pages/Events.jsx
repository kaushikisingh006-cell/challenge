import { useState } from "react";

const eventsData = [
  {
    id: 1,
    title: "Large Public Gathering",
    location: "Prayagraj, Uttar Pradesh",
    category: "Crowd Density",
    risk: "HIGH",
    time: "10 minutes ago",
  },
  {
    id: 2,
    title: "Heavy Traffic Near Major Road",
    location: "Lucknow, Uttar Pradesh",
    category: "Traffic",
    risk: "MODERATE",
    time: "25 minutes ago",
  },
  {
    id: 3,
    title: "Public Event Scheduled",
    location: "Delhi",
    category: "Public Event",
    risk: "LOW",
    time: "1 hour ago",
  },
];

function Events({ searchTerm = "" }) {
  const [riskFilter, setRiskFilter] = useState("ALL");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = eventsData.filter((event) => {
    const search = searchTerm.toLowerCase().trim();

    const matchesSearch =
      event.title.toLowerCase().includes(search) ||
      event.location.toLowerCase().includes(search) ||
      event.category.toLowerCase().includes(search);

    const matchesRisk =
      riskFilter === "ALL" || event.risk === riskFilter;

    return matchesSearch && matchesRisk;
  });

  if (selectedEvent) {
    return (
      <div className="events-page">
        <button
          className="back-button"
          onClick={() => setSelectedEvent(null)}
        >
          ← Back to Events
        </button>

        <div className="news-detail-card">
          <div className="news-card-top">
            <span
              className={`risk-badge ${selectedEvent.risk.toLowerCase()}`}
            >
              {selectedEvent.risk}
            </span>

            <span className="news-time">
              {selectedEvent.time}
            </span>
          </div>

          <h2>{selectedEvent.title}</h2>

          <div className="news-detail-info">
            <p>
              <strong>Location:</strong>{" "}
              {selectedEvent.location}
            </p>

            <p>
              <strong>Category:</strong>{" "}
              {selectedEvent.category}
            </p>

            <p>
              <strong>Risk Level:</strong>{" "}
              {selectedEvent.risk}
            </p>

            <p>
              <strong>Time:</strong>{" "}
              {selectedEvent.time}
            </p>
          </div>

          <div className="risk-information">
            <h3>Event Information</h3>

            <p>
              This event is based on demo public-safety
              information for dashboard testing.
            </p>

            <span>DEMO DATA — NOT LIVE</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="events-page">
      <div className="events-header">
        <div className="events-header-left">
          <h1>Public Safety Events</h1>

          <p>
            Monitor public-safety related events across India.
          </p>

          <select
            value={riskFilter}
            onChange={(e) => setRiskFilter(e.target.value)}
            className="event-filter"
          >
            <option value="ALL">All Risks</option>
            <option value="LOW">Low</option>
            <option value="MODERATE">Moderate</option>
            <option value="HIGH">High</option>
          </select>
        </div>

        <div className="demo-badge">
          DEMO DATA — NOT LIVE
        </div>
      </div>

      <div className="events-list">
        {filteredEvents.map((event) => (
          <div
            className="event-card"
            key={event.id}
            onClick={() => setSelectedEvent(event)}
          >
            <div className="event-top">
              <span
                className={`risk-badge ${event.risk.toLowerCase()}`}
              >
                {event.risk}
              </span>

              <span className="event-time">
                {event.time}
              </span>
            </div>

            <h2>{event.title}</h2>

            <p>📍 {event.location}</p>
            <p>🏷️ {event.category}</p>
          </div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <p className="no-events">
          No events found.
        </p>
      )}
    </div>
  );
}

export default Events;