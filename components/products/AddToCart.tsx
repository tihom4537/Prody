'use client'
import React, { useEffect, useState } from 'react';
import useCartService from '@/lib/hooks/useCartStore';
import { OrderItem } from '@/lib/models/OrderModel';

const AddToCart = ({ item }: { item: OrderItem }) => {
  const { items, increase, decrease } = useCartService();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const existItem = items.find((x) => x.slug === item.slug);
    setCount(existItem ? existItem.qty : 0);
  }, [item, items]);

  const addToCartHandler = () => {
    console.log("Count:", count);
    if (count >= 5) {
      alert("Your limit has been reached. You can't buy more than 5.");
    } else {
      increase(item);
      setCount(count + 1);
    }
  };

  return (
    <div>
      <button className="btn" type="button" onClick={() => decrease(item)}>
        -
      </button>
      <span className="px-2">{count}</span>
      <button className="btn" type="button" onClick={() => addToCartHandler()}>
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
