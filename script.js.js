// script.js

const buildBtn = document.getElementById("buildSmoothie");
const smoothieResult = document.getElementById("smoothieResult");
const caloriesText = document.getElementById("calories");

let water = 0;

const smoothieData = {
  Energy: {
    name: "Green Energy Blast",
    benefits: "Boosts energy and improves focus.",
    calories: 220
  },

  "Weight Loss": {
    name: "Slim Detox Smoothie",
    benefits: "Supports fat burning and digestion.",
    calories: 180
  },

  Detox: {
    name: "Fresh Detox Cleanse",
    benefits: "Flushes toxins and improves gut health.",
    calories: 170
  },

  "Muscle Gain": {
    name: "Protein Power Shake",
    benefits: "Supports muscle recovery and strength.",
    calories: 320
  },

  Immunity: {
    name: "Immune Booster Mix",
    benefits: "Strengthens immunity and wellness.",
    calories: 240
  }
};

buildBtn.addEventListener("click", () => {

  const goal = document.getElementById("goal").value;
  const base = document.getElementById("base").value;
  const fruit = document.getElementById("fruit").value;
  const veggie = document.getElementById("veggie").value;

  const smoothie = smoothieData[goal];

  smoothieResult.innerHTML = `
  
    <h3>${smoothie.name}</h3>

    <br>

    <strong>Ingredients:</strong>

    <ul>
      <li>${base}</li>
      <li>${fruit}</li>
      <li>${veggie}</li>
      <li>Chia Seeds</li>
      <li>Ice Cubes</li>
    </ul>

    <br>

    <strong>Instructions:</strong>

    <ol>
      <li>Wash all ingredients.</li>
      <li>Add ingredients into blender.</li>
      <li>Blend for 45 seconds.</li>
      <li>Serve chilled.</li>
    </ol>

    <br>

    <strong>Benefits:</strong>
    <p>${smoothie.benefits}</p>

    <br>

    <strong>Calories:</strong>
    <p>${smoothie.calories} kcal</p>
  
  `;

  caloriesText.innerText = smoothie.calories + " kcal";
});

document
  .getElementById("generateBtn")
  .addEventListener("click", () => {

    document
      .querySelector(".generator")
      .scrollIntoView({
        behavior:"smooth"
      });

});

document
  .getElementById("addWater")
  .addEventListener("click", () => {

    water++;

    document
      .getElementById("waterCount")
      .innerText = water;

});
// Download Recipe Function
document
  .getElementById("downloadRecipe")
  .addEventListener("click", () => {

    const recipeText = smoothieResult.innerText;

    if (!recipeText || recipeText.includes("will appear here")) {
      alert("Please generate a smoothie first.");
      return;
    }

    // Check if jsPDF is loaded
    if (!window.jspdf || !window.jspdf.jsPDF) {
      alert("PDF library not loaded. Please check your jsPDF script link.");
      return;
    }

    const doc = new window.jspdf.jsPDF();

    const lines = doc.splitTextToSize(recipeText, 180);

    doc.text("NutriBlend Recipe", 10, 10);
    doc.text(lines, 10, 20);

    doc.save("NutriBlend-Recipe.pdf");
});