import { fieldInput } from "./fieldInput";
//  кнопка очищення поля введення при виклику слід передати поле, яке необхідно очистити
interface ClearButtonValues {
  (inputField: HTMLTextAreaElement, functionProperty: void): HTMLButtonElement;
}

export const clearButton: ClearButtonValues = (inputField) => {
  const buttonElement = document.createElement("button");
  buttonElement.className = "button-clear";
  if (fieldInput().value !== "") {
    buttonElement.innerText = "C";
  } else {
    buttonElement.textContent = "AC";
  }

  buttonElement.onclick = () => {
    // при кліку очищуємо поле введення, та localStorage
    inputField.value = "";
    localStorage.clear();
    buttonElement.textContent = "AC";
  };

  return buttonElement;
};
