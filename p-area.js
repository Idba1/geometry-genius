// console.log('hello');

function calculateParaArea (){
    // get paralogram base value 
    const parallogramBaseInput = document.getElementById('para-base');
    const parallogramBaseInputValue = parseFloat(parallogramBaseInput.value);
    console.log(parallogramBaseInputValue);

    // get paralogram height value
    const parallogramHeightInput = document.getElementById('para-height');
    const parallogramHeightInputValue = parseFloat(parallogramHeightInput.value);
    console.log(parallogramHeightInputValue);


    const area = parallogramBaseInputValue * parallogramHeightInputValue;
    console.log(area);

    const paraAreaValue = document.getElementById('para-area');
    paraAreaValue.innerText = area;
}