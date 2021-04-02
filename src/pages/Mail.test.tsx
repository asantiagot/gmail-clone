import { render } from "@testing-library/react";
import { Mail } from "./Mail";

describe('Mail page test suite', () => {
  it('renders without crashing', () => {
    const { baseElement } = render(<Mail/>);
    expect(baseElement).toBeDefined();
  });

  it(`should display a two-row grid Layout`, () => {
    const { getByTestId } = render (<Mail />);
    const firstRow = getByTestId(`firstRow`);
    const secondRow = getByTestId(`secondRow`);
    expect(firstRow).toBeDefined();
    expect(secondRow).toBeDefined();
  });
});
