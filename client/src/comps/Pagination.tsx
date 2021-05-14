import React from 'react'

interface PaginationProps {
    currentPage: number;
    maxPageNumber: number;
    paginate: any;

}

const Pagination = ({currentPage, maxPageNumber, paginate}: PaginationProps) => {

    const pageNumber = []

    for (let i = 1; i < maxPageNumber ; i++){
        pageNumber.push(i)
    }

    return (
        <div>
        {pageNumber.map(item => 
            <button key={item} onClick={() => paginate(item)}>{item}</button>
        )}
    </div>
    )
}

export default Pagination
