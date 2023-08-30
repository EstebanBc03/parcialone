import React from 'react';

function convertirSegundos(segundosP) {
    const horas = Math.floor(segundosP / 3600);
    const minutos = Math.floor((segundosP % 3600) / 60);
    const segundos = (Math.round(segundosP % 60)).toString();
    return `${horas}h ${minutos}m ${segundos}s`;
  }

  return <input type="number" onChange={convertir} placeholder="Segundos" />;


export default Tiempo;
