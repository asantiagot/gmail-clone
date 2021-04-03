import { render } from "@testing-library/react";
import { Sidebar, SidebarProps } from "./Sidebar";

describe('Sidebar test suite', () => {
  const props: SidebarProps = {
    main: ['Inbox', 'Starred', 'Sent', 'Trash'],
    extra: ['Work', 'Travel'],
  }
  const { baseElement, queryByText } = render(<Sidebar {...props} />);

  it('renders without crashing', () => {
    expect(baseElement).toBeDefined();
  });

  it('renders categories according to props', () => {
    expect(queryByText('Inbox')).toBeDefined();
    expect(queryByText('Starred')).toBeDefined();
    expect(queryByText('Sent')).toBeDefined();
    expect(queryByText('Trash')).toBeDefined();
  });
})