import createMeta from "./createMeta";

it("creates <meta /> with name and content attrs", () => {
  createMeta({
    name: "name",
    content: "content",
  });

  const selectedMeta = document.querySelector(
    "meta[name='name']",
  ) as HTMLMetaElement | null;

  expect(selectedMeta?.content).toBe("content");
});
