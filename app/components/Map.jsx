import { MapContainer, TileLayer } from "react-leaflet";
import { useMap } from "react-leaflet/hooks";
import "leaflet/dist/leaflet.css";

function Map({ center }) {
  return (
    <MapContainer className="leaflet-container" center={center} zoom={11}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <SetViewOnClick coords={center} />
    </MapContainer>
  );
}

function SetViewOnClick({ coords }) {
  const map = useMap();
  map.setView(coords, 11);

  return null;
}

export default Map;
