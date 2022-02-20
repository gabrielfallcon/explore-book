import { useEffect, useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import styles from './styles.module.scss';

interface ProductDetailsProps {
  product: any;
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [isShowText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(false);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.contentDescription}>
        <h2>Descrição</h2>

        {!!product?.volumeInfo?.description ? (
          <>
            <p className={isShowText && styles.showActive}>
              {product?.volumeInfo?.description}
            </p>

            <button 
              className={styles.buttonShowText}
              onClick={() => setShowText(!isShowText)}
            >
              {isShowText ? (
                <>
                  Ler Menos
                  <FiChevronUp />
                </> 
              ) : ( 
                <>
                  Ler Mais
                  <FiChevronDown />
                </>
              )}
            </button>
          </>
        ): (
          <p>
            Sem Descrição...
          </p>
        )}
      </div>

      <div className={styles.separator} />

      <div className={styles.contentDetails}>
        <h2>Detalhes do produto</h2>

        <p>
          <span>Editora:</span> {product?.volumeInfo?.publisher}
        </p>
        {!!product?.volumeInfo?.authors ? (
          <p>
            <span>Autor:</span> {product?.volumeInfo?.authors[0]}
          </p>
        ): (
          <p>
            Sem Descrição...
          </p>
        )}
        <p>
          <span>Capa comum:</span> {product?.volumeInfo?.pageCount} páginas
        </p>
        <p>
          <span>Publicado em:</span> {product?.volumeInfo?.publishedDate}
        </p>
      </div>
    </div>
  )
}