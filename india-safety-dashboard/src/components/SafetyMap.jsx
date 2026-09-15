import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import L from "leaflet";

// Fix default Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const locations = [
  {
    name: "Prayagraj",
    position: [25.4358, 81.8463],
    risk: "HIGH",
    score: 68,
    type: "Crowd Density",
  },
  {
    name: "Lucknow",
    position: [26.8467, 80.9462],
    risk: "MODERATE",
    score: 42,
    type: "Traffic Congestion",
  },
  {
    name: "Delhi",
    position: [28.6139, 77.209],
    risk: "LOW",
    score: 18,
    type: "Public Event",
  },
];

const getRiskColor = (risk) => {
  if (risk === "HIGH") return "#ef4444";
  if (risk === "MODERATE") return "#f59e0b";
  if (risk === "LOW") return "#22c55e";

  return "#6b7280";
};

function SafetyMap() {

    <div className="map-legend">
     <strong>Risk Level</strong>

    <div>
    <span className="legend-dot low"></span>
    LOW
     </div>

    <div>
    <span className="legend-dot moderate"></span>
    MODERATE
    </div>

     <div>
    <span className="legend-dot high"></span>
     HIGH
     </div>
     </div> 
     
  return (
      <MapContainer
     center={[22.9734, 78.6569]}
     zoom={5}
     minZoom={4}
     maxZoom={16}
     className="safety-map"
     >
      <TileLayer
       attribution='&copy; Esri, DeLorme, HERE, USGS, Intermap, increment P Corp., NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom'
       url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
      />
      {locations.map((location) => (
  <CircleMarker
    key={location.name}
    center={location.position}
    radius={10}
    pathOptions={{
      color: getRiskColor(location.risk),
      fillColor: getRiskColor(location.risk),
      fillOpacity: 0.8,
      weight: 3,
    }}
  >
    <Popup>
      <strong>{location.name}</strong>
      <br />
      Risk Level: {location.risk}
      <br />
      Risk Score: {location.score}/100
      <br />
      Type: {location.type}
      <br />
      <small>DEMO DATA — NOT LIVE</small>
    </Popup>
  </CircleMarker>
))}
    </MapContainer>
  );
}

export default SafetyMap;