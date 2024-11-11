import React, { memo } from 'react';

const ISSInfo = memo(({ data }) => (
  <div className="absolute top-4 left-4 text-white bg-black/50 p-4 rounded">
    <h3 className="text-xl mb-2">Position de l'ISS</h3>
    <p><b>Latitude:</b> {data.latitude.toFixed(2)}°</p>
    <p><b>Longitude:</b> {data.longitude.toFixed(2)}°</p>
    <p><b>Altitude:</b> {data.altitude.toFixed(2)} Km</p>
    <p><b>Vitesse:</b> {data.velocity.toFixed(2)} Km/H</p>
    <p><b>Position:</b> {data.position?.country_code || 'En cours'}</p>
  </div>
));

export default ISSInfo;