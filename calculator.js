let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

//function to Calculate Sqaure Root
function calculateSquareRoot() {
    try {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue) && currentValue >= 0) {
            display.value = Math.sqrt(currentValue);
        } else {
            display.value = 'Error';
        }
    } catch (error) {
        display.value = 'Error';
    }
}

// Function to delete the last character from the display
function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}

//Function to calculate Total result
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

//Function to calculate log
function calculateLog() {
    try {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue) && currentValue > 0) {
            display.value = Math.log10(currentValue);
        } else {
            display.value = 'Error';
        }
    } catch (error) {
        display.value = 'Error';
    }
}

