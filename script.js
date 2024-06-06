const intelligenceSlider = document.getElementById("intelligence");
const strengthSlider = document.getElementById("strength");
const agilitySlider = document.getElementById("agility");
const powerLevelValue = document.getElementById("power-level-value");
const powerLevelContainer = document.getElementById("power-level");

function calculatePowerLevel() {
    const intelligenceValue = parseInt(intelligenceSlider.value);
    const strengthValue = parseInt(strengthSlider.value);
    const agilityValue = parseInt(agilitySlider.value);
    const totalPowerLevel = intelligenceValue + strengthValue + agilityValue;
    powerLevelValue.textContent = totalPowerLevel;

    if (totalPowerLevel > 2650) {
        powerLevelContainer.classList.add("red-text");
    } else {
        powerLevelContainer.classList.remove("red-text");
    }
}

intelligenceSlider.addEventListener("input", () => {
    document.getElementById("intelligence-value").textContent = intelligenceSlider.value;
    calculatePowerLevel();
});

strengthSlider.addEventListener("input", () => {
    document.getElementById("strength-value").textContent = strengthSlider.value;
    calculatePowerLevel();
});

agilitySlider.addEventListener("input", () => {
    document.getElementById("agility-value").textContent = agilitySlider.value;
    calculatePowerLevel();
});

calculatePowerLevel();