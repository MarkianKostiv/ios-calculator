import { expect } from "chai";
import { JSDOM } from "jsdom";
import { resultButton } from "../calculatorModuls/resultButton";

describe("resultButton", () => {
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

  it("має створювати кнопку для виведення результату", () => {
    const value = "="; // значення кнопки для виведення результату

    // Викликаємо функцію resultButton для кнопки виведення результату
    const resultButtonElement = resultButton(value, inputField);

    // Перевіряємо, чи resultButtonElement - екземпляр HTMLButtonElement
    expect(resultButtonElement.tagName).to.equal("BUTTON");

    // Перевіряємо, чи присвоюється правильне значення кнопці
    expect(resultButtonElement.value).to.equal(value);

    // Перевіряємо, чи resultButtonElement має правильний клас
    expect(resultButtonElement.className).to.equal(
      "button-number arithmetic-button"
    );
  });
});
