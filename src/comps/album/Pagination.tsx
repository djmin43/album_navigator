import React from 'react'

interface PaginationProps {
    currentPage: number;
    maxPageNumber: number;
    paginate: (pageNumber: number) => void;

}

const Pagination = ({currentPage, maxPageNumber, paginate}: PaginationProps) => {

    const pageNumber = []

    for (let i = 1; i < maxPageNumber ; i++){
        pageNumber.push(i)
    }

    return (
        <div className="pagination">
        {pageNumber.map(item => 
            <button key={item} onClick={() => paginate(item)}>{item}</button>
        )}
    </div>
    )
}

export default Pagination
