import { expect } from "chai";
import { JSDOM } from "jsdom";
import { clearButton } from "../calculatorModuls/сlearButton";

describe("clearButton", () => {
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

  it("має створювати кнопку", () => {
    // Мокуємо функцію fieldInput
    const fieldInputMock = () => inputField;

    // Викликаємо функцію clearButton
    const button = clearButton(fieldInputMock());

    // Перевіряємо, чи button - екземпляр HTMLButtonElement
    expect(button.tagName).to.equal("BUTTON");
  });
});
