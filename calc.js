let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function deleteLastCharacter() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('result').value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.buttons button');

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const value = e.target.value;

            if (!isNaN(value) || value === '.') {
                // Append numbers and decimal point
                appendToDisplay(value);
            } else if (value === 'C') {
                // Clear the input
                clearDisplay();
            } else if (value === '=') {
                // Perform calculation
                calculate();
            } else if (value === 'DEL') {
                // Delete the last character
                deleteLastCharacter();
            } else if (value === '+') {
                // Handle the "+" operator
                appendToDisplay(value);
            } else {
                // Set other operators
                appendToDisplay(value);
            }
        });
    });
});
