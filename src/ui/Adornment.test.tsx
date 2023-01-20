import { render } from "@testing-library/react";
import { find } from "styled-components/test-utils";
import Adornment from "./Adornment";

describe("Adornment", () => {
  test("was found", () => {
    render(<Adornment />);

    expect(find(document.body, Adornment)).toBeTruthy();
  });
});
