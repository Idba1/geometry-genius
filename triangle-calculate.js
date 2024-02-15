/**
 * Objective: get base, height of a triangle. Calculate the area by using 
 * the provided formula. and then display the area.
 * 
 * step -1: get base value of the triangle
 * step-2: added an id in the base input field
 * step-3: use getElementById to access the input field
 * step-4: get value from the input field. (value is string now)
 * step-5: convert the value to a number. use parseFloat
 **/


function calculateTriangleArea() {
    // Get Triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = parseFloat(triangleBaseInput.value);
    console.log(triangleBaseText);

    // Get Triangle height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = parseFloat(triangleHeightInput.value);
    console.log(triangleHeightText);

    // Calculate Triangle Area
    const triangleArea = 0.5 * triangleBaseText * triangleHeightText;
    console.log('Area of the Triangle :', triangleArea);

    // display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = triangleArea;
}