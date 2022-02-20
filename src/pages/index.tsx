import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { api } from '../services/api';
import styles from '../styles/styles.module.scss';
import Link from 'next/link';
import { CardProduct } from '../components/CardProduct';

export default function Home() {
  const [dataBook, setDataBook] = useState([]);

  
  const requestData = async (e) => {
    e.preventDefault();
    
    const { value } = e.target;
    
    if (!value) {
      setDataBook([]);

      return;
    } 

    const response = await api.get(`volumes?q=${value}&maxResults=40`);
    
    const { items } = response.data;

    setDataBook(items);
   
  }

  return (
    <main className={styles.container}>
      <section className={styles.contentSearch}>
        <h2 className={styles.subTitle}>Pesquise por um livro</h2>
        <h1 className={styles.title}>Aqui na <span>Explore Book</span> você encontra seus livros!</h1>

        <div className={styles.contentIniput}>
          <input 
            onChange={requestData}
            placeholder="Pesquise o nome do livro" 
          />
          <FiSearch size={20} />
        </div>

        <div className={styles.boxListResult}>

          {!!dataBook?.length && (
              <div className={styles.boxListResult}>
                {dataBook.map(item => (
                  <Link href={`/product/${item.id}`} key={item.id}>
                    <a>
                      <CardProduct product={item}/>
                    </a>
                  </Link>
                ))}
              </div>
            )}
        </div>
      </section>
    </main>
  )
}
