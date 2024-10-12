var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Como estrella tú brillas junto a mí", time: 19 },
  { text: "En cada noche iluminas mi ser", time: 24 },
  { text: "Como el Sol que da la vida al despertar", time: 29 },
  { text: "Cada mañana como un astro fugaz", time: 34 },
  { text: "Sin darme cuenta estoy aquí", time: 39 },
  { text: "Junto a ti amada mía", time: 44 },
  { text: "En cada noche con tu cuerpo junto al mío", time: 49 },
  { text: "Llenando el rumbo de amor y fantasía", time: 54 },
  { text: "Un aroma se me quedó de ti", time: 64 },
  { text: "Que me estremece todo a flor de piel", time: 69 },
  { text: "Como un rayo que incita a la claridad", time: 74 },
  { text: "En cada tarde cuando te quiero amar", time: 79 },
  { text: "Sin darme cuenta estoy aquí", time: 84 },
  { text: "Junto a ti amada mía", time: 89 },
  { text: "En cada noche con tu cuerpo junto al mío", time: 94 },
  { text: "Llenando el rumbo de amor y fantasía", time: 99 },
  { text: "Dame un poco más de ese amor que llevas dentro de ti", time: 109 },
  { text: "Dame un poco que tus labios rocen con los míos", time: 114 },
  { text: "Dame un poco más y tocar las nubes de alegría", time: 119 },
  { text: "Dame un poco más y tocar tu cuerpo", time: 124 },
  { text: "Dame un poco más, dame un poco más", time: 129 },
  { text: "De esa mirada que seduce", time: 134 },
  { text: "También tus labios para no morirme de sed", time: 139 },
  { text: "Dame un poco más, dame un poco más", time: 144 },
  { text: "Quiero mirarte, tocarte, abrazarte y besarte", time: 149 },
  { text: "Porfi Baloa dile con tu piano cuanto la amo", time: 154 },
  { text: "Dame un poco más, dame un poco más", time: 159 },
  { text: "De ese aroma que me trae tu recuerdo", time: 164 },
  { text: "De aquellos bellos momentos", time: 169 },
  { text: "Dame un poco más, dame un poco más", time: 174 },
  { text: "Que bello es, estar junto a ti", time: 179 },
  { text: "Dame un poco más", time: 184 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
