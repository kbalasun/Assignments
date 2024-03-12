var mainDiv = create('div', 'container-fluid mt-5 ml-5 p-5');


var divArr = createElements('div', 'offset-md-2 offset-sm-1 row text-md-center text-sm-left h4 mb-0', 6);

var inputArea = create('input', 'col-8 border-3 border-light text-right mt-5 mb-1');

inputArea.setAttribute('type', 'text');
inputArea.disabled = true;
inputArea.id = "display";

var calcButtons = createElements('button', 'btn-fluid btn-dark text-md-center p-md-3 col-2', 10);

calcButtons[0].setAttribute('onclick', "showOnInputArea(0)");
calcButtons[1].setAttribute('onclick', `showOnInputArea(1)`);
calcButtons[2].setAttribute('onclick', `showOnInputArea(2)`);
calcButtons[3].setAttribute('onclick', `showOnInputArea(3)`);
calcButtons[4].setAttribute('onclick', `showOnInputArea(4)`);
calcButtons[5].setAttribute('onclick', `showOnInputArea(5)`);
calcButtons[6].setAttribute('onclick', `showOnInputArea(6)`);
calcButtons[7].setAttribute('onclick', `showOnInputArea(7)`);
calcButtons[8].setAttribute('onclick', `showOnInputArea(8)`);
calcButtons[9].setAttribute('onclick', `showOnInputArea(9)`);

var addSymbol = createButton('+', '+', `showOnInputArea('+')`);
var subSymbol = createButton('-', '-', `showOnInputArea('-')`);
var mulSymbol = createButton('x', 'X', `showOnInputArea('*')`);

var divisionSymbol = createButton('&#247;', '/', `showOnInputArea('/')`);

var square = createButton('x<sup>2</sup>', 'square', 'power2()')
var equals = createButton('=', '=', 'equalTO()');
var sRoot = createButton('&radic;', 'root', 'sqrRoot()');
var dot = createButton('.', '.', `showOnInputArea('.')`);
var clearContent = createButton('Clr', 'clr', 'clearScreen()');
var toPower3 = createButton('x<sup>3</sup>', 'toThePower3', 'power3()')

document.body.append(mainDiv);
mainDiv.append(divArr[0], divArr[1], divArr[2], divArr[3], divArr[4], divArr[5]);
divArr[0].append(inputArea);
divArr[1].append(square, sRoot, clearContent, divisionSymbol);
divArr[2].append(calcButtons[7], calcButtons[8], calcButtons[9], mulSymbol);
divArr[3].append(calcButtons[4], calcButtons[5], calcButtons[6], subSymbol);
divArr[4].append(calcButtons[1], calcButtons[2], calcButtons[3], addSymbol);

divArr[5].append(toPower3, calcButtons[0], dot, equals);

function create(element, classname) {
    var t = document.createElement(element);
    t.setAttribute('class', classname);
    return t;
}

function createElements(element, classname, num) {
    let elem = [];
    for (let i = 0; i < num; i++) {
        var b = document.createElement(element);
        b.setAttribute('class', classname);
        b.setAttribute('style', `font-family: serif,sans-serif`);
        if (element === 'button') {
            b.setAttribute('value', i);
            b.innerHTML = i;
        }
        elem.push(b);
    }
    return elem;
}

function createButton(txt, val, funcCall) {
    let btnEle = document.createElement('button');
    btnEle.setAttribute('class', 'btn-fluid btn-dark text-md-center p-md-3 p-sm-4 p-xs-4 col-2');
    btnEle.setAttribute('value', val);
    btnEle.innerHTML = txt;
    btnEle.setAttribute('onclick', funcCall);
    return btnEle;
}
