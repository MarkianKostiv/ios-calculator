import { expect } from "chai";
import { JSDOM } from "jsdom";
import { buttonForNegativeNumbers } from "../calculatorModuls/buttonForNegativeNumbers";

describe("buttonForNegativeNumbers", () => {
  let inputField: HTMLTextAreaElement;

  beforeEach(() => {
    // Створюємо нове середовище JSDOM перед кожним тестом
    const dom = new JSDOM("<!DOCTYPE html>");
    const { window } = dom;
    const document = window.document;

    // Призначаємо документ JSDOM глобальному об'єкту
    (global as any).document = document;

    // Створюємо новий елемент textarea для кожного тесту
    inputField = document.createElement("textarea");
  });

  it("має створювати кнопку для введення від'ємних чисел", () => {
    const value = "-"; // значення кнопки для введення від'ємних чисел

    // Викликаємо функцію buttonForNegativeNumbers для кнопки введення від'ємних чисел
    const negativeButton = buttonForNegativeNumbers(value, inputField);

    // Перевіряємо, чи negativeButton - екземпляр HTMLButtonElement
    expect(negativeButton.tagName).to.equal("BUTTON");

    // Перевіряємо, чи присвоюється правильне значення кнопці
    expect(negativeButton.value).to.equal(value);

    // Перевіряємо, чи створюється і вставляється дочірній елемент типу img
    expect(negativeButton.querySelector("img")).to.not.be.null;
  });
});
