function createSettings() {
    var settings = document.getElementById("settings");
    var context = settings.getContext('2d');

    var settingsIcon = new Image();
    settingsIcon.onload = function() {
        settings.height = .25 * settingsIcon.height * (settings.width / settingsIcon.width);
        context.drawImage(settingsIcon, 0, 0, .25 * settings.width, settings.height);

        context.font = (.2 * settings.width) + "px Arial";
        context.fillStyle = "#000000";
        context.align = "left";
        context.fillText("Settings", .27 * settings.width, .75 * settings.height);
    };
    settingsIcon.src = "images/SettingsIcon.png";
}

function createPrint() {
    var print = document.getElementById("print");
    var context = print.getContext('2d');

    var printIcon = new Image();
    printIcon.onload = function() {
        print.height = .25 * printIcon.height * (print.width / printIcon.width);
        context.drawImage(printIcon, 0, 0, .25 * print.width, print.height);

        context.font = (.2 * print.width) + "px Arial";
        context.fillStyle = "#000000";
        context.align = "left";
        context.fillText("Print", .27 * print.width, .75 * print.height);
    };
    printIcon.src = "images/PrintIcon.png";
}

function createSpeak() {
    var speak = document.getElementById("speak");
    var context = speak.getContext('2d');

    var speakIcon = new Image();
    speakIcon.onload = function() {
        speak.height = .30 * speakIcon.height * (speak.width / speakIcon.width);
        context.drawImage(speakIcon, 0, 0, .25 * speak.width, speak.height);

        context.font = (.2 * speak.width) + "px Arial";
        context.fillStyle = "#000000";
        context.align = "left";
        context.fillText("Speak", .27 * speak.width, .75 * speak.height);
    };
    speakIcon.src = "images/SpeakIcon.png";
}

function speakBox() {
    var textArea = document.getElementById("text");
    var letters = textArea.value;
    loopBox(0, letters);
}

function loopBox(i, letters){
	var audio = new Howl({
  		urls: ['alphabet/' + letters.substring(i, i + 1).toUpperCase() + '.wav'],
  		onend: function() {
  			i++;
  			while (!(/^[a-zA-Z]/i.test(letters.substring(i, i + 1))) && i < letters.length){
  				i++;
  			}
    		if (i < letters.length)
    			loopBox(i, letters);
  		}
	}).play();
}

function printBox() {
    var printWindow = window.open();
    var textArea = document.getElementById("text");

    printWindow.document.open();
    printWindow.document.write("<p style='font-size: 10vw; word-wrap: break-word;'>" + textArea.value + "</p>");
    printWindow.document.close();
    printWindow.print();
    printWindow.close();
}

function mouseoverButton(button) {
    var button = document.getElementById(button);
    button.style.backgroundColor = "#E0E0E0";
}

function restoreButtons() {
    var settings = document.getElementById("settings");
    settings.style.backgroundColor = "#F5F5F5";
    var print = document.getElementById("print");
    print.style.backgroundColor = "#F5F5F5";
    var speak = document.getElementById("speak");
    speak.style.backgroundColor = "#F5F5F5";
}