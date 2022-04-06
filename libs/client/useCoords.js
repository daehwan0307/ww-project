import { useEffect, useState } from "react";

export default function useCoords() {
  const [coords, setCoords] = useState({
    latitude: null,
    longitude: null,
  });
  const onSuccess = ({ coords: { latitude, longitude } }) => {
    setCoords({ latitude, longitude });
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess);
  }, []);
  return coords;
}
