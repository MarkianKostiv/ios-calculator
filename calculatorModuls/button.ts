import { addValues } from "./utils/addVulues";

interface ButtonValues {
  (
    value: string,
    inputField: HTMLTextAreaElement,
    additionalClass?: string,
    additionalChildElement?: { tag: string; class?: string } // Зміни тип параметра
  ): HTMLButtonElement;
}
// базова кнпока додавання значення у поле ввдення
// при виклику треба передати значення, яке має ввести кнопка та поле введення, куди має бути ввдено значення
// також можна передати додатковий клас та дочірній елемент при потребі
export const button: ButtonValues = (
  value,
  inputField,
  additionalClass = "",
  additionalChildElement?: { tag: string; class?: string } // Зміни тип параметра
) => {
  const buttonElement = document.createElement("button");
  // текстове значення та value кнопоки ідентичні тим, які передані при виклику
  buttonElement.innerText = value;
  buttonElement.value = value;
  buttonElement.className = "button-number";

  // Додавання додаткового класу для кнопки, якщо він переданий
  if (additionalClass) {
    buttonElement.classList.add(additionalClass);
  }

  // Додавання дочірнього елемента, якщо він переданий
  if (additionalChildElement) {
    const childElement = document.createElement(additionalChildElement.tag);
    childElement.textContent = value;

    // Додавання класу для дочірнього елемента, якщо він переданий
    if (additionalChildElement.class) {
      childElement.classList.add(additionalChildElement.class);
    }

    buttonElement.appendChild(childElement);
  }

  buttonElement.onclick = () => {
    // виклик функції, яка додає значення у поле введення перадні кнопці
    addValues(value, inputField);
    const buttonClear = document.querySelector(".button-clear")!;
    buttonClear.textContent = "C";
    console.log(inputField.value);
    // прокручування поля введеня для того, щоб користувач завжди бачив, що вводить
    // коли вводить дуже велике число
    inputField.scrollTop = inputField.scrollHeight;
  };

  return buttonElement;
};
