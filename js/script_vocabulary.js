function submitAnswers() {
    var total = 5; // Total number of questions
    var score = 0;
    var correctAnswers = {
        "answer1": "F", // Correct answer for question 1
        "answer2": "B", // Correct answer for question 2
		"answer3": "H", // Correct answer for question 2
		"answer4": "C", // Correct answer for question 2
		"answer5": "A", // Correct answer for question 2
        
    };

    // Check each answer
    for (var i = 1; i <= total; i++) {
        var userAnswer = document.getElementById('answer' + i).value;
        if(userAnswer === correctAnswers['answer' + i]) {
            score++;
        }
    }

    // Display result
    var result = document.getElementById('result');
    result.innerHTML = '<h3>You got ' + score + ' out of ' + total + ' correct answers.</h3>';
}

// Make sure to link this JavaScript file to your HTML.
// JavaScript Document