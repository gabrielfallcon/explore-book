import React, { useState, useContext, useEffect } from 'react';
import { convertPrice } from 'utils/convertPrice';
import { WishListContext } from 'context/WishListContext';
import { DataProps } from 'types/Product';
import ReactStars from 'react-rating-stars-component';
import { FaHeart } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import styles from './styles.module.scss';

interface ProductInfoProps {
  product: any;
}

export function ProductInfo({ ...props }: DataProps) {
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

  const convertAmount = convertPrice(props?.product?.saleInfo?.retailPrice?.amount);
  
  useEffect(() => {
    const isValidId = dataWish.findIndex((item: any) => {
      if (item?.id === props?.product.id) {
        return setWishiList(true)
      };
    })
  }, [props?.product]);
  return (
    <div className={styles.contentInfoProduct}>
      <div className={styles.contentTitle}>
        <h1>{props?.product?.volumeInfo?.title}</h1> 

        {isActiveWishList ? (
          <FaHeart 
            className={styles.wishList}
            onClick={() => handleRemoveWishList(props?.product.id)}
            color="red"
            size={20}
          />
        ) : (
          <FiHeart 
            className={styles.wishList}
            onClick={() => handleAddWishList(props?.product, props?.product.id)}
            color='#191919'
            size={20} 
          />
        )}
      </div>
      {!!props?.product?.volumeInfo?.authors && (
        <div className={styles.contentSeller}>
          <p> 
            autor:
            <span> {props?.product?.volumeInfo?.authors[0]}</span>
          </p> 

          <ReactStars 
            count={5}
            value={5}
            size={12}
          />
        </div>
      )}
      <div className={styles.contentInfoPrice}>
        {!!props?.product?.saleInfo?.retailPrice?.amount ? (
          <span>{convertAmount}</span> 
        ): (
          <span>Preço indisponível momento</span>
        )}
      </div>
    </div>
  )
}