import { expect } from "chai";
import jsdomGlobal from "jsdom-global";
import { addValues } from "../calculatorModuls/utils/addVulues";
describe("addValues Function", () => {
  let cleanup: () => void; // Function to cleanup jsdom after tests
  let inputField: HTMLTextAreaElement;

  beforeEach(() => {
    // Set up a fake DOM environment
    cleanup = jsdomGlobal();
    // Create a textarea element
    inputField = document.createElement("textarea");
    inputField.value = ""; // Initialize value
  });

  afterEach(() => {
    // Cleanup the fake DOM environment
    cleanup();
  });

  it("має додати цифру в поле вводу", () => {
    addValues("5", inputField);
    expect(inputField.value).to.equal("5");
  });

  it("має додати крапку в поле вводу після числа", () => {
    inputField.value = "10";
    addValues(".", inputField);
    expect(inputField.value).to.equal("10.");
  });

  it("не має додавати крапку, якщо вже є після числа", () => {
    inputField.value = "10.";
    addValues(".", inputField);
    expect(inputField.value).to.equal("10.");
  });

  it("не має додавати крапку, якщо останній символ не є числом", () => {
    inputField.value = "+";
    addValues(".", inputField);
    expect(inputField.value).to.equal("+");
  });

  it("має додати оператор в поле вводу, якщо в кінці є число", () => {
    inputField.value = "8";
    addValues("+", inputField);
    expect(inputField.value).to.equal("8+");
  });

  it("має замінити останній оператор, якщо додається новий", () => {
    inputField.value = "8+";
    addValues("-", inputField);
    expect(inputField.value).to.equal("8-");
  });

  it("має обробляти різні сценарії", () => {
    inputField.value = "5+3*";
    addValues("2", inputField);
    expect(inputField.value).to.equal("5+3*2");
  });
});
