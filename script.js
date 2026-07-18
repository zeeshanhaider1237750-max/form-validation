// const oneForm = document.querySelector("#one");
// const twoForm = document.querySelector("#two");
// const threeForm = document.querySelector("#three");
// const fourForm = document.querySelector("#four");
// const fiveForm = document.querySelector("#five");
// const sixForm = document.querySelector("#six");
// const sevenForm = document.querySelector("#seven");
// const eightForm = document.querySelector("#eight");
// const nineForm = document.querySelector("#nine");
// const tenForm = document.querySelector("#ten");

const formInput = document.querySelectorAll("input:not([type='reset'])");

// const form = [];

formInput.forEach((formElement) => {
    formElement.addEventListener('input', () => {
            const errorSpan = formElement.nextElementSibling;
    if(formElement.validity.valueMissing){
        errorSpan.textContent = "Pls, Input the correct date."
    }
    else{
        errorSpan.textContent = "";
    }
    });
});