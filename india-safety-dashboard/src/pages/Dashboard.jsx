import {
  AlertTriangle,
  MapPin,
  ShieldCheck,
  Newspaper,
} from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import SafetyMap from "../components/SafetyMap";

function Dashboard() {
  const riskData = [
    { name: "Low", areas: 5 },
    { name: "Moderate", areas: 4 },
    { name: "High", areas: 2 },
    { name: "Critical", areas: 1 },
  ];

  const stats = [
    {
      title: "Active Risk Areas",
      value: "12",
      icon: AlertTriangle,
      description: "Currently monitored",
    },
    {
      title: "Reported Incidents",
      value: "08",
      icon: ShieldCheck,
      description: "From verified sources",
    },
    {
      title: "Locations Monitored",
      value: "24",
      icon: MapPin,
      description: "Across India",
    },
    {
      title: "News Reports",
      value: "156",
      icon: Newspaper,
      description: "Demo intelligence data",
    },
  ];

  return (
    <div className="dashboard">

      <div className="dashboard-header">
        <div>
          <h1>India Public Safety Dashboard</h1>

          <p>
            Monitor public-safety risks, reported incidents and news
            intelligence across India.
          </p>
        </div>

        <div className="demo-badge">
          DEMO DATA — NOT LIVE
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div className="stat-card" key={stat.title}>
              <div className="stat-icon">
                <Icon size={22} />
              </div>

              <div>
                <p>{stat.title}</p>
                <h2>{stat.value}</h2>
                <span>{stat.description}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="dashboard-grid">

        {/* MAP */}
        <div className="dashboard-card map-card">

          <div className="card-header">
            <div>
              <h2>Safety Risk Map</h2>
              <p>Risk overview across monitored locations</p>
            </div>
          </div>

          <div className="map-container">
            <SafetyMap />
          </div>

        </div>

        {/* RECENT ALERTS */}
        <div className="dashboard-card">

          <div className="card-header">
            <div>
              <h2>Recent Alerts</h2>
              <p>Latest public-safety information</p>
            </div>
          </div>

          <div className="alert-list">

            <div className="alert-item">
              <span className="risk-dot high"></span>

              <div>
                <strong>High Crowd Density</strong>
                <p>Prayagraj</p>
              </div>

              <small>10 min ago</small>
            </div>

            <div className="alert-item">
              <span className="risk-dot moderate"></span>

              <div>
                <strong>Traffic Congestion</strong>
                <p>Lucknow</p>
              </div>

              <small>25 min ago</small>
            </div>

            <div className="alert-item">
              <span className="risk-dot low"></span>

              <div>
                <strong>Public Event</strong>
                <p>Delhi</p>
              </div>

              <small>1 hr ago</small>
            </div>

          </div>

        </div>

      </div>

      {/* RISK DISTRIBUTION CHART */}
      <div className="dashboard-card chart-card">

        <div className="card-header">
          <div>
            <h2>Risk Distribution</h2>
            <p>Number of monitored areas by risk level</p>
          </div>
        </div>

        <div className="chart-container">

          <ResponsiveContainer width="100%" height={280}>

            <BarChart data={riskData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" />

              <YAxis allowDecimals={false} />

              <Tooltip />

              <Bar
                dataKey="areas"
                fill="#2563eb"
                radius={[5, 5, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;