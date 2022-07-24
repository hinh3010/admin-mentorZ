import React from 'react';
import { IconBell, IconMessage, IconMoon } from '../../icon/IconHeader';
import { IconSearch } from '../../icon/IconSideBar';
import images from '../../images'
import classNames from 'classnames/bind';
import styles from './style.module.scss';

const cx = classNames.bind(styles);
function Header(props) {
    return (
        <div className={cx("header-container")}>
            <div className={cx("header-form-search")}>
                <form action="#" >
                    <div className={`form-group mb-0 ${cx("header-form-input")}`}>
                        <div>
                            <IconSearch />
                            <input
                                type="text"
                                placeholder="Tìm kiếm thông tin tại đây"
                                className="middleSidebar__Search--input bg-transparent border-0 lh-32 pt-2 pb-2 pr-3 rounded-xl w350"
                            />
                        </div>
                        <div className={cx("action")}>
                            <IconBell />
                            <IconMoon />
                            <IconMessage />
                            <img src={images.avatar} alt="" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Header;