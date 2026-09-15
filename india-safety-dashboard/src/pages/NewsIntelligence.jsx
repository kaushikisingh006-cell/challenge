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

function NewsIntelligence({ searchTerm }) {
const filteredNews = newsData.filter((news) => {
  const searchWords = searchTerm
    .toLowerCase()
    .trim()
    .split(/\s+/);

  const newsText = `
    ${news.title}
    ${news.location}
    ${news.category}
    ${news.description}
  `.toLowerCase();

  return searchWords.every((word) =>
    newsText.includes(word)
  );
});

  return (
    <div className="news-page">
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
  <h2>Latest News</h2>

  <div className="news-list">
    {filteredNews.map((news) => (
      <div className="news-card" key={news.id}>

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