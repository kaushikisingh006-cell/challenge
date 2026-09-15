import { useState } from "react";

const newsData = [
  {
    id: 1,
    title: "Large Public Gathering Reported",
    location: "Prayagraj, Uttar Pradesh",
    category: "Crowd Density",
    risk: "HIGH",
    confidence: 86,
    time: "10 minutes ago",
    source: "Demo News Source",
    description:
      "A large public gathering has been reported in the area.",
  },

  {
    id: 2,
    title: "Heavy Traffic Reported Near Major Road",
    location: "Lucknow, Uttar Pradesh",
    category: "Traffic",
    risk: "MODERATE",
    confidence: 78,
    time: "25 minutes ago",
    source: "Demo News Source",
    description:
      "Heavy traffic and congestion have been reported near a major road.",
  },

  {
    id: 3,
    title: "Public Event Scheduled",
    location: "Delhi",
    category: "Public Event",
    risk: "LOW",
    confidence: 91,
    time: "1 hour ago",
    source: "Demo News Source",
    description:
      "A public event has been scheduled in the monitored area.",
  },

  {
    id: 4,
    title: "Weather-Related Disruption Reported",
    location: "Mumbai, Maharashtra",
    category: "Severe Weather",
    risk: "MODERATE",
    confidence: 82,
    time: "2 hours ago",
    source: "Demo News Source",
    description:
      "Weather conditions have caused temporary disruption in the area.",
  },
];

function NewsIntelligence({ searchTerm = "" }) {
  const [riskFilter, setRiskFilter] = useState("ALL");
  const [categoryFilter, setCategoryFilter] = useState("ALL");
  const [selectedNews, setSelectedNews] = useState(null);

  const filteredNews = newsData.filter((news) => {
  const searchWords = searchTerm
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  const newsText = `
    ${news.title}
    ${news.location}
    ${news.category}
    ${news.description}
  `.toLowerCase();

  const matchesSearch = searchWords.every((word) =>
    newsText.includes(word)
  );

  const matchesRisk =
    riskFilter === "ALL" || news.risk === riskFilter;

  return matchesSearch && matchesRisk;
});

  return (
    <div className="news-page">
       {selectedNews && (
  <div className="news-details-view">
    <button
      className="back-button"
      onClick={() => setSelectedNews(null)}
    >
      ← Back to News
    </button>

    <div className="news-detail-card">
      <div className="news-card-top">
        <span
          className={`risk-badge ${selectedNews.risk.toLowerCase()}`}
        >
          {selectedNews.risk}
        </span>

        <span className="news-time">
          {selectedNews.time}
        </span>
      </div>

      <h2>{selectedNews.title}</h2>

      <p className="news-description">
        {selectedNews.description}
      </p>

      <div className="news-detail-info">
        <p>
          <strong>Location:</strong> {selectedNews.location}
        </p>

        <p>
          <strong>Category:</strong> {selectedNews.category}
        </p>

        <p>
          <strong>Confidence:</strong> {selectedNews.confidence}%
        </p>

        <p>
          <strong>Source:</strong> {selectedNews.source}
        </p>
      </div>

      <div className="risk-information">
        <h3>Risk Information</h3>

        <p>
          This information is based on demo public-safety
          intelligence data.
        </p>

        <span>DEMO DATA — NOT LIVE</span>
      </div>
    </div>
  </div>
)}

      <div className="news-header">
        <div>
          <h1>News Intelligence</h1>
          <p>
            Monitor public-safety related news and information
            from public sources.
          </p>
        </div>

        <div className="demo-badge">
          DEMO DATA — NOT LIVE
        </div>
      </div>

      <div className="news-content">

    <div className="news-filters">
  <label htmlFor="risk-filter">Risk Level:</label>

  <select
    id="risk-filter"
    value={riskFilter}
    onChange={(e) => setRiskFilter(e.target.value)}
  >
    <option value="ALL">All Risks</option>
    <option value="LOW">Low</option>
    <option value="MODERATE">Moderate</option>
    <option value="HIGH">High</option>
    <option value="CRITICAL">Critical</option>
  </select>

  <label htmlFor="category-filter">Category:</label>

  <select
    id="category-filter"
    value={categoryFilter}
    onChange={(e) => setCategoryFilter(e.target.value)}
  >
    <option value="ALL">All Categories</option>
    <option value="Crowd Density">Crowd Density</option>
    <option value="Traffic">Traffic</option>
    <option value="Public Event">Public Event</option>
    <option value="Severe Weather">Severe Weather</option>
  </select>
</div>

  <h2>Latest News</h2>

  <div className="news-list">
    {filteredNews.map((news) => (
        <div
         className="news-card"
         key={news.id}
         onClick={() => setSelectedNews(news)}
         >


        <div className="news-card-top">
          <span className={`risk-badge ${news.risk.toLowerCase()}`}>
            {news.risk}
          </span>

          <span className="news-time">
            {news.time}
          </span>
        </div>

        <h3>{news.title}</h3>

        <p className="news-description">
          {news.description}
        </p>

        <div className="news-details">
          <span>📍 {news.location}</span>
          <span>🏷️ {news.category}</span>
        </div>

        <div className="news-footer">
          <span>Source: {news.source}</span>
          <span>Confidence: {news.confidence}%</span>
        </div>

      </div>
    ))}
  </div>
</div>
    </div>
  );
}

export default NewsIntelligence;