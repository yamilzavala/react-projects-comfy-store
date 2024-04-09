import React from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';


const PaginationContainer = () => {
    const {meta} = useLoaderData();
    const {pageCount, page} = meta?.pagination;
    const pages = Array.from({length: pageCount}, (_, idx) => idx + 1);

    const navigate = useNavigate();
    const {search, pathname} = useLocation();

    const handlePageChange = (pageNumber) => {
        const searchParams = new URLSearchParams(search);
        searchParams.set('page', pageNumber)
        navigate(`${pathname}?${searchParams.toString()}`)
    }

    if(pageCount < 2) return null;

    return (
        <div className='mt-16 flex justify-end'>
           <div className="join">
                {/* PREV */}
                <button onClick={() => {
                        let prevPage = page - 1;
                        if(prevPage < 3) prevPage = pageCount;
                        handlePageChange(prevPage)
                    }} 
                    className="join-item btn btn-xs sm:btn-md ">
                    prev
                </button> 

                {/* PAGES */}
                {pages.map(pageNumber => (
                    <button key={pageNumber} onClick={() => handlePageChange(pageNumber)} className={`join-item btn btn-xs sm:btn-md ${pageNumber === page ? 'bg-base-300 border-base-300' : ''}`}>
                        {pageNumber}
                    </button>     
                ))}

                {/* NEXT */}
                <button onClick={() => {
                        let nextPage = page + 1;
                        if(nextPage > pageCount) nextPage = 1;
                        handlePageChange(nextPage)
                    }} className="join-item btn btn-xs sm:btn-md ">
                    next
                </button> 
           </div>
        </div>
    );
};

export default PaginationContainer;