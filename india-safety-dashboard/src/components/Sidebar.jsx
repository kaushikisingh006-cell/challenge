import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Map,
  Newspaper,
  CalendarDays,
  BarChart3,
  Bell,
  Database,
  Settings,
} from "lucide-react";

function Sidebar() {
  const menuItems = [
    { name: "Dashboard", path: "/", icon: LayoutDashboard },
    { name: "Live Map", path: "/map", icon: Map },
    { name: "News Intelligence", path: "/news", icon: Newspaper },
    { name: "Events", path: "/events", icon: CalendarDays },
    { name: "Analytics", path: "/analytics", icon: BarChart3 },
    { name: "Alerts", path: "/alerts", icon: Bell },
    { name: "Sources", path: "/sources", icon: Database },
    { name: "Settings", path: "/settings", icon: Settings },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>India Safety</h2>
        <span>Safety Dashboard</span>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <span className="status-dot"></span>
        Demo Mode
      </div>
    </aside>
  );
}

export default Sidebar;