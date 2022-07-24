import React from 'react';
import ReactPlayer from 'react-player';
import { IconBook } from '../../icon/IconSideBar';
import styles from './style.module.scss';
import classNames from 'classnames/bind';
import { Button } from '@mui/material';

const cx = classNames.bind(styles);
function Video(props) {
    const { lesson } = props;
    return (
        <div className={cx("video-container")}>
            <h2 className={cx("title", 'dotthree')}>
                {`BAI ${lesson?.position} : ${lesson?.name}`}
            </h2>

            <div className="mentor-answer__video mt-2">
                <ReactPlayer
                    controls={true}
                    width="100%"
                    height="100%"
                    className="mentor-player"
                    playing={false}
                    url={lesson?.videoUrl}
                />
            </div>

            <div className={`${cx('content')}`}>
                <h2>
                    Nội dung bài học
                </h2>
                <span>
                    {lesson?.introduction}
                </span>
                <span >
                    {lesson?.description}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Atque, totam temporibus nostrum nobis minus,
                    sed eum, sit est ut optio quia reprehenderit.
                    A ex pariatur eos sequi nemo soluta iure.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Atque, totam temporibus nostrum nobis minus,
                    sed eum, sit est ut optio quia reprehenderit.
                    A ex pariatur eos sequi nemo soluta iure.
                </span>
                <Button className={cx("content-btn")} >
                    <IconBook />
                    <span>{`BAI ${lesson?.position}`}</span>
                </Button>
            </div>
        </div>
    );
}

export default Video;