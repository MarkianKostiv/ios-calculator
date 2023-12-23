import { expect } from "chai";
import { JSDOM } from "jsdom";
import { fieldInput } from "../calculatorModuls/fieldInput";

describe("fieldInput", () => {
  it("повинен повернути елемент textarea зі специфічними властивостями", () => {
    // Create a simple JSDOM environment
    const { window } = new JSDOM();
    const document = window.document;

    // Assign the JSDOM document to the global object
    (global as any).document = document;

    const calculatorInput = fieldInput();

    // Verify that the returned element is a textarea
    expect(calculatorInput.tagName).to.equal("TEXTAREA");

    // Verify that the textarea has the correct class
    expect(calculatorInput.classList.contains("calculatorInput")).to.be.true;

    // Verify that the textarea is read-only
    expect(calculatorInput.readOnly).to.be.true;

    // Verify that the value is empty or matches the stored value in localStorage
    const storedValue = localStorage.getItem("result");
    expect(calculatorInput.value).to.equal(
      storedValue !== null ? storedValue : ""
    );

    // Clean up: remove the JSDOM document from the global object
    delete (global as any).document;
  });
});
