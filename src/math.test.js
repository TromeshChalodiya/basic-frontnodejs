import { it, expect } from "vitest";
import { add } from "./math";

it("should summarize all number values in an array", () => {
  // Arrange
  const numbers = [1, 2];

  // Act
  const sumOfNumber = add(numbers);

  // Assert
  const expectedResult = numbers.reduce((acc, number) => acc + number, 0);
  expect(sumOfNumber).toBe(expectedResult);
});

it("should yeild NaN if a least one invalid valus is provided", () => {
  const numbers = ["invalid", 1];

  const sumOfNumber = add(numbers);

  expect(sumOfNumber).toBeNaN();
});

it("should yield a correct sum if an array of numberic string values is provided", () => {
  // Arrange
  const numbers = ["1", "2"];

  // Act
  const sumOfNumber = add(numbers);

  // Assert
  const expectedResult = numbers.reduce((acc, number) => +acc + +number, 0);
  expect(sumOfNumber).toBe(expectedResult);
});

it("should yield 0 if an empty array is provided", () => {
  const numbers = [];

  const sumOfNumber = add(numbers);

  expect(sumOfNumber).toBe(0);
});

it("should throw an error if no value is passed into the function", () => {
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrowError(/is not iterable/);
});

it("should throw an error if provided with multiple arguments instead of an array", () => {
  const num1 = 1;
  const num2 = 2;

  const resultFn = () => {
    add(num1, num2);
  };

  expect(resultFn).toThrow(/is not iterable/);
});
