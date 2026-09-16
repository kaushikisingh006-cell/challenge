import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Analytics() {
  const riskData = [
    { name: "Low", areas: 5 },
    { name: "Moderate", areas: 4 },
    { name: "High", areas: 2 },
    { name: "Critical", areas: 1 },
  ];

 const categoryData = [
   { name: "Crowd Density", events: 6 },
   { name: "Traffic", events: 4 },
   { name: "Public Event", events: 3 },
   { name: "Severe Weather", events: 2 },
];

  return (
    <div className="analytics-page">
      <div className="analytics-summary">
  <div className="analytics-summary-card">
    <span>Low Risk</span>
    <strong>5</strong>
    <small>Monitored Areas</small>
  </div>

  <div className="analytics-summary-card">
    <span>Moderate Risk</span>
    <strong>4</strong>
    <small>Monitored Areas</small>
  </div>

  <div className="analytics-summary-card">
    <span>High Risk</span>
    <strong>2</strong>
    <small>Monitored Areas</small>
  </div>

  <div className="analytics-summary-card">
    <span>Critical Risk</span>
    <strong>1</strong>
    <small>Monitored Area</small>
  </div>
</div>


      <div className="analytics-header">
        <div>
          <h1>Analytics</h1>
          <p>Public-safety risk analytics across monitored areas.</p>
        </div>

        <div className="demo-badge">
          DEMO DATA — NOT LIVE
        </div>
      </div>

      <div className="analytics-chart">
        <h2>Risk Level Distribution</h2>
        <p>Number of monitored areas by risk level</p>

        <div className="analytics-chart-box">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={riskData}
              margin={{
                top: 20,
                right: 20,
                left: 10,
                bottom: 10,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" />

              <YAxis allowDecimals={false} />

              <Tooltip />

              <Bar
                dataKey="areas"
                fill="#2563eb"
                radius={[5, 5, 0, 0]}
                isAnimationActive={false}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="analytics-chart">
  <h2>Event Category Distribution</h2>
  <p>Number of events by category</p>

  <div className="analytics-chart-box">
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={categoryData}
        margin={{
          top: 20,
          right: 20,
          left: 10,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="name" />

        <YAxis allowDecimals={false} />

        <Tooltip />

        <Bar
          dataKey="events"
          fill="#2563eb"
          radius={[5, 5, 0, 0]}
          isAnimationActive={false}
        />
      </BarChart>
    </ResponsiveContainer>
     </div>
     </div>
      </div>
    </div>
  );
}

export default Analytics;