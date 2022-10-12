let impuesto = 1.75
let precio = 0
let resNetflix = 0 
let resSpotify = 0
let resSteam = 0
let ciclo = true
function precioFinal(resNetflix, resSpotify, resSteam) {
  alert(`Tu precio total seria: $${resNetflix + resSpotify + resSteam}`)
}

debugger

while(ciclo === true) {
  let producto = prompt(`Que quieres cotizar Netflix, Spotify, Steam?`).toLowerCase();
  
  if (producto === "netflix") {
    precio = parseFloat(prompt(`Cuanto sale tu suscripción?`));
    resNetflix = precio * impuesto;
    console.log(`Tu suscripción de Netflix saldría: $${resNetflix}`);
    alert(`Tu suscripción de Netflix saldría: $${resNetflix}`);
    ciclo = confirm(`Quieres seguir?`);
  }
  else if(producto === "spotify") {
    precio = parseFloat(prompt(`Cuanto sale tu suscripción?`));
    resSpotify = precio * impuesto;
    console.log(`Tu suscripción de Spotify saldría: $${resSpotify}`);
    alert(`Tu suscripción de Spotify saldría: $${resSpotify}`);
    ciclo = confirm(`Quieres seguir?`);
  }
  else if(producto === "steam") {
    precio = parseFloat(prompt(`Cuanto sale tu juego?`));
    resSteam = precio * impuesto;
    console.log(`Tu juego saldría: $${resSteam}`);
    alert(`Tu juego saldría: $${resSteam}`);
    ciclo = confirm(`Quieres seguir?`);
  }
  else{
    alert(`La opcion que escribiste no esta contemplada.`)
  }
}

let final = confirm(`Quiere el precio final?`)

precioFinal(resNetflix, resSpotify, resSteam)

