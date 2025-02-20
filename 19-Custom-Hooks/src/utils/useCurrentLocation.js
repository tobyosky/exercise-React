import { useState } from "react";

export function useCurrentLocation() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  function success(position) {
    const currentLatitude = position.coords.latitude;
    const currentLongitude = position.coords.longitude;

    setLocation({ latitude: currentLatitude, longitude: currentLongitude });
  }

  function error(error) {
    setErrorMessage(error.message);
  }

  function getCurrentLocation() {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      setLoading(false);
    } else {
      setLoading(true);
      setTimeout(() => {
        navigator.geolocation.getCurrentPosition(success, error);
        setLoading(false);
      }, 2000);
    }
  }

  return { location, loading, errorMessage, getCurrentLocation };
}
