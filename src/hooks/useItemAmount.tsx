import { useCallback } from 'react';
import useCart from 'src/store/cartStore';
import { IProduct } from 'src/types/product.type';

type Props = {
  product: IProduct;
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
  type: 'dec' | 'inc';
};

export default function useItemAmount({
  product,
  amount,
  setAmount,
  type,
}: Props) {
  const { addOrRemoveProductItem } = useCart();

  const updateAmount = useCallback(() => {
    if (type === 'dec' && amount > 0) {
      const newAmount = amount - 1;
      setAmount(newAmount);
      addOrRemoveProductItem(product.id, newAmount);
    } else if (type === 'inc' && amount < 20) {
      const newAmount = amount + 1;
      setAmount(newAmount);
      addOrRemoveProductItem(product.id, newAmount);
    }
  }, [type, amount, setAmount, addOrRemoveProductItem, product.id]);

  return updateAmount;
}
