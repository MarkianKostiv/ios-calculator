import { expect } from "chai";
import { JSDOM } from "jsdom";
import { generateButtons } from "../calculatorModuls/utils/generateButtons";

describe("generateButtons", () => {
  it("має генерувати кнопки, по масиву рядків", () => {
    const values = ["1", "2", "3", "4", "5"];

    // Create a simple JSDOM environment
    const { window } = new JSDOM();
    const document = window.document;

    const buttons = generateButtons(
      values,
      document.createElement("textarea"),
      (value, inputField) => {
        const button = document.createElement("button");
        button.value = value.toString();
        button.innerText = value.toString();
        return button;
      }
    );

    expect(buttons).to.have.lengthOf(values.length);

    buttons.forEach((button, index) => {
      expect(button.value).to.equal(values[index].toString());
    });
  });
});
