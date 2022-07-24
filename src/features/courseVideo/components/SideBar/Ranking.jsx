import React from 'react';
import RankingItem from './RankingItem';
import styles from './style.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const arrs = [
    { id: 1, name: 'Hoang Ngoc Bich', description: 'Sinh vien', star: '5.0' },
    { id: 2, name: 'Ha Ngoc Bich', description: 'Sinh vien', star: '4.0' },
    { id: 3, name: 'Hoang Ngoc Anh', description: 'Sinh vien', star: '3.9' },
    { id: 4, name: 'Tran Hong Ngoc', description: 'Sinh vien', star: '4.4' },
]

function Ranking(props) {
    return (
        <>
            <div id={cx("title-ranking")}>
                <span>Bảng xếp hạng</span>
            </div>
            <ul id={cx("menu-ranking")}>
                {arrs.map(arr => <RankingItem arr={arr} key={arr.id} />)}
            </ul>
        </>
    );
}

export default Ranking;