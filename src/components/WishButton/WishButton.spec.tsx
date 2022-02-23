import { render, screen } from '@testing-library/react';
import { WishButton } from './index';

describe('Test Wish Button', () => {
  it('should show active wishButton', () => {
    const { container } = render(
      <WishButton 
        isActive={true}
        handleAdd={() => function(product: any, id: string){}}
        handleRemove={() => function(id: string){}}
        product={[] as any}
        id="123"
      />
    )

    const wishButtonClassName = container.querySelector('svg').classList[1];

    expect(wishButtonClassName).toBe('wish-active');
  });

  it('should show disable wishButton', () => {
    const { container } = render(
      <WishButton 
        isActive={false}
        handleAdd={() => function(product: any, id: string){}}
        handleRemove={() => function(id: string){}}
        product={[] as any}
        id="123"
      />
    );

    const wishButtonClassName = container.querySelector('svg').classList[1];

    expect(wishButtonClassName).toBe('wish-disabled');
  });
});