import { log } from 'console';

type PaginationProps = {
  numberPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

const Pagination = ({
  numberPages,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const pageNumbers = [...Array(numberPages + 1).keys()].slice(1);

  console.log('=== pageNumbers', pageNumbers);

  const goToNextPage = () => {
    if (currentPage !== numberPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <nav>
      <ul className='flex items-center justify-between'>
        <li className='w-[60px] h-[40px] rounded-l-full bg-blue-300 '>
          <a
            className='w-full h-full flex items-center justify-center'
            onClick={goToPrevPage}
            href='#'
          >
            Prev
          </a>
        </li>
        <div className='grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-1'>
          {pageNumbers.map((pgNumber) => (
            <li
              key={pgNumber}
              className={`w-[40px] h-[40px] rounded-full ${
                currentPage == pgNumber
                  ? 'bg-blue-800 text-white'
                  : 'bg-blue-300'
              } `}
            >
              <a
                onClick={() => setCurrentPage(pgNumber)}
                className='w-full h-full flex items-center justify-center'
                href='#'
              >
                {pgNumber}
              </a>
            </li>
          ))}
        </div>
        <li className='w-[60px] h-[40px] rounded-r-full bg-blue-300'>
          <a
            className='w-full h-full flex items-center justify-center'
            onClick={goToNextPage}
            href='#'
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
