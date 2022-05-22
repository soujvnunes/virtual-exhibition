import isProp from "./isProp";

describe("isProp", () => {
  describe("with strings", () => {
    it("should be truthy when at least one of the values is equal to the prop", () => {
      expect(isProp("a", ["a", "b"])).toBe(true);
    });
    it("should be falsy when any value isn't equal to the prop", () => {
      expect(isProp("a", ["b", "c"])).toBe(false);
    });
    it("should be truthy when at least one of the values is equal to one of the props", () => {
      expect(isProp(["a", "b"], ["a", "c"])).toBe(true);
    });
    it("should be falsy when any value isn't equal to any prop", () => {
      expect(isProp(["a", "b"], ["c", "d"])).toBe(false);
    });
  });
  describe("with string and numbers", () => {
    it("should be truthy when at least one of the values is equal to the prop", () => {
      expect(isProp(1, [1, "b"])).toBe(true);
    });
    it("should be falsy when any value isn't equal to the prop", () => {
      expect(isProp(1, ["b", 2])).toBe(false);
    });
    it("should be truthy when at least one of the values is equal to one of the props", () => {
      expect(isProp([1, 2], ["a", 2])).toBe(true);
    });
    it("should be falsy when any value isn't equal to any prop", () => {
      expect(isProp([1, "b"], ["c", 2])).toBe(false);
    });
  });
  describe("with numbers and booleans", () => {
    it("should be truthy when at least one of the values is equal to the prop", () => {
      expect(isProp(false, [true, false])).toBe(true);
    });
    it("should be falsy when any value isn't equal to the prop", () => {
      expect(isProp(false, [true, 0])).toBe(false);
    });
    it("should be truthy when at least one of the values is equal to one of the props", () => {
      expect(isProp([true, 2], ["a", 2])).toBe(true);
    });
    it("should be falsy when any value isn't equal to any prop", () => {
      expect(isProp([1, false], [true, 2])).toBe(false);
    });
  });
  describe("with booleans and undefined case", () => {
    it("should be truthy when at least one of the values is equal to the prop", () => {
      expect(isProp(undefined, [true, undefined])).toBe(true);
    });
    it("should be falsy when any value isn't equal to the prop", () => {
      expect(isProp(undefined, [true, false])).toBe(false);
    });
    it("should be truthy when at least one of the values is equal to one of the props", () => {
      expect(isProp([true, undefined], [undefined, 2])).toBe(true);
    });
    it("should be falsy when any value isn't equal to any prop", () => {
      expect(isProp([undefined, false], [true, true])).toBe(false);
    });
  });
});
