import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

import "./Map.css";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2FtdWVsaWdlIiwiYSI6ImNrZmliNWV4NjAyM2MzM21weGwzamJ4eWMifQ.4BmTZvA4puEeO3mjXa9dyQ";

const Map = (props) => {
  const mapRef = useRef(null);

  const { center, zoom } = props;
  const coords = [`${center.lng}`, `${center.lat}`];
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
      center: coords, // starting position [lng, lat]
      zoom: zoom, // starting zoom
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, "top-left");

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );

    new mapboxgl.Marker({ position: coords, map });
  }, [coords, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
