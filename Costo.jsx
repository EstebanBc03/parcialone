import React from 'react';

function calcularCosto(minutosP) {
    const precio = minutosP <= 3 ? 100 : 100 + (minutosP - 3) * 50;
    console.log(`Costo: ${precio} pesos`);
  }
  return <input type="number" onChange={calcular} placeholder="Minutos" />;

export default Costo;
