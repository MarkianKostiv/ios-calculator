import { button } from "./calculatorModuls/button";
import { buttonsContainer } from "./calculatorModuls/buttonsContainer";
import { fieldInput } from "./calculatorModuls/fieldInput";
import { arithmeticOperators } from "./calculatorModuls/utils/arrays/arithmeticOperators";
import { generateButtons } from "./calculatorModuls/utils/generateButtons";
import { numberForButton } from "./calculatorModuls/utils/arrays/numberForButton";
import { clearButton } from "./calculatorModuls/сlearButton";
import { resultButton } from "./calculatorModuls/resultButton";
import { buttonForNegativeNumbers } from "./calculatorModuls/buttonForNegativeNumbers";

const mainDiv = document.querySelector(".main-div");
const inputField = fieldInput();
const buttons = generateButtons(numberForButton, inputField, button, [
  "custom-class",
]);

const arithmeticButtons = generateButtons(
  arithmeticOperators,
  inputField,
  button,
  ["arithmetic-button"]
);

// const numbersBtnContainer = document.createElement("div");
// numbersBtnContainer.className = "number-container";
// numbersBtnContainer.append(...buttons);
const numbersBtnContainer = buttonsContainer("number-container", ...buttons);
const clearBtn1 = clearButton(inputField);
const presentBtn = button("%", inputField, "button-clear");
const negativeNum = buttonForNegativeNumbers("-", inputField);

const specialOperators = buttonsContainer(
  "special-operators-container",
  clearBtn1,
  negativeNum,
  presentBtn
);

const arithmeticContainerOperators = buttonsContainer(
  "arithmetic-container-operators",
  ...arithmeticButtons,
  resultButton("=", inputField)
);

const containerForNumAndSpecial = buttonsContainer(
  "container-for-num-and-special",
  specialOperators,
  numbersBtnContainer
);

const allButtonsContainer = buttonsContainer(
  "all-buttons",
  containerForNumAndSpecial,
  arithmeticContainerOperators
);

mainDiv?.append(inputField, allButtonsContainer);
