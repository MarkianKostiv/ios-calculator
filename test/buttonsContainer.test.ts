import { expect } from "chai";
import { JSDOM } from "jsdom";
import { buttonsContainer } from "../calculatorModuls/buttonsContainer";

describe("buttonsContainer", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    // Створюємо нове середовище JSDOM перед кожним тестом
    const dom = new JSDOM("<!DOCTYPE html>");
    const { window } = dom;
    const document = window.document;

    // Призначаємо документ JSDOM глобальному об'єкту
    (global as any).document = document;

    // Створюємо новий елемент div для кожного тесту
    container = document.createElement("div");
  });

  it("має створювати контейнер з дочірніми елементами", () => {
    const className = "test-container"; // клас контейнера
    const button1 = document.createElement("button");
    const button2 = document.createElement("button");

    // Викликаємо функцію buttonsContainer для створення контейнера
    const resultContainer = buttonsContainer(
      className,
      button1,
      button2
    ) as HTMLDivElement;

    // Перевіряємо, чи resultContainer - екземпляр HTMLDivElement
    expect(resultContainer.tagName).to.equal("DIV");

    // Перевіряємо, чи resultContainer має правильний клас
    expect(resultContainer.className).to.equal(className);

    // Перевіряємо, чи resultContainer має два дочірні елементи
    expect(resultContainer.children.length).to.equal(2);

    // Перевіряємо, чи дочірні елементи співпадають з переданими при виклику
    expect(resultContainer.children[0]).to.equal(button1);
    expect(resultContainer.children[1]).to.equal(button2);
  });
});
