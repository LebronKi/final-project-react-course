import PropTypes from 'prop-types';
import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import {useSelector} from 'react-redux';
import {getLinkToPage} from '../../services/getLinkToPage';
import {getTotalPagesAmount} from '../../services/getTotalPagesAmount';

const SearchPagination = React.memo(function SearchPagination(props) {
    const {query,currentPage} = props;

    const totalCount = useSelector((state) => state.searchRepositories.totalCount);
    const perPage = useSelector((state) => state.searchRepositories.perPage);

    const pagesAmount = getTotalPagesAmount(totalCount, perPage);

    const firstPage = 1;
    const lastPage = pagesAmount;
    const [onePage,twoPages,threePages,fourPages,fivePages,sixPages] = [1, 2, 3, 4, 5, 6];

    return (
        <Pagination className="mt-4 d-flex justify-content-center">
            <Pagination.Prev
                disabled={currentPage === firstPage}
                href={getLinkToPage(query, currentPage - onePage)}/>

            {currentPage !== firstPage && (
                <Pagination.Item href={getLinkToPage(query, firstPage)}>1</Pagination.Item>
            )}

            {currentPage >= fivePages && pagesAmount >= sixPages && <Pagination.Ellipsis />}

            {pagesAmount >= fivePages && pagesAmount === currentPage && (
                <Pagination.Item href={getLinkToPage(query, currentPage - fourPages)}>
                    {currentPage - fourPages}
                </Pagination.Item>
            )}

            {currentPage > pagesAmount - twoPages && pagesAmount >= fivePages && (
                <Pagination.Item href={getLinkToPage(query, currentPage - threePages)}>
                    {currentPage - threePages}
                </Pagination.Item>
            )}

            {currentPage > threePages && pagesAmount >= threePages && (
                <Pagination.Item href={getLinkToPage(query, currentPage - twoPages)}>
                    {currentPage - twoPages}
                </Pagination.Item>
            )}

            {currentPage > twoPages && pagesAmount >= twoPages && (
                <Pagination.Item href={getLinkToPage(query, currentPage - onePage)}>
                    {currentPage - onePage}
                </Pagination.Item>
            )}

            <Pagination.Item active>{currentPage}</Pagination.Item>

            {currentPage + onePage < pagesAmount && (
                <Pagination.Item href={getLinkToPage(query, currentPage + onePage)}>
                    {currentPage + onePage}
                </Pagination.Item>
            )}

            {currentPage + twoPages < pagesAmount && (
                <Pagination.Item href={getLinkToPage(query, currentPage + twoPages)}>
                    {currentPage + twoPages}
                </Pagination.Item>
            )}

            {currentPage + threePages <= pagesAmount && currentPage <= twoPages && (
                <Pagination.Item href={getLinkToPage(query, currentPage + threePages)}>
                    {currentPage + threePages}
                </Pagination.Item>
            )}

            {currentPage === firstPage && pagesAmount >= fivePages && (
                <Pagination.Item href={getLinkToPage(query, currentPage + fourPages)}>
                    {currentPage + fourPages}
                </Pagination.Item>
            )}

            {currentPage + fourPages < pagesAmount && pagesAmount >= sixPages && <Pagination.Ellipsis />}

            {currentPage + threePages < pagesAmount && pagesAmount > sixPages && (
                <Pagination.Item href={getLinkToPage(query, lastPage)}>{lastPage}</Pagination.Item>
            )}

            <Pagination.Next
                disabled={currentPage === pagesAmount}
                href={getLinkToPage(query, currentPage + onePage)}
            />
        </Pagination>
    );
});

SearchPagination.propTypes = {
    query: PropTypes.string.isRequired,
    currentPage: PropTypes.number.isRequired
};

export default SearchPagination;