import React from "react";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { ItemsProps } from 'types/Product';
import styles from './styles.module.scss';
import clsx from 'clsx';

interface WishButtonProps {
  isActive: boolean;
  handleAdd: (product: ItemsProps, id: string) => void;
  handleRemove: (id: string) => void;
  product: ItemsProps;
  id: string;
}

export const WishButton = ({ isActive, handleAdd, handleRemove, product, id }: WishButtonProps) => {
  return (
    isActive ? (
      <FaHeart 
        className={clsx(styles.wishList, 'wish-active')}
        onClick={() => handleRemove(id)}
        color="red"
        size={20}
      />
    ) : (
      <FiHeart 
        className={clsx(styles.wishList, 'wish-disabled')}
        onClick={() => handleAdd(product, id)}
        color='#191919'
        size={20} 
      />
    )
  )
}