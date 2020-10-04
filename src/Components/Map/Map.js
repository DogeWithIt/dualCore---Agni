import React from "react";
import ReactMapGL from "react-map-gl";
import {Marker} from "react-map-gl";
import firebase from '../firebase';
import { useState } from "react";
import getMeteoData from '../../MeteoMaticsAPI/MeteoApi';
import './marker.css';

export default function Map() {
  var [viewport, setViewport] = useState({
    latitude: 37.78,
    longitude: -122.41,
    width: "100vw",
    height: "100vh",
    zoom: 4,
  });

  const ref = firebase.database().ref().orderByKey();
  let coords = [];
  ref.on("value", (snap) => {
      snap.forEach((child) => {
          coords.push([child.val().x, child.val().y]);
      });
  });

  return (
    <>
      <ReactMapGL
        className="map"
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/dogewithit/ckfs5obbg1tas19nrt6ryulci"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}>
        <div className="markers">
          {
            coords.map((value, index) => (
              <Marker
                className="marker"
                key={index}
                latitude={value[0]}
                longitude={value[1]}
              >
                <button>
                  <img src="https://i.imgur.com/lzoCh1k.png" height="15%" width="15%"></img>
                </button>
              </Marker>
            ))
          }
        </div>
        
      </ReactMapGL>
    </>
  );
}
