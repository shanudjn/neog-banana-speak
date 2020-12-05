var textInput = document.querySelector('#text-input');
var btnTranslate = document.querySelector('#btn-translate');
var textOutput = document.querySelector('#text-output');

// var url = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json'
var url = "https://api.funtranslations.com/translate/minion.json"


function getTranslateURL(text) {
    return url + "?" + "text=" + text;

}

//display translation in the required div
function displayTranslation(outputText) {
    textOutput.innerText = outputText;
}
//error hanlding for non-responsive server
function handleError(error) {
    console.log("Error Occured " + error);
}
//handle click event
function handleClick() {

    let inputTextValue = textInput.value;

    fetch(getTranslateURL(inputTextValue))
        .then(response => response.json())
        .then(json => {
            // console.log(json);

            displayTranslation(json.contents.translated);

        })
        .catch(handleError)

}

btnTranslate.addEventListener('click', handleClick);
