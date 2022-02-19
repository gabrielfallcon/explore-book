import { FiBook } from 'react-icons/fi';
import styles from './styles.module.scss';


interface ResultItemProps {
  title: string;
}

export const ResultItem = ({ title }: ResultItemProps) => {
  return(
    <div className={styles.resultItem}>
      <FiBook color='#d44e4d'/> 
      <span>{title}</span>
    </div>
  )
}