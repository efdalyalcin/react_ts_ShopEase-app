import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import CatalogCard from 'src/components/CatalogCard/CatalogCard';

describe('<Catalog Card />', () => {
  it('should render a div with class "catalog-card"', () => {
    const { container } = render(
      CatalogCard({ title: 'aa', img: 'aa', price: 'aa' })
    );
    expect(container.getElementsByClassName('catalog-card')).toHaveLength(1);
  });
});
