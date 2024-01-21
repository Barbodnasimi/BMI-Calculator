// DOM elements
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const resultDiv = document.querySelector('#result');
const buttonCalculator = document.querySelector('button');

// Function to calculate BMI value
function calculateBMIValue(height, weight) {
    const heightInMeters = height / 100;
    const BMI = weight / (heightInMeters * heightInMeters);
    return BMI.toFixed(2);
}

// Function to get BMI category
function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi < 24.9) {
        return 'Normal weight';
    } else if (bmi < 29.9) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}

// Event listener for button click
buttonCalculator.addEventListener('click', () => {
    // Get input values and clear inputs
    const height = heightInput.value;
    const weight = weightInput.value;
    heightInput.value = '';
    weightInput.value = '';

    // Validate inputs
    if (height <= 0 || weight <= 0 || isNaN(weight) || isNaN(height)) {
        resultDiv.textContent = 'Please enter valid height and weight.';
        return;
    }

    // Calculate BMI and get category
    const bmiValue = calculateBMIValue(height, weight);
    const bmiCategory = getBMICategory(bmiValue);

    // Display result
    resultDiv.innerHTML = `Your BMI is ${bmiValue} (${bmiCategory}).`;
});
