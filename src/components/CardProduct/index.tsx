import { DataProps } from 'types/Product';
import styles from './styles.module.scss';

interface CardProductProps {
  product: any;
}

export const CardProduct = ({ ...props }: DataProps) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageCard}>
        {!!props?.product?.volumeInfo?.imageLinks?.large ? (
          <img 
            src={props?.product?.volumeInfo?.imageLinks?.large} 
            alt={props?.product?.volumeInfo?.title}
          />
        ): (
          <img 
            src={props?.product?.volumeInfo?.imageLinks?.thumbnail} 
            alt={props?.product?.volumeInfo?.title}
          />
        )}
      </div>
      {props?.product?.volumeInfo?.title ? (
        <h1 className={styles.titleCard}>
          {props?.product?.volumeInfo?.title}
        </h1>
      ) : (
        <h1 className={styles.titleCard}>
          Título indiponível..
        </h1>
      )}
    </div>
  )
}