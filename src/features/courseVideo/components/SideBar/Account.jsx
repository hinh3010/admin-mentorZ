import React from 'react';
import { Link } from 'react-router-dom';
import { IconSetTing } from '../../icon/IconSideBar';
import styles from './style.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Account(props) {
    return (
        <>
            <div id={cx("title-account")}>
                <span>Tài khoản</span>
            </div>
            <ul id={cx("menu-account")}>
                <li className={cx("item-account")}>
                    <Link
                        to="/default-settings"
                        className={cx("item-account-link")}
                    >
                        <IconSetTing />
                        <span >Cài đặt</span>
                    </Link>
                </li>
            </ul>
        </>
    );
}

export default Account;