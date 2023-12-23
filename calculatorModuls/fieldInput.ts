// поле введення, відображає, те, що ввів користувач та результат,
// не потребує аргументів при виклику
export const fieldInput = () => {
  const calculatorInput = document.createElement("textarea");
  // блокуємо для користувача можливість вводити дані вручну
  calculatorInput.readOnly = true;
  calculatorInput.className = "calculatorInput";
  // Перевіраємо чи localStorage не порожній і тоді встановлюємо значення полю ввдення
  const storedValue = localStorage.getItem("result");
  calculatorInput.value = storedValue !== null ? storedValue : "";
  return calculatorInput;
};
