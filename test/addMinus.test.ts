import { expect } from "chai";
import { addMinus } from "../calculatorModuls/utils/addMinus";

describe("addMinus Function", () => {
  it("має додавати цифру без перевірки на мінус", () => {
    const inputField = { value: "-12" } as HTMLTextAreaElement;
    addMinus("3", inputField);
    expect(inputField.value).to.equal("-123");
  });
  it("має додавати мінус у пусте поле введення", () => {
    const inputField = { value: "" } as HTMLTextAreaElement;
    addMinus("-", inputField);
    expect(inputField.value).to.equal("-");
  });
  it("має додавати мінус після арефметичного знаку", () => {
    const inputField = { value: "12+" } as HTMLTextAreaElement;
    addMinus("-", inputField);
    expect(inputField.value).to.equal("12+-");
  });
});
