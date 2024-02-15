function calculateRectangleArea (){
    // Get length of the rectangle
    const lengthInput = document.getElementById('rectangle-length');
    const lengthValueInText = lengthInput.value;
    const lengthValue = parseFloat(lengthValueInText);
    console.log(lengthValue);

    // Get width of the rectangle
    const widthInput = document.getElementById('rectangle-width');
    const widthValue = parseFloat(widthInput.value);
    console.log(widthValue);

    // Calculate rectangle Area
    const area = lengthValue * widthValue;
    console.log('Area of the rectangle : ',area);

    // display rectangle area
    const areaValue = document.getElementById('rec-area');
    areaValue.innerText = area;
}