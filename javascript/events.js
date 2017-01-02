pos = -1;
smallFontType = "Arial";
smallFontSize = 100;
bigFontType = "Arial";
bigFontSize = 100;
letterOrder = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
image = "image";
start = true;
pressed = [false, false, false, false, false];
buttoncodes = [37,32,9,39,13];

function updateCenter() {
	pos++;
    pos %= letterOrder.length;
    letter = letterOrder.substring(pos, pos + 1);
    var context = document.getElementById("canvas").getContext('2d');

    var buttonImage = new Image();
    buttonImage.onload = function() {
        canvas.height = buttonImage.height * (canvas.width / buttonImage.width);
        if (image == "image")
            context.drawImage(buttonImage, 0, 0, canvas.width, canvas.height);

        context.font = bigFontSize * .006 * canvas.width + "px " + bigFontType;
        context.fillStyle = "#000000";
        context.align = "left";

        h_adjust = .3
        if (letter == "M" || letter == "W")
            h_adjust -= .07;
        context.fillText(letter, h_adjust * canvas.width, .68 * canvas.height);

        if (start) {
            adjustDivs();
            start = false;
        }
    };
    buttonImage.src = "images/KeyboardButton.png";
}

function speakLetter() {
    var sound = new Howl({
  		urls: ['alphabet/' + letterOrder.substring(pos, pos + 1) + '.wav']
	}).play();
}

function settingsMenu() {
    window.open('settings.html','Settings','width=800px, height=500px');
}