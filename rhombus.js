console.log('hello');


function calculateRhombusArea(){
    const base = getInputValueById('rhombusd1');
    console.log('base value', base);

    const height = getInputValueById('rhombusd2');
    console.log('height value', height);

    const area = base * height;
    console.log('Area of the Rhombus:', area);

    setInnerTextById ('rhombus-area', area);
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    // console.log(inputValue)
    return inputValue;
}


function setInnerTextById (elementId , area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}