// при виклику передається символ, який треба ввести у поле, то поле, яке треба модифікувати
export const addMinus = (value: string, inputField: HTMLTextAreaElement) => {
  const lastChar = inputField.value.slice(-1);
  // ця логіка дозволяє додати символ у будь-якому місці поля введення чи то перед
  // числом чи після арефметичного знаку, також обможується введення необмеженої кількості символів
  if (value === "-" && lastChar !== "-") {
    // Додаємо мінус, якщо перед ним не є інший мінус
    inputField.value += value;
  } else if (/\d/.test(value)) {
    inputField.value += value;
  }
};
