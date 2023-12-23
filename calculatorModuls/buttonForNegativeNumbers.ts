import { addMinus } from "./utils/addMinus";

// функція ідентична звичайній кнопці, яка додає значення до поля ввдення
// викликається інша функція додавання значення, функція дає змогу оперувати
// від'ємними числами
interface ClearButtonValues {
  (value: string, inputField: HTMLTextAreaElement): HTMLButtonElement;
}
export const buttonForNegativeNumbers: ClearButtonValues = (
  value,
  inputField
) => {
  const buttonElement = document.createElement("button");
  buttonElement.className = "button-clear button-negative";
  buttonElement.value = value;
  const symbolOfBtn = document.createElement("img");
  symbolOfBtn.src =
    "../images/mathematical-basic-signs-plus-minus-with-slash_43472.png";
  buttonElement.append(symbolOfBtn);

  // виклик функції аналогічний виклику функції введення іних знаків
  buttonElement.onclick = () => {
    addMinus(value, inputField);
  };

  return buttonElement;
};
