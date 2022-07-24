import React, { Component, Fragment, useState } from 'react';
import Appfooter from '../../../components/Appfooter';
// import SideBar from '../components/SideBar/index';
// import Header from '../components/Header';
import Video from '../components/Video'
import Comment from '../components/Video/Comment'
import ListVideo from '../components/ListVideo';
import Navheader from '../../../components/Navheader';
import Appheader from '../../../components/Appheader';
import { Grid } from '@mui/material';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchLessonsByIdRequest, fetchLessonsRequest } from '../../../redux/actions/lessonAction';

const cx = classNames.bind(styles);
function CourseVideo() {
    const dispatch = useDispatch()

    // list lesson
    useEffect(() => {
        dispatch(fetchLessonsRequest())
    }, [dispatch])
    const listLessons = useSelector(state => state?.lessonReducer?.data)

    // lesson by id
    const [idLesson, setIdLesson] = useState(null)
    useEffect(() => {
        if (idLesson) dispatch(fetchLessonsByIdRequest(idLesson))
    }, [dispatch, idLesson])
    const lesson = useSelector(state => state?.lessonByIdReducer?.data)


    // lesson by id ko call api
    // console.log(listLessons[0]._id)
    // const [lesson, setLesson] = useState(null)
    // useEffect(() => {
    //     const item = listLessons?.find(lesson => lesson._id === idLesson)
    //     if(item) setLesson(item)
    // }, [idLesson, listLessons])


    return (
        <Fragment>
            <div className="main-wrapper">
                <Navheader />

                <div className="main-content">
                    <Appheader />
                    <div style={{ paddingRight: 0 }} className="middle-sidebar-bottom theme-dark-bg">
                        <Grid container spacing={2.6}>
                            <Grid item xl={4} xxl={3}
                                className={cx('flex', 'size1535:hidden')}
                            >
                                <ListVideo listLessons={listLessons}
                                    idLesson={idLesson}
                                    setIdLesson={setIdLesson}
                                />
                            </Grid>
                            <Grid item xl={8} xxl={9}>
                                <Video listLessons={listLessons}
                                    idLesson={idLesson}
                                    setIdLesson={setIdLesson}
                                    lesson={lesson}
                                />
                                <ListVideo className={`${cx("hidden", 'size1535:block')}`}
                                    listLessons={listLessons}
                                    idLesson={idLesson}
                                    setIdLesson={setIdLesson}
                                />
                                <Comment listLessons={listLessons}
                                    idLesson={idLesson}
                                    lesson={lesson}
                                    setIdLesson={setIdLesson}
                                />
                            </Grid>
                        </Grid>
                    </div>
                </div>

                <Appfooter />
            </div>
        </Fragment>
    );
}

export default CourseVideo;
