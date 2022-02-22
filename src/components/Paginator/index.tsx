import { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { CardProduct } from 'components/CardProduct';
import { PaginateProps } from 'types/Paginate';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styles from './styles.module.scss';

const PaginateDynamic = dynamic(() => import('react-paginate'));

export const Paginator = ({ booksPerPage, dataBook }: PaginateProps) => {
  const [pageNumber, setPageNumber] = useState(0);

  // const booksPerPage = 10;
  const pagesVisited = pageNumber * booksPerPage;

  const displayBooks = dataBook.slice(pagesVisited, pagesVisited + booksPerPage);

  const pageCount = Math.ceil(dataBook.length / booksPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  }
  return (
    !!dataBook?.length && (
      <>
        <div className={styles.boxListResult}>
          {displayBooks.map(item => (
            <Link href={`/product/${item.id}`} key={item.id}>
              <a>
                <CardProduct product={item}/>
              </a>
            </Link>
          ))}
        </div>

        <PaginateDynamic 
          previousLabel={<FiChevronLeft color="#ffffff" size={24}/>}
          nextLabel={<FiChevronRight color="#ffffff" size={24}/>}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={styles.paginationButtons}
          previousLinkClassName={styles.previousButton}
          nextLinkClassName={styles.nextButton}
          disabledClassName={styles.paginationDisabled}
          activeClassName={styles.paginationActive}
        />
      </>
    )
  )
}