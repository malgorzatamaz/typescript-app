import { render } from "@testing-library/react";

import Header from "../Header";

test("renders header", () => {
  const element = render(<Header />);
  expect(element).toMatchSnapshot();
});
