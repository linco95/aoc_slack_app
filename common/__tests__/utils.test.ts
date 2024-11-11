import { getDefaultYear } from "../utils.ts";
import {
  assertEquals,
} from "std/assert/mod.ts";

Deno.test("getDefaultYear", async (t) => {

  type TestCase = [msg: string, currentDate: string, expectedYear: number];
  const testCases: TestCase[] = [
    ["Returns the current year if it is December", "2021-12-01", 2021],
    ["Returns the previous year if it is not December", "2021-11-01", 2020],
    ["Returns the previous year if it is January", "2021-01-01", 2020],
  ];

  for (const [msg, currentDate, expectedYear] of testCases) {
    await t.step(msg, () => {
      const actualYear = getDefaultYear(new Date(currentDate));
      assertEquals(actualYear, expectedYear);
    });
  }
});
