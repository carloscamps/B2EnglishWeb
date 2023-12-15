function submitAnswers() {
    var totalQuestions = 5; // Canviar segons el nombre total de preguntes
    var score = 0;
    var correctAnswers = ['2', '3', '1', '2', '2']; // Les respostes correctes per a cada pregunta
    
    for (var i = 1; i <= totalQuestions; i++) {
        var radios = document.getElementsByName('question' + i);
        for (var j = 0; j < radios.length; j++) {
            if (radios[j].checked && radios[j].value === correctAnswers[i - 1]) {
                score++;
                break;
            }
        }
    }
    
    var result = document.getElementById('result');
    result.textContent = 'You scored ' + score + ' out of ' + totalQuestions + '.';
}

// Afegeix el codi necessari per a comprovar les respostes i actualitzar la puntuació.
// JavaScript Document