const height = document.getElementById("height");
const weight = document.getElementById("weight");
const submit = document.querySelector("button");
const result = document.querySelector(".result");


submit.addEventListener('click', e => {
    if (e.target !== submit){
        return;
    }
    //  giving an alert, if input fields were empty 
    if (!weight.value || !height.value) {
        window.alert("Enter both height and weight")
        return;
    }
    const h = height.value/100;
    const w = weight.value;
    const output = w/h**2;
    const x = output.toFixed(2); 

    if (x <18.5) {
        result.innerHTML = `<div class="p-3 bg-info">Your BMI : ${x}</div>`;
    } else if (x >= 18.5 && x <= 25) {
        result.innerHTML = `<div class="p-3 bg-success text-light">Your BMI : ${x}</div>`;
    } else if (x > 25 && x <= 30) {
        result.innerHTML = `<div class="p-3 bg-warning">Your BMI : ${x}</div>`;
    } else {
        result.innerHTML = `<div class="p-3 bg-danger text-light">Your BMI : ${x}</div>`;
    }
});