const sourcesData = [
  {
    id: 1,
    name: "Demo News Source",
    type: "Public News",
    status: "Demo",
    description:
      "Demo news information used for testing the dashboard.",
  },
  {
    id: 2,
    name: "Public Information",
    type: "Public Source",
    status: "Demo",
    description:
      "Public information used to demonstrate safety monitoring.",
  },
  {
    id: 3,
    name: "Government Information",
    type: "Government Source",
    status: "Planned",
    description:
      "Government and official public information sources will be connected later.",
  },
];

function Sources() {
  return (
    <div className="sources-page">
      <div className="sources-header">
        <div>
          <h1>Information Sources</h1>
          <p>
            Sources used to support public-safety information
            in the dashboard.
          </p>
        </div>

        <div className="demo-badge">
          DEMO DATA — NOT LIVE
        </div>
      </div>

      <div className="sources-list">
        {sourcesData.map((source) => (
          <div className="source-card" key={source.id}>
            <h2>{source.name}</h2>

            <p>
              <strong>Type:</strong> {source.type}
            </p>

           <span className={`source-status ${source.status.toLowerCase()}`}>
              {source.status}
           </span>

            <p>{source.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sources;