
let multBtn = document.getElementById('multBtn')
let result = document.getElementById('result');

multBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let num1 = parseFloat(document.getElementById('val1').value);
    let num2 = parseFloat(document.getElementById('val2').value);
    const getMult = () => {
    
    // Add the value together
    let mult = num1 * num2;
    console.log(mult);

    //Display the result
    result.textContent = "Multiplication: " + mult;
 }
 getMult();
});
