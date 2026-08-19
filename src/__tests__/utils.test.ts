import { cn } from "@/lib/utils";

describe("cn (Tailwind class merger)", () => {
  it("passes through a single class unchanged", () => {
    expect(cn("px-4")).toBe("px-4");
  });

  it("merges multiple classes into a single string", () => {
    expect(cn("flex", "items-center", "gap-2")).toBe("flex items-center gap-2");
  });

  it("resolves Tailwind conflicts — last value wins", () => {
    // twMerge should keep the last padding utility, not concatenate both
    expect(cn("px-2", "px-4")).toBe("px-4");
    expect(cn("text-sm", "text-lg")).toBe("text-lg");
  });

  it("filters out falsy values without throwing", () => {
    expect(cn("flex", false && "hidden", undefined, null, "gap-4")).toBe(
      "flex gap-4"
    );
  });

  it("supports conditional class syntax via clsx", () => {
    const isActive = true;
    const isDisabled = false;
    expect(cn("btn", isActive && "btn-active", isDisabled && "btn-disabled")).toBe(
      "btn btn-active"
    );
  });

  it("flattens nested arrays", () => {
    expect(cn(["flex", "gap-2"], ["items-center"])).toBe("flex gap-2 items-center");
  });
});
