function startRecording(questionNumber) {
    let mediaRecorder;
    let audio = document.getElementById(`audio${questionNumber}`);
    
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(function(stream) {
                mediaRecorder = new MediaRecorder(stream);
                mediaRecorder.start();

                let audioChunks = [];

                mediaRecorder.ondataavailable = function(e) {
                    audioChunks.push(e.data);
                };

                mediaRecorder.onstop = function(e) {
                    let blob = new Blob(audioChunks, { 'type' : 'audio/mp3;' });
                    audioChunks = [];
                    let audioURL = window.URL.createObjectURL(blob);
                    audio.src = audioURL;
                    audio.hidden = false;
                };

                setTimeout(function() {
                    mediaRecorder.stop();
                }, 30000); // Stop recording after 30 seconds
            })
            .catch(function(err) {
                console.log("An error occurred: " + err);
            });
    } else {
        console.log("getUserMedia not supported on your browser!");
    }
}
// JavaScript Document