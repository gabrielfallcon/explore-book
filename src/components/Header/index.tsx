import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.containerHeader}>
      <img src="#" alt="logo-book"/>
      
      <nav className={styles.contentNav}>
        <a href="#" className={styles.active}>Home</a>
        <a href="#">My Favorites</a>
        <a href="#">All books</a>
      </nav>
    </header>
  )
}