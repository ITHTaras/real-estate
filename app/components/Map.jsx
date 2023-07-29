"use client";

import { useMemo, useState } from "react";

function Map() {
  const center = useMemo(() => ({ lat: 40, lng: 40 }), []);
  const [selected, setSelected] = useState(null);

  return <div></div>;
}

export default Map;
