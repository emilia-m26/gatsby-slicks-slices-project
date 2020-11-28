import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const PaginationStyles = styled.div`

`;

export default function Pagination({ pageSize, totalCount, currentPage, skip, base}) {
    const totalPages = Math.ceil(totalCount/pageSize);
    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1;
    const hasNextPage = nextPage <= totalPages;
    const hasPrevPage = prevPage >= 1;
    return (
        <div>
            <Link disabled={!hasPrevPage} to={`${base}/${prevPage}`}>&#8592; Prev Page</Link>
            {Array.from({ length: totalPages }).map((_, i) => (<Link to={`${base}/${i > 0 ? i+1}`}>{i+1}</Link>))}
            <Link disabled={!hasNextPage} to={`${base}/${nextPage}`}> Next Page &#8594;</Link>
        </div>
    )
}