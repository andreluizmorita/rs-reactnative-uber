import React from "react";
import MapViewDirections from "react-native-maps-directions";
import ENV from "../env";

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey={ENV.GOOGLEMAPS.APIKEY}
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;
