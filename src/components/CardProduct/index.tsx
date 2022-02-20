import styles from './styles.module.scss';

interface CardProductProps {
  product: any;
}

export const CardProduct = ({ product }: CardProductProps) => {
  console.log(product?.volumeInfo?.imageLinks?.large)
  return (
    <div className={styles.productCard}>
      <div className={styles.imageCard}>
        {!!product?.volumeInfo?.imageLinks?.large ? (
          <img 
            src={product?.volumeInfo?.imageLinks?.large} 
            alt={product?.volumeInfo?.title}
          />
        ): (
          <img 
            src={product?.volumeInfo?.imageLinks?.thumbnail} 
            alt={product?.volumeInfo?.title}
          />
        )}
      </div>
      {product?.volumeInfo?.title ? (
        <h1 className={styles.titleCard}>
          {product?.volumeInfo?.title}
        </h1>
      ) : (
        <h1 className={styles.titleCard}>
          Título indiponível..
        </h1>
      )}
    </div>
  )
}