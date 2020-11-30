var textInput = document.querySelector('#text-input');
var btnTranslate = document.querySelector('#btn-translate');
var textOutput = document.querySelector('#text-output');

btnTranslate.addEventListener('click', function handleClick() {
    console.log('Clicked!!!');
    console.log(textInput.value);
    let inputTextValue = textInput.value;
    textOutput.innerText = inputTextValue;
});


//console.log(textInput.value)