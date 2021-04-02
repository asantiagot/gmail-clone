import { render } from "@testing-library/react"
import { HomeLogo, HomeLogoProps } from "./HomeLogo";

const props: HomeLogoProps = {
  src: `${process.env.PUBLIC_URL}gmail-logo.png`,
  title: 'gmail',
}

describe('Home Logo test suite', () => {
  const { baseElement, queryByText } = render(<HomeLogo {...props}/>);
  it('renders without crashing', () => {
    expect(baseElement).toBeDefined();
  });

  it('displays title string according to props', () => {
    expect(queryByText('gmail')).toBeDefined();
  });
});
