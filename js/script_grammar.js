function submitAnswers() {
    var total = 5;
    var score = 0;

    // Obtener respuestas del usuario
    var q1 = document.forms["quizForm"]["question1"].value;
	var q2 = document.forms["quizForm"]["question2"].value;
	var q3 = document.forms["quizForm"]["question3"].value;
	var q4 = document.forms["quizForm"]["question4"].value;
	var q5 = document.forms["quizForm"]["question5"].value;
    // Repite para las demás preguntas

    // Validación simple (asegúrate de que todas las preguntas estén respondidas)
    for (i = 1; i <= total; i++) {
        if (eval('q' + i) == null || eval('q' + i) == '') {
            alert('Please, answer the question ' + i);
            return false;
        }
    }

    // Respuestas correctas (modifica según tus preguntas)
    var answers = ["opcion2", "opcion2", "opcion1", "opcion1", "opcion2" /* ... */];

    // Verificar respuestas
    for (i = 1; i <= total; i++) {
        if (eval('q' + i) == answers[i - 1]) {
            score++;
        }
    }

    // Mostrar resultados
    var results = document.getElementById('result');
    results.innerHTML = '<h3>You got <span>'+score+'</span> out of <span>'+total+'</span> answers correct.</h3>';
    
    return false;
}
// JavaScript Document