import { useCallback, useState } from 'react';
import { FiSearch, FiBook } from 'react-icons/fi';
import { ResultItem } from '../components/ResultItem';
import { api } from '../services/api';
import styles from '../styles/styles.module.scss';

export default function Home() {
  const [dataBook, setDataBook] = useState([]);

  
  const requestData = async (e) => {
    e.preventDefault();
    
    const { value } = e.target;
    
    if (!value) {
      setDataBook([]);

      return;
    } 

    const response = await api.get(`volumes?q=${value}`);
    
    const { items } = response.data;

    setDataBook(items);
   
  }
  console.log(dataBook)
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

          {!!dataBook?.length && (
            <div className={styles.boxListResult}>
              {dataBook.map(item => (
                <ResultItem key={item.id} title={item.volumeInfo.title}/>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
