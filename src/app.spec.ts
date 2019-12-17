import { filterEvenNumber } from "@app";

test("Filter function can filter even number", () => {
  expect(filterEvenNumber(2)).toBeTruthy();
  expect(filterEvenNumber(1)).toBeFalsy();
});
