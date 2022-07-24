import React, { Fragment } from 'react';
import Appfooter from '../components/Appfooter';
import Navheader from '../components/Navheader';
import Appheader from '../components/Appheader';
import Profile from '../components/Profile';
import Subscribe from '../components/Subscribe';
import { useLocation } from 'react-router-dom';
import Myclass from '../components/Myclass';
import Share from '../components/Share';
import FileSvg from '../assets/images/svg/home/FileSvg';
import HomeFooter from '../components/HomeFooter';


const background1 = require('../assets/images/custom/Background.png');
const backgroundMentor = require('../assets/images/custom/BackgroundMentor.png');

export default function HomeTemplate(props) {

    const { pathname } = useLocation();

    

    return (
        <Fragment>
            <div className="main-wrapper">
                <Navheader />

                <div className="main-content">
                    <Appheader />

                    <div className="middle-sidebar-bottom theme-dark-bg">
                        <div style={{ backgroundColor: "#fbfcfe" }} className="middle-sidebar-left">
                            <div className="row">
                                {/* SLIDE */}
                                {
                                    pathname === '/default-mt' ?
                                        <div className="col-lg-12 mb-3">
                                            <div
                                                className="card rounded-xxl p-lg--5 border-0 banner-wrap home__background"
                                                style={{
                                                    backgroundImage: `url(${backgroundMentor})`,
                                                }}
                                            >
                                                <div className="home__fileWrap">
                                                    <label htmlFor="home-file" className="cursor-pointer">
                                                        <i className="mr-2" >
                                                            <FileSvg />
                                                        </i>
                                                        Chỉnh sửa ảnh bìa

                                                    </label>
                                                    <input type="file" id="home-file" hidden />
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <div className="col-lg-12 mb-3">
                                            <img src={background1} alt="Background" className="home__background" />
                                        </div>
                                }


                                {/* Content */}
                                <props.data />


                                {/* Footer */}
                                <div className="col-lg-12 mont-font">
                                    {/* <div className="container-fluid"></div> */}
                                    <HomeFooter />
                                </div>
                            </div>
                        </div>
                        <div className="middle-sidebar-right scroll-bar">
                            <div className="middle-sidebar-right-content">
                                <Profile />
                                <Myclass />
                                {pathname === '/default-mt' ? '' : <Share />}
                                <Subscribe />
                            </div>
                        </div>
                    </div>
                </div>

                <Appfooter />
            </div>
        </Fragment>
    );

}

