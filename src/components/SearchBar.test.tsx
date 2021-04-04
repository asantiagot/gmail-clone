import { render } from "@testing-library/react";
import { SearchBar, SearchBarProps } from "./SearchBar";

const props: SearchBarProps = {
  placeholder: 'Search mail',
  value: '',
  handleSearchbarChange: jest.fn(),
};

describe('Search bar test suite', () => {
  const { baseElement, queryByPlaceholderText } = render(<SearchBar {...props} />);
  it('renders without crashing', () => {
    expect(baseElement).toBeDefined();
  });

  it('displays placeholder according to props', () => {
    expect(queryByPlaceholderText('Search mail')).toBeDefined();
  });
});
