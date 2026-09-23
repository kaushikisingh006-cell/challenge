const express = require("express");

const app = express();

const PORT = 5000;

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "India Safety Dashboard backend is running",
  });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});

app.get("/api/news", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Large Public Gathering Reported",
      location: "Prayagraj, Uttar Pradesh",
      category: "Crowd Density",
      risk: "HIGH",
      confidence: 86,
      status: "Reported",
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
      status: "Reported",
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
      status: "Predicted Risk",
      time: "1 hour ago",
      source: "Demo News Source",
      description:
        "A public event has been scheduled in the monitored area.",
    },
  ]);
});