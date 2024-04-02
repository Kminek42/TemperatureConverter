function C2F(value) {
    return value * 9 / 5 + 32;
}

function F2C(value) {
    return (value - 32) * 5 / 9;
}

function conversion() {
    if (!isNaN(inp.value) && inp.value != '') {
        var temp = C2F(inp.value);
        temp = Math.round(100 * temp) / 100;
        out.setAttribute('value', temp);
    }

    else {
        out.setAttribute('value', '');
    }
}


var inp = document.getElementById('input');
var out = document.getElementById('output');

document.getElementById('input').addEventListener('input', conversion);