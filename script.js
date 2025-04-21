let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
let operation = '';
let currentInput = '';

buttons.map(button => {
    button.addEventListener('click', () => {
        if (button.innerText === 'AC') {
            currentInput = '';
            display.innerText = '0';
        } else if (button.innerText === '=') {
            try {
                currentInput = eval(currentInput.replace('×', '*').replace('÷', '/'));
                display.innerText = currentInput;
                currentInput = '';
            } catch {
                display.innerText = 'Error';
            }
        } else {
            currentInput += button.innerText;
            display.innerText = currentInput;
        }
    });
});