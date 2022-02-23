import Link from 'next/link';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';

export function Header() {
  const { asPath } = useRouter();

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
          <a className={asPath === '/' && styles.active}>
            Início
          </a>
        </Link>
        <Link href="/wishlist">
          <a className={asPath === '/wishlist' && styles.active}>
            Meus Favoritos
          </a>
        </Link>
      </nav>
    </header>
  )
}