import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.containerHeader}>
      <img 
        src='/images/book.png'
        width='80'
      />
      
      <nav className={styles.contentNav}>
        <a href="#" className={styles.active}>Home</a>
        <a href="#">My Favorites</a>
        <a href="#">All books</a>
      </nav>
    </header>
  )
}