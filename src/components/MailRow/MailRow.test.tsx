import { render } from "@testing-library/react";
import { Mail } from "../models/Mail";
import { MailRow } from "./MailRow";

const mail: Mail = {
 id: '1', body: '<p>Lorem ipsum</p>', date: '20/12/21', sender: 'Joao Lopez', subject: 'Your suscription confirmation', tags: [],
};

describe('MailRow test suite', () => {
  const { baseElement } = render(<MailRow mail={mail} id={0} />);
  it('renders without crashing', () => {
    expect(baseElement).toBeDefined();
  });

  it('should render Sender & Subject', () => {
    const { getByText } = render(<MailRow mail={mail} id={0} />);
    expect(getByText(`Joao Lopez`)).toBeDefined();
    expect(getByText(`Your suscription confirmation`)).toBeDefined();
  });

});

