const submitButton = document.querySelector("#submit");
const formInput = document.querySelectorAll(
  "input:not([type='reset']):not([type='submit'])",
);
const resetButton = document.querySelector("#reset");

let isValid = true;


formInput.forEach((formElement) => {
  formElement.addEventListener("input", () => {
    const errorSpan = formElement.nextElementSibling;
    if (formElement.validity.valueMissing) {
      errorSpan.textContent = "Pls, Input the Data.";
    } else if (formElement.validity.typeMismatch) {
      errorSpan.textContent = "Pls, Input the correct Data";
    } else {
      errorSpan.textContent = "";
    }
  });
});

submitButton.addEventListener("click", (event) => {
  formInput.forEach((formElement) => {
    const errorSpan = formElement.nextElementSibling;
    if (formElement.validity.typeMismatch) {
      event.preventDefault();
      isValid = false;
      errorSpan.textContent = "Pls, Input the Correct Data";
      formElement.classList.add("error");
    } else if (formElement.validity.valueMissing) {
      event.preventDefault();
      isValid = false;
      errorSpan.textContent = "Pls, Input the Data here, It is required.";
      formElement.classList.add("error");
    }
    else{
        errorSpan.textContent = "";
        formElement.classList.remove("error");
    }
  });
});

resetButton.addEventListener("click", () => {
    formInput.forEach((formElement) => {
        const errorSpan = formElement.nextElementSibling;
        formElement.classList.remove("error");
        isValid = true;
        errorSpan.textContent = "";
    });
}); 