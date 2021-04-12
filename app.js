const height = document.getElementById("height");
const weight = document.getElementById("weight");
const submit = document.querySelector("button");


submit.addEventListener('click', e => {
    if (e.target !== submit){
        return;
    }
    if (!weight.value || !height.value) {
        window.alert("Enter both height and weight")
        return;
    }
});