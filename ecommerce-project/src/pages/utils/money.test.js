import { it, describe, expect } from "vitest";
import formatCurrency from "./money";

describe("format money", () => {
  it("formats the 1999 cents as $19.99", () => {
    expect(formatCurrency(1999)).toBe("$19.99");
  });
  it("displays the two decimal points", () => {
    expect(formatCurrency(1090)).toBe("$10.90");
    expect(formatCurrency(100)).toBe("$1.00");
    expect(formatCurrency(0)).toBe("$0.00");
    expect(formatCurrency(-999)).toBe("-$9.99");
    expect(formatCurrency(-100)).toBe("-$1.00");
  });
});
