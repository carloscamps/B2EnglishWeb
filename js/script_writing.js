function submitAnswers() {
    var answers = {
        food: document.getElementById('food').value,
        yesterday: document.getElementById('yesterday').value,
        cookFrequency: document.getElementById('cookFrequency').value,
        fruitOrVeg: document.getElementById('fruitOrVeg').value,
        foodType: document.getElementById('foodType').value
    };
    document.getElementById('result').innerHTML = '<h3>Your Answers:</h3>' + JSON.stringify(answers, null, 4);
}
// JavaScript Document