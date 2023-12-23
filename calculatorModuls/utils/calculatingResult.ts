import * as math from "mathjs";
// при виклику функції слід передати рядок із виразом,
// у цьому випадку це те, що вів користувач у поле введення,
// також наступним аргументом слід передати поле введення, якому буде присвоїно
// результат підрахунку і таким чином виведено для користувача
export const calculatingResult = (
  stringToCount: string,
  fieldToChange: HTMLTextAreaElement
) => {
  // Для коректного підрахунку результату виразу необхідно впевнетися, що у рядку
  // будуть валідні символи множення та ділення, символи "×" та "÷" не є валідними томі слід
  // модифікуваи рядок перед тим, як проводити його обчислення
  interface TypesForReplacements {
    "×": string;
    "÷": string;
    [key: string]: string;
  }
  // тут відбувається заміна знаків на валідні
  if (fieldToChange.value.trim() !== "") {
    const replacements: TypesForReplacements = {
      "×": "*",
      "÷": "/",
    };

    const modifiedString = stringToCount.replace(
      /[×÷]/g,
      (match) => replacements[match]
    );
    // тут відбувається підрахунок за допомогою mathjs
    let result = math.evaluate(modifiedString);
    // зберігається число у пам'ять
    localStorage.setItem("result", result);
    // полю введення всановлюється значення результату,
    // що дрзволяє виконувати послідовні математичні операції
    fieldToChange.value = String(result);
  }
};
