const el = document.getElementById("bh");

const climas = {
  0: ["céu limpo", "☀️"],
  1: ["poucas nuvens", "🌤️"],
  2: ["parcialmente nublado", "⛅"],
  3: ["nublado", "☁️"],
  45: ["neblina", "🌫️"],
  48: ["neblina", "🌫️"],
  51: ["garoa", "🌦️"],
  53: ["garoa", "🌦️"],
  55: ["garoa", "🌦️"],
  61: ["chuva fraca", "🌧️"],
  63: ["chuva", "🌧️"],
  65: ["chuva forte", "🌧️"],
  80: ["pancadas de chuva", "🌦️"],
  81: ["pancadas de chuva", "🌧️"],
  82: ["temporal", "⛈️"],
  95: ["trovoada", "⛈️"],
  96: ["trovoada", "⛈️"],
  99: ["trovoada", "⛈️"],
};

let weather = "";

function hour() {
  return new Date().toLocaleTimeString("pt-BR", {
    timeZone: "America/Sao_Paulo",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function show() {
  el.textContent = `${hour()} em belo horizonte${weather}`;
}

fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=-19.92&longitude=-43.94&current=temperature_2m,weather_code&timezone=America%2FSao_Paulo",
)
  .then((r) => r.json())
  .then((d) => {
    const celsius = Math.round(d.current.temperature_2m);
    const [text, emoji] = climas[d.current.weather_code] ?? ["", ""];
    weather = ` · ${celsius}°C, ${text} ${emoji}`;
    show();
  })
  .catch(() => {}); // se a API falhar, mostra só a hora

show();
setInterval(show, 60000); // atualiza o relógio a cada minuto
