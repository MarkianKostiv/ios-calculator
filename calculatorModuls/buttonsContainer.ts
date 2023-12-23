// ця функція створює контейнер, якому можна передати кнопки, як аргументи при виклику
// функція створена для простішого групування кнопок, можна передати, як масив так і одиничні кнопки
export const buttonsContainer = (
  className: string,
  ...childElements: HTMLElement[]
) => {
  const container = document.createElement("div");
  container.className = className;
  container.append(...childElements);
  return container;
};
