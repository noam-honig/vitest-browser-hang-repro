import { it, expect } from "vitest"
import { makeTitle } from "../core/src/column"

it("test", () => {
  expect(1 + 1).toBe(2)
  expect(makeTitle("noam")).toBe("Noam")
})
