import React, { Fragment } from 'react';
import Appfooter from '../components/Appfooter';
import Navheader from '../components/Navheader';
import Appheader from '../components/Appheader';
import Profile from '../components/Profile';
import Myclass from '../components/Myclass';
import Subscribe from '../components/Subscribe';
import { Accordion } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import UserSvg from '../assets/images/svg/home/UserSvg';
import Evaluate from '../components/Evaluate';

const latestList = [
    {
        imageUrl: 'home-login.png',
        title: 'Giáo trình toán cao cấp',
        price: '670',
        name: 'VŨ MINH ĐỨC',
        fee: 'FREE',
        status: 'alert-warning text-warning',
        document: 24,
        view: 54651
    },
    {
        imageUrl: 'home-login.png',
        title: 'Giáo trình toán cao cấp',
        price: '760',
        name: 'VŨ MINH ĐỨC',
        fee: 'FREE',
        status: 'alert-primary text-primary',
        document: 24,
        view: 54651
    },
    {
        imageUrl: 'home-login.png',
        title: 'Giáo trình toán cao cấp',
        price: '370',
        name: 'VŨ MINH ĐỨC',
        fee: 'FREE',
        status: 'alert-danger text-danger',
        document: 24,
        view: 54651
    },
    {
        imageUrl: 'home-login.png',
        title: 'Giáo trình toán cao cấp',
        price: '2400',
        name: 'VŨ MINH ĐỨC',
        fee: 'FREE',
        status: 'alert-warning text-warning',
        document: 24,
        view: 54651
    },
    {
        imageUrl: 'home-login.png',
        title: 'Giáo trình toán cao cấp',
        price: '40',
        name: 'VŨ MINH ĐỨC',
        fee: 'FREE',
        status: 'alert-danger text-danger',
        document: 24,
        view: 54651
    },
];

function Defaultdetailthematic() {
    const avatar = require('../assets/images/custom/AvatarSm.png');
    const latestSlider = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 300,
        centerMode: false,
        variableWidth: true,
        slidesToScroll: 2,
    };
    return (
        <Fragment>
            <div className="main-wrapper">
                <Navheader />

                <div className="main-content">
                    <Appheader />

                    <div className="middle-sidebar-bottom theme-dark-bg">
                        <div className="">
                            <div className="row">
                                <div className="col-xl-12">
                                    <h3 className="thematic__heading">
                                        CHUYÊN ĐỀ 1: NỘI DUNG
                                    </h3>
                                </div>
                                <div className="col-xl-12">
                                    <div className="thematic__list">
                                        <div className="thematic__item">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Appfooter />
            </div>
        </Fragment>
    );

}

export default Defaultdetailthematic;
