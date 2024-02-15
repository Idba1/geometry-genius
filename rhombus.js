console.log('hello');


function calculateRhombusArea(){
    const base = getInputValueById('rhombusd1');
    console.log('base value', base);

    const height = getInputValueById('rhombusd2');
    console.log('height value', height);
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    // console.log(inputValue)
    return inputValue;
}