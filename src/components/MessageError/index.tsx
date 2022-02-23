import styles from './styles.module.scss';

interface ErrorProps {
  title: string;
}

export const MessageError = ({ title }: ErrorProps) => {
  return (
    <div className={styles.contentError}>
      <span className={styles.titleError}>
        {/*  */}
        {title}
      </span> 
    </div>
  )
}