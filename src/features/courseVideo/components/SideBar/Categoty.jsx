import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconConfession, IconMonHoc, IconQuanLy, IconTaiLieu, IconThiTuDo } from '../../icon/IconSideBar';

import styles from './style.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Categoty(props) {
    return (
        <div>

            <div id={cx("title-category")}>
                <span>Danh mục</span>
            </div>

            <ul id={cx("menu-category")} >
                <li className={cx('item-categoty')}>
                    <NavLink
                        activeClassName="active"
                        to="/default"
                        className={cx("item-categoty-link")}
                        data-tab="chats"
                    >
                        <IconMonHoc />
                        <span>Môn học</span>
                    </NavLink>
                </li>

                <li className={cx('item-categoty')}>
                    <NavLink
                        activeClassName="active"
                        to="/default-follower"
                        className={cx("item-categoty-link")}
                        data-tab="friends"
                    >
                        <IconTaiLieu />
                        <span>Tài Liệu học tập</span>
                    </NavLink>
                </li>

                <li className={cx('item-categoty')}>
                    <NavLink
                        activeClassName="active"
                        to="/default-channel"
                        className={cx("item-categoty-link")}
                        data-tab="favorites"
                    >
                        <IconQuanLy />
                        <span >Quản lý A+</span>
                    </NavLink>
                </li>

                <li className={cx('item-categoty')}>
                    <NavLink
                        activeClassName="active"
                        to="/default-live-stream"
                        className={cx("item-categoty-link")}
                        data-tab="favorites"
                    >
                        <IconThiTuDo />
                        <span>Thi tự do</span>
                    </NavLink>
                </li>
                <li className={cx('item-categoty')}>
                    <NavLink
                        activeClassName="active"
                        to="/default-user-profile"
                        data-tab="archived"
                        className={cx("item-categoty-link")}
                    >
                        <IconConfession />
                        <span >Confesion</span>
                    </NavLink>
                </li>
            </ul>

        </div>
    );
}

export default Categoty;