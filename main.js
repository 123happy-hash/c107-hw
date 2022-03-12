function StartSound(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/QDn-ASH98/model.json", modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}