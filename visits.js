const GOATCOUNTER = "https://naygo.goatcounter.com";

function showCounter(n) {
  document.getElementById("digits").innerHTML = String(n)
    .padStart(6, "0")
    .split("")
    .map((d) => `<span>${d}</span>`)
    .join("");
}

function loadCounter() {
  const counter = document.getElementById("counter");
  if (!counter) return;

  fetch(`${GOATCOUNTER}/counter/TOTAL.json`)
    .then((r) => r.json())
    .then((d) => {
      showCounter(d.count.replace(/\D/g, ""));
      counter.hidden = false;
    })
    .catch(() => {});
}

loadCounter();
