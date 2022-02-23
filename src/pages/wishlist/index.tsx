import { useContext } from 'react';
import { WishListContext } from 'context/WishListContext';
import Link from 'next/link';
import { CardProduct } from 'components/CardProduct';
import styles from './styles.module.scss';
import { MessageError } from 'components/MessageError';

export default function WishList() {
  const { dataWish } = useContext(WishListContext);
  
  return (
    dataWish.length ? (
      <main className={styles.container}>
        <section className={styles.contentWishList}>
          <h1 className={styles.title}>
            Aqui está todos os seus livros Favoritos!
          </h1>

          <div className={styles.contentListResult}>
            {dataWish.map((book: any) => {
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
      <MessageError title="Você não tem livros em sua lista de favoritos 📚" />
    )
  )
}