import { it, expect, describe } from "vitest";

import { validateStringNotEmpty, validateNumber } from "./validation";

describe("validateStringNotEmpty()", () => {
  it("should check if empty string is provided", () => {
    // Arrange
    const value = "";

    // Act
    const checkIfError = () => validateStringNotEmpty(value);

    expect(checkIfError).toThrow();
  });

  it("should thorw 'Invalid input - must not be empty' error message", () => {
    // Arrange
    const value = "";

    // Act
    const checkIfError = () => validateStringNotEmpty(value);

    expect(checkIfError).toThrowError(/Invalid input - must not be empty./);
  });

  it("should not throw an error if non-empty string is provided", () => {
    const value = "string";

    const result = () => validateStringNotEmpty(value);

    expect(result).not.toThrow();
  });

  it("should throw an error if any other value is provided", () => {
    const inputNum = 1;
    const inputBool = true;
    const inputObj = {};

    const validationFnNum = () => validateStringNotEmpty(inputNum);
    const validationFnBool = () => validateStringNotEmpty(inputBool);
    const validationFnObj = () => validateStringNotEmpty(inputObj);

    expect(validationFnNum).toThrow();
    expect(validationFnBool).toThrow();
    expect(validationFnObj).toThrow();
  });
});

describe("validateNumber()", () => {
  it("should throw an error if NaN is provided", () => {
    // Arrange
    const value = NaN;

    // Act
    const validateNumError = () => validateNumber(value);

    // Assert
    expect(validateNumError).toThrow();
  });

  it("should thorw 'Invalid number input.' error message", () => {
    // Arrange
    const value = "dasdaddas";

    // Act
    const validateNumError = () => validateNumber(value);

    // Assert
    expect(validateNumError).toThrowError(/Invalid number input./);
  });

  it("should throw an error if non-numeric value is provided", () => {
    const value = "1";

    const validateNumError = () => validateNumber(value);

    expect(validateNumError).toThrow();
  });

  it("should not throw an error if numeric value is provided", () => {
    const value = 1;

    const validateNumError = () => validateNumber(value);

    expect(validateNumError).not.toThrow();
  });
});
