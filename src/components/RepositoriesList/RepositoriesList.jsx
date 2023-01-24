import PropTypes from 'prop-types';
import React from 'react';
import SearchItemCard from "../SearchItemCard/SearchItemCard";
import Loader from "../Loader/Loader";

const RepositoriesList = React.memo(function RepositoriesList(props) {
    const {repositories,isLoading} = props;

    return (
        <div>
            {!isLoading
                ? repositories.map((repository) => {
                    return (
                        <SearchItemCard
                            key={repository.id}
                            title={repository.name}
                            description={repository.description}
                            lastCommitDate={repository['updated_at']}
                            stargazers={repository['stargazers_count']}
                            owner={repository.owner['login']} />
                    );
                }
            ) : <Loader />
            }
        </div>
    );
});

RepositoriesList.propTypes = {
    repositories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            description: PropTypes.string,
            updated_at: PropTypes.string,
            stargazers_count: PropTypes.number,
            owner: PropTypes.object
        })
    ).isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default RepositoriesList;