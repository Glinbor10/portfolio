import { describe, expect, it } from "vitest";
import { t } from "./i18n";

describe("t", () => {
  it("returns the Spanish value for lang='es'", () => {
    expect(t({ es: "Hola", en: "Hello" }, "es")).toBe("Hola");
  });

  it("returns the English value for lang='en'", () => {
    expect(t({ es: "Hola", en: "Hello" }, "en")).toBe("Hello");
  });
});
