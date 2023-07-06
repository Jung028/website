import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

const toggleMenu = () => {
  setMenuOpen(!menuOpen);
  const navList = document.querySelector('.nav-list');
  navList.style.opacity = menuOpen ? '0' : '1';
  navList.style.visibility = menuOpen ? 'hidden' : 'visible';
};

