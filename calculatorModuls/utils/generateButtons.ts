// ця функція використовує масиви, які знаходяться у теці arrays

interface ButtonGenerator {
  (
    value: string,
    inputField: HTMLTextAreaElement,
    additionalClass?: string,
    additionalChildElement?: { tag: string; class?: string }
  ): HTMLButtonElement;
}
// ця функція використовується для генерації кнопок
// кнопки з цифрми та арефмитичними операторами мають однакову логіку та вигляд,
// для того, щоб не прописувати кожну кнопку вручну використовується ця функція,
// та їй передається масив рядкових значень, саме ці значенння із масиву стануть
// value для кнопки та її текстовим контентом
export const generateButtons = (
  values: string[],
  inputField: HTMLTextAreaElement,
  buttonCallback: ButtonGenerator,
  buttonClasses: string[] = [] // додавання параметру для передачі класів
): HTMLButtonElement[] => {
  // генерація кнопк
  const buttons = values.map((value) => {
    const additionalClass = buttonClasses.includes(value)
      ? "additional-class"
      : "";
    // додатковий елемент для кнопки "0", через її інший зовнішній вигляд вона потребує цього
    const additionalChildElement =
      value === "0" ? { tag: "span", class: "zero-span" } : undefined;

    const buttonElement = buttonCallback(
      value,
      inputField,
      additionalClass,
      additionalChildElement
    );
    //додавання додаткового класу для нуля
    buttonClasses.forEach((cls) => {
      buttonElement.classList.add(cls);
      if (value === "0") {
        buttonElement.classList.add("zero-button");
      }
    });

    return buttonElement;
  });

  return buttons;
};
