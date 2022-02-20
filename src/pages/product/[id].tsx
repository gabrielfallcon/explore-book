import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { ProductDetails } from '../../components/ProductDetails';
import { ProductInfo } from '../../components/ProductInfo';
import { api } from '../../services/api';
import styles from './styles.module.scss';

export default function Product() {
  const [dataProduct, setDataProduct] = useState({} as any);
  const router = useRouter();

  const { id } = router.query;
  
  useEffect(() => {
    const requestData = async () => {
      if (!id) return;

      const response: any = await api.get(`volumes/${id}`);

      setDataProduct(response.data);
    }

    requestData();
  }, [id]);

  return (
    <main className={styles.container}>
      <section className={styles.contentProductInfo}>
        <div className={styles.contentImage}>
          {!!dataProduct?.volumeInfo?.imageLinks?.large ? (
            <img
              src={dataProduct?.volumeInfo?.imageLinks?.large}
              alt={dataProduct?.volumeInfo?.title}
              className={styles.productImage}
            />
          ) : (
            <p>Imagem não disponivel...</p>
          )}
        </div>
        <div className={styles.contentInfo}>
          <ProductInfo product={dataProduct} />

          <div className={styles.separator} />

          <div className={styles.contentButtons}>
            <div className={styles.accumulator}>
              <button className={styles.remove}>
                <FiMinus size={12}/>
              </button>
              1
              <button className={styles.add}>
                <FiPlus size={12}/>
              </button>
            </div>

            <button className={styles.addToCart}>
              Adicionar no Carrinho
            </button>
          </div>
        </div>
      </section>
    
      <section className={styles.contentProductDetails}>
        <ProductDetails product={dataProduct}/>
      </section>
    </main>
  )
}

