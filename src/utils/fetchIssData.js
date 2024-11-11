import { EARTH_RADIUS } from '../constants';
import { latLongToVector3 } from '../helpers';

// Fonction de l'API
export const fetchIssData = async (issModelRef, setIssData, setPosition) => {
  try {
    const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();

    // Modifier la position du model de l'ISS
    if (issModelRef.current) {
      const position = latLongToVector3(data.latitude, data.longitude, (EARTH_RADIUS + data.altitude) / EARTH_RADIUS);
      issModelRef.current.position.copy(position);
    }

    setIssData(data);

    // Avoir les details de l'API (Récuperer le pays survoler en fonction des coord.)
    const positionResponse = await fetch(`https://api.wheretheiss.at/v1/coordinates/${data.latitude},${data.longitude}`);
    if (positionResponse.ok) {
      const positionData = await positionResponse.json();
      setPosition(positionData);
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des données de l\'ISS:', error);
  }
};