import { classNames } from '@/utilities/functions/classNames'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const items = [
  { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
]

interface PaginationProps {
    setPage: (page: number) => void,
    page: number,
}

const Pagination = ({setPage, page} : PaginationProps) => {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing page <span className="font-medium"> {page}</span>
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a
              href="#"
              onClick={() => setPage(page-1)}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            <a
              href="#"
              onClick={() => setPage(1)}
              aria-current="page"
              className={classNames(
                "relative items-center inline-flex px-4 py-2 text-sm font-semibold focus:z-20",
                page == 1 ? 
                "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                :
                "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50  focus:outline-offset-0"
              )}
            >
              1
            </a>
            <a
              href="#"
              onClick={() => setPage(2)}
              className={classNames(
                "relative items-center inline-flex px-4 py-2 text-sm font-semibold focus:z-20",
                page == 2 ? 
                "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                :
                "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50  focus:outline-offset-0"
              )}
            >
              2
            </a>
            <a
              href="#"
              onClick={() => setPage(3)}
              className={classNames(
                "relative items-center inline-flex px-4 py-2 text-sm font-semibold focus:z-20",
                page == 3 ? 
                "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                :
                "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50  focus:outline-offset-0"
              )}
              >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              ...
            </span>
            <a
              href="#"
              onClick={() => setPage(8)}
              className={classNames(
                "relative items-center inline-flex px-4 py-2 text-sm font-semibold focus:z-20",
                page == 8 ? 
                "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                :
                "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50  focus:outline-offset-0"
              )}
              >
              8
            </a>
            <a
              href="#"
              onClick={() => setPage(9)}
              className={classNames(
                "relative items-center inline-flex px-4 py-2 text-sm font-semibold focus:z-20",
                page == 9 ? 
                "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                :
                "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50  focus:outline-offset-0"
              )}
              >
              9
            </a>
            <a
              href="#"
              onClick={() => setPage(10)}
              className={classNames(
                "relative items-center inline-flex px-4 py-2 text-sm font-semibold focus:z-20",
                page == 10 ? 
                "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                :
                "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50  focus:outline-offset-0"
              )}
              >
              10
            </a>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              ...
            </span>
            {page > 10 && <a
              href="#"
              onClick={() => setPage(10)}
              className={classNames(
                "relative items-center inline-flex px-3 py-2 text-sm font-semibold focus:z-20",
                "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                ,
                "text-gray-900 ring-1 ring-inset focus:outline-offset-0"
              )}
              >
              {page}
            </a>}
            <a
              href="#"
              onClick={() => setPage(page+1)}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Pagination
