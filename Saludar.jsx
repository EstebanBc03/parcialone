import React from 'react';

function saludar() {
    const fecha = new Date();
    const hora = fecha.getHours();
    let texto;
    if (hora < 12) {
      texto = 'Buenos días';
    } else if (hora < 18) {
      texto = 'Buenas tardes';
    } else {
      texto = 'Buenas noches';
    }
    console.log(texto);
  }
  return <input type="number" onChange={saludar} placeholder="Hora (0-23)" />;

export default Saludar;
