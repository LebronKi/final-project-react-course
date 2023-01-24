import React, { useCallback, useMemo } from 'react';
import cl from  './search-item-card.module.css'
import link from '../../images/link.jpg'
import star from '../../images/star.jpg'
import update from '../../images/update.png'
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRepository } from '../../redux/repositoryCardReducer/thunk';
import { getRepositoryStargazers } from '../../redux/repositoryStargazersReducer/thunk';
import { formatLastCommitDate } from '../../services/formatLastCommitDate';

const SearchItemCard = React.memo(function SearchItemCard(props) {

    const {title,description,lastCommitDate,stargazers,owner} = props;
    const dispatch = useDispatch();

    const formattedLastCommitDate = useMemo(
        () => formatLastCommitDate(lastCommitDate),
        [lastCommitDate]
    );

    const handleClick = useCallback(() => {
        dispatch(getRepository(owner, title));
        dispatch(getRepositoryStargazers(owner, title));
    }, [dispatch,owner, title]);

    return (
        <div className={cl.itemCard}>
            <div className="item-card__header">
                <hr/>
                <img className="item-card__image"
                     style={{width: 20,height:20,marginRight: 10,borderRadius:'50%'}}
                     src={link}
                     alt='link' />
                <Link
                    to={`/repository/${owner}/${title}`}
                    className="item-card__title"
                    onClick={handleClick}>
                    {title}
                </Link>
            </div>
            <div className="item-card__description mt-1">{description}</div>
            <span className="item-card__footer footer">
        <span className="footer__item">
          <div className="item-card__link">
            <img
                style={{width: 20,height:20,marginBottom:10,marginTop:10,borderRadius:'50%'}}
                src={star}
                alt="star" />
            <span className="item-card__stargazers m-lg-2">{stargazers}</span>
          </div>
        </span>
         <img
             style={{width: 20,height:20,marginRight:10}}
             src={update}
             alt='update' />
             <span className="footer__item">Updated {formattedLastCommitDate} ago</span>
      </span>
        </div>

    );
});

SearchItemCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    lastCommitDate: PropTypes.string.isRequired,
    stargazers: PropTypes.number.isRequired,
    owner: PropTypes.string.isRequired
};

export default SearchItemCard;