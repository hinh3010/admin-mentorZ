import React, { useEffect, useState } from 'react';
import images from '../../images';
import styles from './style.module.scss';
import classNames from 'classnames/bind';
import { IconStar } from './IconStar'
const cx = classNames.bind(styles);

function ListVideo(props) {
    const { className, listLessons, idLesson, setIdLesson } = props;
    const classes = cx({ [className]: className })

    const [lessons, setLessons] = useState([])
    useEffect(() => {
        setLessons(listLessons)
    }, [listLessons]);

    useEffect(() => {
        if (!idLesson && listLessons?.length > 0) {
            return setIdLesson(listLessons[0]?._id)
        }
    }, [idLesson, listLessons, setIdLesson]);

    const handleClickLesson = (id) => {
        if (idLesson === id) {
            return
        }
        setIdLesson(id)
    }

    return (
        <div className={`${cx("list")} ${classes}`}>

            <h3 className={cx("title-list-video", "dotthree", "line2")}>
                Chương 1: Tổng quan
            </h3>

            <ul className={`list-group list-group-flush scrollbar ${cx('list-video')}`} >

                {lessons?.map(lesson => (
                    <li
                        className={`${cx('item-video', idLesson === lesson?._id ? 'active' : '')} list-group-item`} key={lesson?._id}
                        onClick={() => handleClickLesson(lesson._id)}
                    >
                        <div className={cx("title-video")}>
                            <img className={cx("icon-check")} src={images.check} alt="✔" />
                            <h3 className={`"h3 fw-700 " ${cx("dotthree", "line2")}`}>
                                {lesson?.name}
                            </h3>
                            <img className={cx("icon-lock")} src={images.lock} alt="🔒" />
                        </div>
                        <span className={cx("dotthree", "desc-video", "line2")}>
                            {lesson?.introduction}
                        </span>
                        <div className={cx("status-video")}>
                            {/* <img className={cx("icon-star")} src={images.star} alt="" /> */}
                            <IconStar className={cx("icon-star")} />
                            <p>
                                {`bai ${lesson?.position}`}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default ListVideo;