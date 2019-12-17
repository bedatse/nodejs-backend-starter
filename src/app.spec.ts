import test from "ava";

import { filterEvenNumber } from "@app";

test("Filter function can filter even number", (t) => {
  t.true(filterEvenNumber(2));
  t.false(filterEvenNumber(1));
});
