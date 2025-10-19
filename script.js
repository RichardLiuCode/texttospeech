document.getElementById("playspeech").addEventListener("click", function () {
    let speech = new SpeechSynthesisUtterance();
    speech.text = document.getElementById("input").value;
    window.speechSynthesis.speak(speech)
})