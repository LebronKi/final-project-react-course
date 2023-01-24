export function fetchMostRatedRepositories(filters = {}) {
    const {date = '2018-09-30',sortBy = 'stars',order = 'desc',page = 1,perPage = 10} = filters;
    const dateFilter = `created:">${date}"`;

    const base = new URL('https://api.github.com/search/repositories');
    const searchParams = new URLSearchParams({
        q: dateFilter,
        sort: sortBy,
        order,
        page,
        per_page: perPage
    });
    const url = `${base}?${searchParams}`;

    return fetch(url).then((res) => res.json());
}

export function fetchRepositoriesBySearchQuery(filters = {}) {
    const {
        date = '2018-09-30',
        sortBy = 'stars',
        order = 'desc',
        page = 1,
        perPage = 10,
        searchQuery = ''
    } = filters;
    const dateFilter = `created:">${date}"`;
    const query = `${searchQuery} ${dateFilter}`;

    const base = new URL('https://api.github.com/search/repositories');
    const searchParams = new URLSearchParams({
        q: query,
        sort: sortBy,
        order,
        page,
        per_page: perPage
    });
    const url = `${base}?${searchParams}`;

    return fetch(url).then((res) => res.json());
}

export function fetchRepository(owner, repositoryName) {
    const base = new URL('https://api.github.com/repos');
    const url = `${base}/${owner}/${repositoryName}`;

    return fetch(url).then((res) => res.json());
}

export function fetchRepositoryStargazers(owner, repositoryName) {
    const base = new URL('https://api.github.com/repos');
    const url = `${base}/${owner}/${repositoryName}/stargazers`;

    return fetch(url).then((res) => res.json());
}