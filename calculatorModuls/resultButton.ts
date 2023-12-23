import { calculatingResult } from "./utils/calculatingResult";

// кнопка ідентична зичайній кнопці, при виклику слід передати вираз який слід підрахувати
// та поле введення, куди необхідно вивести результат, у даному випадку передається значення,
// яке ввів користувач у поле введення
interface ButtonValues {
  (
    value: string,
    inputField: HTMLTextAreaElement,
    functionProperty: void
  ): HTMLButtonElement;
}

export const resultButton: ButtonValues = (value, inputField) => {
  const buttonElement = document.createElement("button");
  buttonElement.innerText = value;
  buttonElement.value = value;
  buttonElement.className = "button-number arithmetic-button";

  buttonElement.onclick = () => {
    const inputFieldValue = inputField.value;
    // виклик функції підрахунку результату, передаються 2 аргументи, родок із виразом,
    // який треба підрахувати, та поле ввдення, якому треба присвоїти результат підрахунку, для виведення результату
    calculatingResult(inputFieldValue, inputField);
    const buttonClear = document.querySelector(".button-clear")!;
    buttonClear.textContent = "C";
  };

  return buttonElement;
};
