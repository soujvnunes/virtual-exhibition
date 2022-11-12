import Adornment from "./Adornment";
import { find } from "styled-components/test-utils";
import { render } from "@testing-library/react";

describe("Adornment", () => {
  test("was found", () => {
    render(<Adornment />);

    expect(find(document.body, Adornment)).toBeTruthy();
  });
});
