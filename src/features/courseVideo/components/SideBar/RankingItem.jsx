import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../images';
import styles from './style.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function RankingItem(props) {
    const { name, description, star, avatar, rank } = props.arr;
    return (
        <li className={cx("item-ranking")}>
            <Link
                to="/default-author-profile"
                className={cx("item-ranking-link")}
                data-tab="chats"
            >
                <img
                    style={{ width: "38px", height: "38px" }}
                    src="assets/images/user.png"
                    alt="user"
                    className="w40 mr-2"
                />
                <div className={cx("item-ranking-text")}>
                    <p>{name}</p>
                    <p>{description}</p>
                </div>
                <div className={cx("item-ranking-star")} >
                    <span >{star}</span>
                    <img src={images.star} alt="s" />
                </div>
            </Link>
        </li>
    );
}

export default RankingItem;