import Link from 'next/link';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.containerHeader}>
      <Link href='/'>
        <a>
          <img 
            src='/images/book.png'
            width='80'
          />
        </a>
      </Link>
      
      <nav className={styles.contentNav}>
        <Link href="/">
          <a>Início</a>
        </Link>
        <Link href="/wishlist">
          <a>Meus Favoritos</a>
        </Link>
      </nav>
    </header>
  )
}