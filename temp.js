const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const kelvin = document.getElementById('kelvin');
const stemPerct = document.getElementsByClassName('stem-perct')[0];
const body = document.getElementById("body")

const handleTemp = (scale) => {
    let celsiusValue;

    if (scale === 'celsius') {
        celsiusValue = parseFloat(celsius.value);
        fahrenheit.value = ((celsiusValue * 9 / 5) + 32).toFixed(2);
        kelvin.value = (celsiusValue + 273.15).toFixed(2);
    } else if (scale === 'fahrenheit') {
        const fahrenheitValue = parseFloat(fahrenheit.value);
        celsiusValue = ((fahrenheitValue - 32) * 5 / 9).toFixed(2);
        celsius.value = celsiusValue;
        kelvin.value = (((fahrenheitValue - 32) * 5 / 9) + 273.15).toFixed(2);
    } else if (scale === 'kelvin') {
        const kelvinValue = parseFloat(kelvin.value);
        celsiusValue = (kelvinValue - 273.15).toFixed(2);
        celsius.value = celsiusValue;
        fahrenheit.value = ((kelvinValue - 273.15) * 9 / 5 + 32).toFixed(2);
    }

    if (celsiusValue >= 0 && celsiusValue <= 100) {
        stemPerct.style.height = celsiusValue + '%';
    } else if (celsiusValue < 0) {
        stemPerct.style.height = '0%';
    } else {
        stemPerct.style.height = '100%';
    }

    if (celsiusValue >= 90) {
        body.style.background = "linear-gradient(to bottom, #f07167, #e54f6d)";
    } else if (celsiusValue >= 80) {
        body.style.background = "linear-gradient(to bottom, #ff7000, #ff8c00)";
    } else if (celsiusValue >= 70) {
        body.style.background = "linear-gradient(to bottom, #ff8c00, #ffd700)";
    } else if (celsiusValue >= 60) {
        body.style.background = "linear-gradient(to bottom, #ffd700, #ffff00)";
    } else if (celsiusValue >= 50) {
        body.style.background = "linear-gradient(to bottom, #ffff00, #adff2f)";
    } else if (celsiusValue >= 40) {
        body.style.background = "linear-gradient(to bottom, #adff2f, #7fff00)";
    } else if (celsiusValue >= 30) {
        body.style.background = "linear-gradient(to bottom, #7fff00, #00ff00)";
    } else if (celsiusValue >= 20) {
        body.style.background = "linear-gradient(to bottom, #00ff00, #00fa9a)";
    } else if (celsiusValue >= 10) {
        body.style.background = "linear-gradient(to bottom, #00fa9a, #00ffff)";
    } else if (celsiusValue > 0) {
        body.style.background = "linear-gradient(to bottom, #00ffff, #00fa9a)";
    } else {
        body.style.background = "linear-gradient(to left bottom, lightgreen, lightblue)";
    }

}

