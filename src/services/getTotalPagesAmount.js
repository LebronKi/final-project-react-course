export const getTotalPagesAmount = function (totalCount, reposPerPage) {
    const pagesAmount = Math.ceil(totalCount / reposPerPage);
    const maxPagesAmount = 100;
    if (pagesAmount > maxPagesAmount) {
        return maxPagesAmount;
    } else {
        return pagesAmount;
    }
};