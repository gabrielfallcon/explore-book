import { useEffect, useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import styles from './styles.module.scss';
import { DataProps } from 'types/Product';

export const ProductDetails = ({ ...props }: DataProps) => {
  const [isShowText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(false);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.contentDescription}>
        <h2>Descrição</h2>

        {!!props?.product?.volumeInfo?.description ? (
          <>
            <p className={isShowText && styles.showActive}>
              {props?.product?.volumeInfo?.description}
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
          <span>Editora:</span> {props?.product?.volumeInfo?.publisher}
        </p>
        {!!props?.product?.volumeInfo?.authors ? (
          <p>
            <span>Autor:</span> {props?.product?.volumeInfo?.authors[0]}
          </p>
        ): (
          <p>
            Sem Descrição...
          </p>
        )}
        <p>
          <span>Capa comum:</span> {props?.product?.volumeInfo?.pageCount} páginas
        </p>
        <p>
          <span>Publicado em:</span> {props?.product?.volumeInfo?.publishedDate}
        </p>
      </div>
    </div>
  )
}