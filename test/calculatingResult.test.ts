// test/calculatingResult.test.ts
import "mocha";
import { expect } from "chai";
import * as localStorage from "mock-local-storage";
import { calculatingResult } from "../calculatorModuls/utils/calculatingResult";

// Якщо localStorage ще не ініціалізований, то ініціалізуємо його
if (!global.localStorage) {
  global.localStorage = localStorage;
}

describe("calculatingResult Function", () => {
  it("має рахувати прості вирази", () => {
    const inputField = { value: "2+3" } as HTMLTextAreaElement;
    calculatingResult(inputField.value, inputField);
    expect(inputField.value).to.equal(String(5));
  });
  it("має рахувати складні вирази", () => {
    const inputField = { value: "3-2+3×3÷2" } as HTMLTextAreaElement;
    calculatingResult(inputField.value, inputField);
    expect(inputField.value).to.equal(String(5.5));
  });
  it("має рахувати від'ємні числа", () => {
    const inputField = { value: "-2+3" } as HTMLTextAreaElement;
    calculatingResult(inputField.value, inputField);
    expect(inputField.value).to.equal(String(1));
  });
  it("має рахувати числа із десятковою точкою", () => {
    const inputField = { value: "1.5 + 2.7" } as HTMLTextAreaElement;
    calculatingResult(inputField.value, inputField);
    expect(inputField.value).to.equal(String(4.2));
  });
});
