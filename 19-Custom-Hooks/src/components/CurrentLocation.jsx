import { useCurrentLocation } from "../utils/useCurrentLocation";

export default function CurrentLocation() {
  const { location, loading, errorMessage, getCurrentLocation } =
    useCurrentLocation();

  return (
    <div>
      <button onClick={getCurrentLocation}>Current Location</button>
      {loading && <p>Loading...</p>}
      {errorMessage && <p>error message: {errorMessage}</p>}
      {location && (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      )}
    </div>
  );
}
