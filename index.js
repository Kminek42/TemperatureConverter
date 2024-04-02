function C2F() {
    var inp = document.getElementById('input').value;
    var out = document.getElementById('output');

    if (!isNaN(inp) && inp != '') {
        var temp = (inp - 32) * 5 / 9;
        temp = Math.round(10 * temp) / 10;
        out.setAttribute('value', temp);
    }

    else {
        out.setAttribute('value', '');
    }
}

function greet() {
    alert('Hello, World!');
}

document.getElementById('input').addEventListener('input', C2F);