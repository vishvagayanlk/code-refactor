import { render, screen } from '@testing-library/react';
import Card from '../components/card';

describe('Card component', () => {
  const mockCardProps = {
    title: 'Test Title',
    text: 'Test Text',
    target: '_blank',
    linkTitle: 'Test Link',
    href: 'https://example.com',
    rel: '',
    onClick: jest.fn(),
    linkClassName: 'test-class',
  };

  it('should render card with title, text, and link', () => {
    render(<Card {...mockCardProps} />);
    const titleElement = screen.getByTestId('card-title');
    const textElement = screen.getByTestId('card-text');
    const linkElement = screen.getByText('Test Link');
    expect(titleElement).toBeDefined();
    expect(textElement).toBeDefined();
    expect(linkElement).toBeDefined();
  });

  // Add more test cases as needed
});
