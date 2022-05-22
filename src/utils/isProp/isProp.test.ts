import isProp from "./isProp";

describe("isProp", () => {
  test("renders without crash", () => {
    const trueBool = true;
    const falseStr = "";
    const thing = "thing";

    expect(isProp(thing, ["otherThing", false])).toBe(false);
    expect(isProp(thing, ["otherThing", "thing"])).toBe(true);
    expect(isProp(trueBool, [false, falseStr])).toBe(false);
    expect(isProp(thing, ["otherThing", falseStr, "thing"])).toBe(true);
    expect(isProp(["otherThing", false], [true, 12, "thing"])).toBe(false);
    expect(isProp([thing, "otherThing"], [false, falseStr, "thing"])).toBe(
      true,
    );
  });
});
