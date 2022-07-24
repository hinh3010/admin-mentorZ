import React, { } from 'react';
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick';

const skillList = [
    {
        skill: 'user.png',
    },
    {
        skill: 'user.png',
    },
    {
        skill: 'user.png',
    },
    {
        skill: 'user.png',
    },
    {
        skill: 'user.png',
    },
];

const avatar = require('../assets/images/custom/AvatarSm.png');

function Evaluate() {

    const { pathname } = useLocation();

    const skillsettings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 300,
        centerMode: false,
        variablewidth: true,
    };
    return (
        <div className="card overflow-hidden subscribe-widget mb-3 border-0">
            <h2 className="evaluate__title">
                Đánh giá
            </h2>
            <div className="w-100 border-0 mt-0 p-4 position-relative bg-white evaluate__wrap">
                <div className="row">
                    <div className="col-5 pr-0">
                        <h2 className="display3-size lh-1 m-0 text-grey-900 fw-700 evaluate__rate">
                            4.2
                        </h2>
                    </div>
                    <div className="col-7 pl-0 text-right  evaluate__rate--content">
                        <div className="star d-block w-100 text-right">
                            <img
                                src="assets/images/star.png"
                                alt="star"
                                className="w10"
                            />
                            <img
                                src="assets/images/star.png"
                                alt="star"
                                className="w10"
                            />
                            <img
                                src="assets/images/star.png"
                                alt="star"
                                className="w10"
                            />
                            <img
                                src="assets/images/star.png"
                                alt="star"
                                className="w10"
                            />
                            <img
                                src="assets/images/star-disable.png"
                                alt="star"
                                className="w10"
                            />
                        </div>
                        <h4 className="font-xsssss text-grey-600 fw-600 mt-1">
                            Based on 433 rating
                        </h4>
                    </div>
                </div>
                <div className="bg-greylight theme-dark-bg rounded-sm p-2 mt-3 mb-4">
                    <div className="row mt-3 evaluate__synthetic">
                        <div className="col-4 col-xxl-3 pr-1 mt-0 evaluate__star">
                            <img
                                src="assets/images/star.png"
                                alt="star"
                                className="w10 float-left"
                            />
                            <h4 className="font-xsss fw-600 text-grey-600 ml-1 float-left d-inline">
                                5
                            </h4>
                        </div>
                        <div className="col-5 col-xxl-7 pl-0 pr-2">
                            <div
                                id="bar_1"
                                data-value="45"
                                className="bar-container"
                            >
                                <div
                                    className="bar-percentage"
                                    style={{ width: `70%` }}
                                ></div>
                            </div>
                        </div>
                        <div className="col-3 col-xxl-2 pl-0">
                            <h4 className="font-xssss fw-600 text-grey-800 evaluate__percent">
                                70%
                            </h4>
                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-4 col-xxl-3 pr-1 mt-0 evaluate__star">
                            <img
                                src="assets/images/star.png"
                                alt="star"
                                className="w10 float-left"
                            />
                            <h4 className="font-xsss fw-600 text-grey-600 ml-1 float-left d-inline">
                                4
                            </h4>
                        </div>
                        <div className="col-5 col-xxl-7 pl-0 pr-2">
                            <div
                                id="bar_2"
                                data-value="45"
                                className="bar-container"
                            >
                                <div
                                    className="bar-percentage"
                                    style={{ width: `50%` }}
                                ></div>
                            </div>
                        </div>
                        <div className="col-3 col-xxl-2 pl-0">
                            <h4 className="font-xssss fw-600 text-grey-800 evaluate__percent">
                                50%
                            </h4>
                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-4 col-xxl-3 pr-1 mt-0 evaluate__star">
                            <img
                                src="assets/images/star.png"
                                alt="star"
                                className="w10 float-left"
                            />
                            <h4 className="font-xsss fw-600 text-grey-600 ml-1 float-left d-inline">
                                3
                            </h4>
                        </div>
                        <div className="col-5 col-xxl-7 pl-0 pr-2">
                            <div
                                id="bar_3"
                                data-value="45"
                                className="bar-container"
                            >
                                <div
                                    className="bar-percentage"
                                    style={{ width: `40%` }}
                                ></div>
                            </div>
                        </div>
                        <div className="col-3 col-xxl-2 pl-0">
                            <h4 className="font-xssss fw-600 text-grey-800 evaluate__percent">
                                40%
                            </h4>
                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-4 col-xxl-3 pr-1 mt-0 evaluate__star">
                            <img
                                src="assets/images/star.png"
                                alt="star"
                                className="w10 float-left"
                            />
                            <h4 className="font-xsss fw-600 text-grey-600 ml-1 float-left d-inline">
                                2
                            </h4>
                        </div>
                        <div className="col-5 col-xxl-7 pl-0 pr-2">
                            <div
                                id="bar_4"
                                data-value="45"
                                className="bar-container"
                            >
                                <div
                                    className="bar-percentage"
                                    style={{ width: `30%` }}
                                ></div>
                            </div>
                        </div>
                        <div className="col-3 col-xxl-2 pl-0">
                            <h4 className="font-xssss fw-600 text-grey-800 evaluate__percent">
                                30%
                            </h4>
                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-4 col-xxl-3 pr-1 mt-0 evaluate__star">
                            <img
                                src="assets/images/star.png"
                                alt="star"
                                className="w10 float-left"
                            />
                            <h4 className="font-xsss fw-600 text-grey-600 ml-1 float-left d-inline">
                                1
                            </h4>
                        </div>
                        <div className="col-5 col-xxl-7 pl-0 pr-2">
                            <div
                                id="bar_5"
                                data-value="45"
                                className="bar-container"
                            >
                                <div
                                    className="bar-percentage"
                                    style={{ width: `20%` }}
                                ></div>
                            </div>
                        </div>
                        <div className="col-3 col-xxl-2 pl-0">
                            <h4 className="font-xssss fw-600 text-grey-800 evaluate__percent">
                                20%
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <a
                        href="/default-course-one"
                        className="d-block p-2 lh-32 w-100 text-center ml-3 mr-3 bg-greylight fw-600 font-xssss text-grey-900"
                    >
                        Add a Review
                    </a>
                </div>
            </div>
            <div className="evaluate__list p-3">
                <div className="evaluate__item">
                    <div className="row">
                        <div className="col-12 col-xxl-3 ">
                            <img src={require('../assets/images/custom/Avatar.png')} className="evaluate__avatar" alt="avatar" />
                        </div>
                        <div className="col-12 col-xxl-9 evaluate__right">
                            <div className="evaluate__name">
                                <h3>Nguyễn Hồng Thái</h3>
                                <span>26-7-2022 / 8h20pm</span>
                            </div>
                            <div className="starWrap">
                                <div>
                                    <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                    <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                    <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                    <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                    <img alt="star" src={require('../assets/images/star-disable.png')} className="star-item" />
                                </div>
                                <b className="roboto-font">4.0</b>
                            </div>
                            <div className="evaluate__content">
                                Enjoyed this a lot and well done. We are an early stage digitally native vertical brand, making travel bags.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="evaluate__item">
                    <div className="row">
                        <div className="col-12 col-xxl-3">
                            <img src={require('../assets/images/custom/Avatar.png')} className="evaluate__avatar" alt="avatar" />
                        </div>
                        <div className="col-12 col-xxl-9 evaluate__right">
                            <div className="evaluate__name">
                                <h3>Nguyễn Hồng Thái</h3>
                                <span>26-7-2022 / 8h20pm</span>
                            </div>
                            <div className="starWrap">
                                <div>
                                    <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                    <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                    <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                    <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                    <img alt="star" src={require('../assets/images/star-disable.png')} className="star-item" />
                                </div>
                                <b className="roboto-font">4.0</b>
                            </div>
                            <div className="evaluate__content">
                                Enjoyed this a lot and well done. We are an early stage digitally native vertical brand, making travel bags.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="evaluate__item">
                    <div className="row">
                        <div className="col-12 col-xxl-3">
                            <img src={require('../assets/images/custom/Avatar.png')} className="evaluate__avatar" alt="avatar" />
                        </div>
                        <div className="col-12 col-xxl-9 evaluate__right">
                            <div className="evaluate__name">
                                <h3>Nguyễn Hồng Thái</h3>
                                <span>26-7-2022 / 8h20pm</span>
                            </div>
                            <div className="starWrap">
                                <div>
                                    <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                    <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                    <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                    <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                    <img alt="star" src={require('../assets/images/star-disable.png')} className="star-item" />
                                </div>
                                <b className="roboto-font">4.0</b>
                            </div>
                            <div className="evaluate__content">
                                Enjoyed this a lot and well done. We are an early stage digitally native vertical brand, making travel bags.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="evaluate__item">
                    <div className="row">
                        <div className="col-12 col-xxl-3">
                            <img src={require('../assets/images/custom/Avatar.png')} className="evaluate__avatar" alt="avatar" />
                        </div>
                        <div className="col-12 col-xxl-9 evaluate__right">
                            <div className="evaluate__name">
                                <h3>Nguyễn Hồng Thái</h3>
                                <span>26-7-2022 / 8h20pm</span>
                            </div>
                            <div className="starWrap">
                                <div>
                                    <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                    <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                    <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                    <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                    <img alt="star" src={require('../assets/images/star-disable.png')} className="star-item" />
                                </div>
                                <b className="roboto-font">4.0</b>
                            </div>
                            <div className="evaluate__content">
                                Enjoyed this a lot and well done. We are an early stage digitally native vertical brand, making travel bags.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="evaluate__item">
                    <div className="row">
                        <div className="col-12 col-xxl-3">
                            <img src={require('../assets/images/custom/Avatar.png')} className="evaluate__avatar" alt="avatar" />
                        </div>
                        <div className="col-12 col-xxl-9 evaluate__right">
                            <div className="evaluate__name">
                                <h3>Nguyễn Hồng Thái</h3>
                                <span>26-7-2022 / 8h20pm</span>
                            </div>
                            <div className="starWrap">
                                <div>
                                    <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                    <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                    <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                    <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                    <img alt="star" src={require('../assets/images/star-disable.png')} className="star-item" />
                                </div>
                                <b className="roboto-font">4.0</b>
                            </div>
                            <div className="evaluate__content">
                                Enjoyed this a lot and well done. We are an early stage digitally native vertical brand, making travel bags.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="evaluate__item">
                    <div className="row">
                        <div className="col-12 col-xxl-3">
                            <img src={require('../assets/images/custom/Avatar.png')} className="evaluate__avatar" alt="avatar" />
                        </div>
                        <div className="col-12 col-xxl-9 evaluate__right">
                            <div className="evaluate__name">
                                <h3>Nguyễn Hồng Thái</h3>
                                <span>26-7-2022 / 8h20pm</span>
                            </div>
                            <div className="starWrap">
                                <div>
                                    <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                    <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                    <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                    <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                    <img alt="star" src={require('../assets/images/star-disable.png')} className="star-item" />
                                </div>
                                <b className="roboto-font">4.0</b>
                            </div>
                            <div className="evaluate__content">
                                Enjoyed this a lot and well done. We are an early stage digitally native vertical brand, making travel bags.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="evaluate__item">
                    <div className="row">
                        <div className="col-12 col-xxl-3">
                            <img src={require('../assets/images/custom/Avatar.png')} className="evaluate__avatar" alt="avatar" />
                        </div>
                        <div className="col-12 col-xxl-9 evaluate__right">
                            <div className="evaluate__name">
                                <h3>Nguyễn Hồng Thái</h3>
                                <span>26-7-2022 / 8h20pm</span>
                            </div>
                            <div className="starWrap">
                                <div>
                                    <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                    <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                    <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                    <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                    <img alt="star" src={require('../assets/images/star-disable.png')} className="star-item" />
                                </div>
                                <b className="roboto-font">4.0</b>
                            </div>
                            <div className="evaluate__content">
                                Enjoyed this a lot and well done. We are an early stage digitally native vertical brand, making travel bags.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="evaluate__item">
                    <div className="row">
                        <div className="col-12 col-xxl-3">
                            <img src={require('../assets/images/custom/Avatar.png')} className="evaluate__avatar" alt="avatar" />
                        </div>
                        <div className="col-12 col-xxl-9 evaluate__right">
                            <div className="evaluate__name">
                                <h3>Nguyễn Hồng Thái</h3>
                                <span>26-7-2022 / 8h20pm</span>
                            </div>
                            <div className="starWrap">
                                <div>
                                    <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                    <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                    <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                    <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                    <img alt="star" src={require('../assets/images/star-disable.png')} className="star-item" />
                                </div>
                                <b className="roboto-font">4.0</b>
                            </div>
                            <div className="evaluate__content">
                                Enjoyed this a lot and well done. We are an early stage digitally native vertical brand, making travel bags.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="evaluate__item">
                    <div className="row">
                        <div className="col-12 col-xxl-3">
                            <img src={require('../assets/images/custom/Avatar.png')} className="evaluate__avatar" alt="avatar" />
                        </div>
                        <div className="col-12 col-xxl-9 evaluate__right">
                            <div className="evaluate__name">
                                <h3>Nguyễn Hồng Thái</h3>
                                <span>26-7-2022 / 8h20pm</span>
                            </div>
                            <div className="starWrap">
                                <div>
                                    <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                    <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                    <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                    <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                    <img alt="star" src={require('../assets/images/star-disable.png')} className="star-item" />
                                </div>
                                <b className="roboto-font">4.0</b>
                            </div>
                            <div className="evaluate__content">
                                Enjoyed this a lot and well done. We are an early stage digitally native vertical brand, making travel bags.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

}

export default Evaluate;
