import isProp from "./isProp";

describe("utils.isProp", () => {
  it("should be truthy when at least one of the values is equal to the prop", () => {
    expect(isProp("a", ["a", "b"])).toBeTruthy();
  });
  it("should be falsy when any value isn't equal to the prop", () => {
    expect(isProp(1, ["b", 2])).toBeFalsy();
  });
  it("should be truthy when at least one of the values is equal to one of the props", () => {
    expect(isProp([true, 2], ["a", 2])).toBeTruthy();
  });
  it("should be falsy when any value isn't equal to any prop", () => {
    expect(isProp([undefined, false], [true, true])).toBeFalsy();
  });
  test("between same values with a different one added", () => {
    const weight = "bold";
    const style = "italic";

    expect(isProp([weight, style], ["bold", "italic", "light"])).toBeTruthy();
  });
});
