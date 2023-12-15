function submitAnswers() {
    var questions = 5; // Canviar segons el nombre total de preguntes
    var score = 0;
    var correctAnswers = ['a', 'a', 'b', 'b', 'c']; // Les respostes correctes s'han de determinar segons el test

    for (var i = 1; i <= questions; i++) {
        var radios = document.getElementsByName('question' + i);
        var userAnswer = ''; // Resposta de l'usuari
        for (var j = 0; j < radios.length; j++) {
            if (radios[j].checked) {
                userAnswer = radios[j].value;
                break;
            }
        }
        if (userAnswer === correctAnswers[i - 1]) {
            score++;
        }
    }

    var result = document.getElementById('result');
    result.innerHTML = '<h3>You got <span>' + score + '</span> out of <span>' + questions + '</span> correct answers.</h3>';
}
// JavaScript Document