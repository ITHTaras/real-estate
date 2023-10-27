import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useMap } from "react-leaflet/hooks";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Image from "next/image";
import sofaImg from "../../public/images/sofa.svg";
import Link from "next/link";

function Map({ center, residents }) {
  const markerIcon = new L.Icon({
    iconUrl:
      "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-64.png",
    iconSize: [40, 40],
  });

  return (
    <MapContainer className="leaflet-container" center={center} zoom={11}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <SetViewOnClick coords={center} />
      {residents.map((resident) => {
        return (
          <Marker
            key={resident.id}
            position={[resident.lat, resident.long]}
            icon={markerIcon}
            alt=""
          >
            <Popup minWidth={250}>
              <Link href={`/residents/${resident.id}`} className="p-2">
                <h3 className="text-base font-semibold text-black">
                  {resident.name}
                </h3>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center">
                    <Image src={sofaImg} alt="" width={20} height={20} />
                    <h6 className="text-customgray text-base ml-2 mr-2">
                      {resident.rooms}+1
                    </h6>
                  </div>
                  <h3 className="text-base text-black">
                    <span className="font-semibold">{resident.price} $</span>{" "}
                    Month
                  </h3>
                </div>
              </Link>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}

function SetViewOnClick({ coords }) {
  const map = useMap();
  map.setView(coords, 11);

  return null;
}

export default Map;
