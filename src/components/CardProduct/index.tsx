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
      <h1 className={styles.titleCard}>
        {product?.volumeInfo?.title}
      </h1>

      <p className={styles.descriptionCard}>
        Editora: <span>{product?.volumeInfo?.publisher}</span>
      </p>
    </div>
  )
}