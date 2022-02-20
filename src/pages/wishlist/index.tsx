import { useContext } from 'react';
import { WishListContext } from '../../context/WishListContext';
import Link from 'next/link';
import { CardProduct } from '../../components/CardProduct';
import styles from './styles.module.scss';

export default function WishList() {
  const { dataWish } = useContext(WishListContext);
  console.log(dataWish);
  return (
    dataWish.length ? (
      <main className={styles.container}>
        <section className={styles.contentWishList}>
          <h1 className={styles.title}>
            Aqui está todos os seus livros Favoritos!
          </h1>

          <div className={styles.contentListResult}>
            {dataWish.map((book: any) => {
              console.log('caiu aqui');
              return (
                <Link href={`/product/${book.id}`} key={book.id}>
                  <a>
                    <CardProduct  product={book.items}/>
                  </a>
                </Link>
              )
            })}
          </div>
        </section>
      </main>
    ): (
      <p>
        Você não tem produtos em sua lista :/
      </p>
    )
  )
}