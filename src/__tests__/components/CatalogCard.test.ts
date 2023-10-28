import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CatalogCard from 'src/components/CatalogCard/CatalogCard';

describe('<Catalog Card />', () => {
  it('should render a div with class "catalog-card"', () => {
    const { container } = render(
      CatalogCard({ title: '', img: '', price: '' })
    );
    expect(container.getElementsByClassName('catalog-card')).toHaveLength(1);
  });

  it('should display the formatted title when the title has more than two words', () => {
    const { getByText } = render(
      CatalogCard({ title: 'This is a long title', img: '', price: '' })
    );
    expect(getByText('This is')).toBeTruthy();
  });

  it('should display the price like "From ... EURO"', () => {
    const { getByText } = render(
      CatalogCard({ title: '', img: '', price: '10' })
    );
    expect(getByText('From 10 EURO')).toBeTruthy();
  });

  it('should render with invalid props', () => {
    const { container } = render(
      CatalogCard({ title: 'Title', img: 'invalid', price: '10' })
    );
    expect(container.getElementsByClassName('catalog-card')).toHaveLength(1);
  });
});