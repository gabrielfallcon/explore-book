import React, { useState, useContext, useEffect } from 'react';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import styles from './styles.module.scss';
import ReactStars from 'react-rating-stars-component';
import { WishListContext } from '../../context/WishListContext';

interface ProductInfoProps {
  product: any;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const { dataWish, removeToWishList, addToWishList } = useContext(WishListContext);

  const [isActiveWishList, setWishiList] = useState(false);

  
  const handleAddWishList = (data, id) => {
    setWishiList(!isActiveWishList);
    addToWishList(data, id);
  }

  const handleRemoveWishList = (id) => {
    setWishiList(!isActiveWishList);
    removeToWishList(id);
  }

  const convertPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(product?.saleInfo?.retailPrice?.amount);

  
  useEffect(() => {
    const isValidId = dataWish.findIndex((item: any) => {
      if (item?.id === product.id) {
        return setWishiList(true)
      };
    })
  }, [product]);
  return (
    <div className={styles.contentInfoProduct}>
      <div className={styles.contentTitle}>
        <h1>{product?.volumeInfo?.title}</h1> 

        {isActiveWishList ? (
          <FaHeart 
            className={styles.wishList}
            onClick={() => handleRemoveWishList(product.id)}
            color="red"
            size={20}
          />
        ) : (
          <FiHeart 
            className={styles.wishList}
            onClick={() => handleAddWishList(product, product.id)}
            color='#191919'
            size={20} 
          />
        )}
      </div>
      {!!product?.volumeInfo?.authors && (
        <div className={styles.contentSeller}>
          <p> 
            autor:
            <span> {product?.volumeInfo?.authors[0]}</span>
          </p> 

          <ReactStars 
            count={5}
            value={5}
            size={12}
          />
        </div>
      )}
      <div className={styles.contentInfoPrice}>
        {!!product?.saleInfo?.retailPrice?.amount ? (
          <span>{convertPrice}</span> 
        ): (
          <span>Preço indisponível momento</span>
        )}
      </div>
    </div>
  )
}