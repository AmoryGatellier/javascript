let inputLabel = document.getElementById('inputLabel');
function calc(obj) {
    let x = obj.innerHTML;
    (x=='='? inputLabel.innerHTML = eval(inputLabel.innerHTML) : (x=='AC'? inputLabel.innerHTML = '0' : (inputLabel.innerHTML == '0'? inputLabel.innerHTML = x : inputLabel.innerHTML += x)))  
}