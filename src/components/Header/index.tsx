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
        <a href="#" className={styles.active}>Home</a>
        <Link href="/wishlist">
          <a>My Favorites</a>
        </Link>
        <a href="#">All books</a>
      </nav>
    </header>
  )
}