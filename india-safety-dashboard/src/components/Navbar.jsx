import { Bell, Search, User } from "lucide-react";

function Navbar( { searchTerm,setSearchTerm}) {
  return (
    <header className="navbar">
      <div className="search-box">
        <Search size={20} />

        <input
        type="text"
         placeholder="Search events, cities, alerts..."
         value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}
         />
      </div>

      <div className="navbar-right">
        <button className="icon-button" title="Notifications">
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>

        <div className="user-profile">
          <div className="user-icon">
            <User size={18} />
          </div>

          <div className="user-info">
            <strong>Safety Analyst</strong>
            <small>Dashboard User</small>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;