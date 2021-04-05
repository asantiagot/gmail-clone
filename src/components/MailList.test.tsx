import { render } from "@testing-library/react";
import { Messages } from "../models/Messages";
import { MailList } from "./MailList";

const mailList: Messages = {
  mailList: [
      {id: '1', body: '<p>Lorem ipsum</p>', date: '20/12/21', sender: 'Joao Lopez', subject: 'Your suscription confirmation', tags: []},
      {id: '2', body: '<p>Lo de marcos ipsum</p>', date: '20/12/21', sender: 'Juan Reynoso', subject: 'Your shipment', tags: []},
      {id: '3', body: '<p>Crazy fox</p>', date: '20/12/21', sender: 'Melon Musk', subject: 'Your reservation', tags: []},
      {id: '4', body: '<p>Some night</p>', date: '20/12/21', sender: 'Anthony Montana', subject: 'Opportunity at Company Inc.', tags: []},
      {id: '5', body: '<p>Wild strawberries</p>', date: '20/12/21', sender: 'John Doe', subject: 'The new product has arrived', tags: []},
  ],
};

describe('MailList test suite', () => {
  const { baseElement } = render(<MailList {...mailList} />);
  it('renders without crashing', () => {
    expect(baseElement).toBeDefined();
  });

  it('displays a table and tbody structure', () => {
    const { getByTestId } = render(<MailList {...mailList} />);
    const mailTable = getByTestId('mail-table');
    const mailTableBody = getByTestId('mail-tbody');
    expect(mailTable).toBeDefined();
    expect(mailTableBody).toBeDefined();
  });

  it('should render 5 mail rows', () => {
    const { getByTestId } = render(<MailList {...mailList} />);
    expect(getByTestId(`mail-list-${1}`)).toBeDefined();
    expect(getByTestId(`mail-list-${2}`)).toBeDefined();
    expect(getByTestId(`mail-list-${3}`)).toBeDefined();
    expect(getByTestId(`mail-list-${4}`)).toBeDefined();
    expect(getByTestId(`mail-list-${5}`)).toBeDefined();
  });
});
