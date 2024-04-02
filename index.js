function C2F(value) {
    temp = value * 9 / 5 + 32;
    temp = Math.round(100 * temp) / 100;
    return temp;
}

function F2C(value) {
    temp =  (value - 32) * 5 / 9;
    temp = Math.round(100 * temp) / 100;
    return temp;
}

function conversion() {
    if (!isNaN(inp.value) && inp.value != '') {
        if (CtoF) {
            var temp = C2F(inp.value);
        }
        else {
            var temp = F2C(inp.value);
        }
        out.setAttribute('value', temp);
    }

    else {
        out.setAttribute('value', '');
    }
}

function switchHandler() {
    if (CtoF) {
        CtoF = false;
        inputText.innerHTML = 'Temperature °F';
        outputText.innerHTML = 'Temperature °C';
    }
    else {
        CtoF = true;
        inputText.innerHTML = 'Temperature °C';
        outputText.innerHTML = 'Temperature °F';
    }
    conversion();
}

var inp = document.getElementById('input');
var out = document.getElementById('output');
var inputText = document.getElementById('inputText');
var outputText = document.getElementById('outputText');

var CtoF = true;

document.getElementById('input').addEventListener('input', conversion);
document.getElementById('switch').addEventListener('click', switchHandler);
document.onload(conversion());
