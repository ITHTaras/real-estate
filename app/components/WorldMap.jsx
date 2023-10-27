"use client";

import topojson from "../countries-110m.json";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { companyLocations } from "../data";

export default function WorldMap() {
  return (
    <ComposableMap style={{ padding: 0, margin: 0 }}>
      <Geographies geography={topojson}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#dbdee4"
              stroke="#cfd2d8"
              style={{
                default: {
                  outline: "none",
                },
                pressed: {
                  outline: "none",
                },
                hover: {
                  outline: "none",
                },
              }}
            />
          ))
        }
      </Geographies>
      {companyLocations.map((city) => {
        return (
          <Marker
            key={city.cityName}
            coordinates={city.location}
            className="group"
          >
            <text
              className="hidden group-hover:block text-sm font-semibold"
              fill="#7F56D9"
              textAnchor="middle"
            >
              {city.cityName}
            </text>
            <circle cx={24} cy={24} r={18} fill="#9E77ED" opacity={0.2} />
            <circle cx={24} cy={24} r={9} fill="#9E77ED" opacity={0.4} />
            <circle cx={24} cy={24} r={3} fill="#9E77ED" />
          </Marker>
        );
      })}
    </ComposableMap>
  );
}
