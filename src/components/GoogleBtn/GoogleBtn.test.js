import React from "react";
import { render } from "@testing-library/react";
import googleBtn from "./googleBtn";

describe("googleBtn tests", () => {
  it("should render", () => {
    expect(render(<googleBtn />)).toBeTruthy();
  });
});
