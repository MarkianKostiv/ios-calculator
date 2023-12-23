import { expect } from "chai";
import { JSDOM } from "jsdom";
import { button } from "../calculatorModuls/button";

describe("button", () => {
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

  it("має створювати кнопку  з переданим значенням", () => {
    const value = "2"; // значення кнопки очищення

    // Викликаємо функцію button для кнопки очищення
    const clearButton = button(value, inputField);

    // Перевіряємо, чи button - екземпляр HTMLButtonElement
    expect(clearButton.tagName).to.equal("BUTTON");

    // Перевіряємо, чи присвоюється правильне значення кнопці очищення
    expect(clearButton.value).to.equal(value);
  });
});
