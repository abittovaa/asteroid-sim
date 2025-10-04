document.getElementById("asteroidForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Получаем значения
  let diameter = parseFloat(document.getElementById("diameter").value);
  let velocity = parseFloat(document.getElementById("velocity").value);
  let density = parseFloat(document.getElementById("density").value);

  // Радиус
  let radius = diameter / 2;

  // Масса астероида (формула объёма шара * плотность)
  let volume = (4/3) * Math.PI * Math.pow(radius, 3);
  let mass = volume * density;

  // Энергия удара (Джоули)
  let energy = 0.5 * mass * Math.pow(velocity, 2);

  // Переводим в мегатонны тротила (1 Мт = 4.184e15 Дж)
  let energyMT = energy / 4.184e15;

  // Примерная формула для диаметра кратера (очень упрощённо!)
  let craterDiameter = Math.pow(energy, 0.25) * 0.01; // км

  // Выводим
  document.getElementById("results").innerHTML = `
    💥 Энергия удара: ${energyMT.toFixed(2)} мегатонн<br>
    🕳 Примерный диаметр кратера: ${craterDiameter.toFixed(2)} км
  `;
});
