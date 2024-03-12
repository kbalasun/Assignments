

function showOnInputArea(val) {
    inputArea.value += val;
}


function equalTO() {
  
    inputArea.value = Number.isInteger(eval(inputArea.value)) ? eval(inputArea.value) : eval(inputArea.value).toFixed(2);
}

function sqrRoot() {
    if (inputArea.value) {
        let val = parseFloat(eval(inputArea.value))
        inputArea.value = Math.sqrt(val).toFixed(2);
    }
}

function power3() {
    if (inputArea.value) {
        let val = parseFloat(eval(inputArea.value))
        inputArea.value = Math.pow(val, 3).toFixed(2);
    }
}

function power2() {
    if (inputArea.value) {
        let val = parseFloat(eval(inputArea.value))
        inputArea.value = Math.pow(val, 2).toFixed(2);
    }
}

function clearScreen() {
    inputArea.value = "";
}