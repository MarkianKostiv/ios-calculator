// Функція додає передане значення до вмісту поля вводу.
// Вона очікує два параметри: значення (value), яке слід додати,
// та поле введення (inputField), куди слід додати це значення.

export const addValues = (value: string, inputField: HTMLTextAreaElement) => {
  // Регулярний вираз для перевірки, чи є число наприкінці значення поля вводу
  const hasNumberAtEnd = /\d$/.test(inputField.value);

  // Регулярний вираз для перевірки, чи є крапка в кінці значення поля вводу
  const hasDot = /\.\d*$/.test(inputField.value);

  // Логіка для додавання значення в поле вводу відповідно до умов

  if (
    (value === "" && !hasNumberAtEnd) ||
    /\d/.test(value) ||
    (value === "." && !hasDot && hasNumberAtEnd)
  ) {
    // Додаємо порожній рядок, якщо це перше значення або якщо останнім була арифметична операція
    // Або додаємо цифру, якщо value - це цифра
    // Або додаємо крапку, якщо value - це крапка і на кінці попереднього значення не було крапки
    inputField.value += value;
  } else if (["+", "-", "×", "÷", "%"].includes(value) && hasNumberAtEnd) {
    // Додаємо арифметичний оператор, якщо на кінці вже є число
    inputField.value += value;
  } else if (
    ["+", "-", "×", "÷", "%"].includes(value) &&
    !hasNumberAtEnd &&
    inputField.value !== ""
  ) {
    // Якщо на кінці вже є арифметичний оператор, замінюємо його на новий
    inputField.value = inputField.value.slice(0, -1) + value;
  }

  // Додавання виводу у консоль для перевірки
  console.log(inputField.value);
};
