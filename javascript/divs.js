function changeLeft(clr) {
    var divleft = document.getElementById('divleft');
    divleft.style.backgroundColor = clr;
}

function changeRight(clr) {
    var divright = document.getElementById('divright');
    divright.style.backgroundColor = clr;
}

function adjustDivs() {
    var divleft = document.getElementById('divleft');
    var divright = document.getElementById('divright');

    var center1 = document.getElementById('canvas');
    var center2 = document.getElementById('text');
    var center3 = document.getElementById('settings');

    var h = center1.clientHeight + center2.clientHeight + center3.clientHeight;
    divleft.setAttribute("style", "height:" + h + "px");
    divright.setAttribute("style", "height:" + h + "px");
}

function clickLeft() {
    updateCenter();
    speakLetter();
    var textArea = document.getElementById("text");
    textArea.blur();
}

function clickRight() {
	speakLetter();
    var textArea = document.getElementById("text");
    textArea.style.font = .022 * smallFontSize + "vw " + smallFontType;
    textArea.value = textArea.value + letterOrder.substring(pos, pos + 1);
    textArea.blur();
}

function downscan(event){
	var button = buttoncodes.indexOf(event.keyCode);
	if (pressed[button] == false){
		if (button < 2 && button != -1){
			changeLeft('#C4F4D2');
			clickLeft();
		}
		if (button > 2){
			changeRight('#FBC8CA');
			clickRight();
		}
	}
	pressed[button] = true;
}

function upscan(event){
	var button = buttoncodes.indexOf(event.keyCode);
	pressed[button] = false;
	if (button < 2 && button != -1)
		changeLeft('#F5F5F5');
	if (button > 2)
		changeRight('#F5F5F5');
}