import React, { Fragment } from 'react';
import Appfooter from '../components/Appfooter';
import Navheader from '../components/Navheader';
import Appheader from '../components/Appheader';
import Profile from '../components/Profile';
import Myclass from '../components/Myclass';
import Subscribe from '../components/Subscribe';
import FileSvg from '../assets/images/svg/auth/FileSvg';
import '../assets/css/common/profile.css'
import { Switch } from 'antd';
import { Link } from 'react-router-dom';
import UserSvg from '../assets/images/svg/home/UserSvg';
import Share from '../components/Share';
import HomeFooter from '../components/HomeFooter';


const backgroundMentor = require('../assets/images/custom/BackgroundMentor.png');


const memberList = [
  {
    imageUrl: 'user.png',
    name: 'Aliqa Macale ',
    email: 'support@gmail.com',
    bgimage: 'blog.png',
  },
  {
    imageUrl: 'user.png',
    name: 'John Steere ',
    email: 'support@gmail.com',
    bgimage: 'blog.png',
  },
  {
    imageUrl: 'user.png',
    name: 'Mohannad Zitoun ',
    email: 'support@gmail.com',
    bgimage: 'blog.png',
  },
  {
    imageUrl: 'user.png',
    name: 'Aliqa Macale ',
    email: 'support@gmail.com',
    bgimage: 'blog.png',
  },
  {
    imageUrl: 'user.png',
    name: 'Hendrix Stamp ',
    email: 'support@gmail.com',
    bgimage: 'blog.png',
  },
  {
    imageUrl: 'user.png',
    name: 'Mohannad Zitoun ',
    email: 'support@gmail.com',
    bgimage: 'blog.png',
  },
  {
    imageUrl: 'user.png',
    name: 'John Steere ',
    email: 'support@gmail.com',
    bgimage: 'blog.png',
  },
];
const liveList = [
  {
    imageUrl: 'user.png',
    name: 'Aliqa Macale ',
    email: 'support@gmail.com',
    status: 'LIVE',
    statusColor: 'bg-danger',
    bgimage: 'blog.png',
  },
  {
    imageUrl: 'user.png',
    name: 'John Steere ',
    email: 'support@gmail.com',
    status: 'OFFLINE',
    statusColor: 'bg-dark',
    bgimage: 'blog.png',
  },
  {
    imageUrl: 'user.png',
    name: 'Mohannad Zitoun ',
    email: 'support@gmail.com',
    status: 'LIVE',
    statusColor: 'bg-danger',
    bgimage: 'blog.png',
  },
  {
    imageUrl: 'user.png',
    name: 'Aliqa Macale ',
    email: 'support@gmail.com',
    status: 'OFFLINE',
    statusColor: 'bg-dark',
    bgimage: 'blog.png',
  },
  {
    imageUrl: 'user.png',
    name: 'Hendrix Stamp ',
    email: 'support@gmail.com',
    status: 'LIVE',
    statusColor: 'bg-danger',
    bgimage: 'blog.png',
  },
  {
    imageUrl: 'user.png',
    name: 'Mohannad Zitoun ',
    email: 'support@gmail.com',
    status: 'LIVE',
    statusColor: 'bg-danger',
    bgimage: 'blog.png',
  },
  {
    imageUrl: 'user.png',
    name: 'John Steere ',
    email: 'support@gmail.com',
    status: 'LIVE',
    statusColor: 'bg-danger',
    bgimage: 'bb-9.png',
  },
];

const channelList = [
  {
    imageUrl: 'user.png',
    title: 'Mobile Product Design',
    des: 'Learn new secrets to creating awesome Microsoft Access databases and VBA coding not covered in any of my other courses!',
    tag1: 'FULL TIME',
    tag2: 'DESINER',
    tag3: '30 MIN',
  },
  {
    imageUrl: 'user.png',
    title: 'HTML Developer',
    des: 'Learn new secrets to creating awesome Microsoft Access databases and VBA coding not covered in any of my other courses!',
    tag1: '',
    tag2: 'DESINER',
    tag3: '30 MIN',
  },
  {
    imageUrl: 'user.png',
    title: 'Advanced CSS and Sass',
    des: 'Learn new secrets to creating awesome Microsoft Access databases and VBA coding not covered in any of my other courses!',
    tag1: 'FULL TIME',
    tag2: 'DEVELOPER',
    tag3: '21 HOUR',
  },
  {
    imageUrl: 'user.png',
    title: 'Modern React with Redux',
    des: 'Learn new secrets to creating awesome Microsoft Access databases and VBA coding not covered in any of my other courses!',
    tag1: 'HALF TIME',
    tag2: 'DESINER',
    tag3: '5 HOUNRS',
  },
  {
    imageUrl: 'user.png',
    title: 'Node JS',
    des: 'Learn new secrets to creating awesome Microsoft Access databases and VBA coding not covered in any of my other courses!',
    tag1: 'HALF TIME',
    tag2: 'CODER',
    tag3: '45 MIN',
  },
  {
    imageUrl: 'user.png',
    title: 'Mobile Product Design',
    des: 'Learn new secrets to creating awesome Microsoft Access databases and VBA coding not covered in any of my other courses!',
    tag1: 'FULL TIME',
    tag2: 'DESINER',
    tag3: '30 MIN',
  },
];
const badgeList = [
  {
    imageUrl: 'user.png',
    title: 'Bronze User',
    des: 'Learn new secrets to creating awesome Microsoft Access databases',
    tag: 'UNLOCK',
    per: '100',
  },
  {
    imageUrl: 'user.png',
    title: 'Platinum  User',
    des: 'Learn new secrets to creating awesome Microsoft Access databases',
    tag: '95 / 100',
    per: '95',
  },
  {
    imageUrl: 'user.png',
    title: 'Ultra Powered',
    des: 'Learn new secrets to creating awesome Microsoft Access databases',
    tag: '90 / 100',
    per: '90',
  },
  {
    imageUrl: 'user.png',
    title: 'Bronze User',
    des: 'Learn new secrets to creating awesome Microsoft Access databases',
    tag: '85 / 100',
    per: '85',
  },
  {
    imageUrl: 'user.png',
    title: 'Gold User',
    des: 'Learn new secrets to creating awesome Microsoft Access databases',
    tag: 'UNLOCK',
    per: '82',
  },
  {
    imageUrl: 'user.png',
    title: 'Silver User',
    des: 'Learn new secrets to creating awesome Microsoft Access databases',
    tag: 'UNLOCK',
    per: '98',
  },
];

const courseList = [
  {
    imageUrl: 'home-login.png',
    title: 'GV.Nguyễn Hồng Thái',
    price: '670',
    tag: 'Python',
    lesson: '32 ',
    status: 'alert-warning text-warning',
  },
  {
    imageUrl: 'home-login.png',
    title: 'GV.Nguyễn Hồng Thái',
    price: '670',
    tag: 'Python',
    lesson: '32 ',
    status: 'alert-warning text-warning',
  },
  {
    imageUrl: 'home-login.png',
    title: 'GV.Nguyễn Hồng Thái',
    price: '670',
    tag: 'Python',
    lesson: '32 ',
    status: 'alert-warning text-warning',
  },
  {
    imageUrl: 'home-login.png',
    title: 'GV.Nguyễn Hồng Thái',
    price: '670',
    tag: 'Python',
    lesson: '32 ',
    status: 'alert-warning text-warning',
  },
  {
    imageUrl: 'home-login.png',
    title: 'GV.Nguyễn Hồng Thái',
    price: '670',
    tag: 'Python',
    lesson: '32 ',
    status: 'alert-warning text-warning',
  },
  {
    imageUrl: 'home-login.png',
    title: 'GV.Nguyễn Hồng Thái',
    price: '670',
    tag: 'Python',
    lesson: '32 ',
    status: 'alert-warning text-warning',
  },
  {
    imageUrl: 'home-login.png',
    title: 'GV.Nguyễn Hồng Thái',
    price: '670',
    tag: 'Python',
    lesson: '32 ',
    status: 'alert-warning text-warning',
  },
  {
    imageUrl: 'home-login.png',
    title: 'GV.Nguyễn Hồng Thái',
    price: '670',
    tag: 'Python',
    lesson: '32 ',
    status: 'alert-warning text-warning',
  },

];

const avatar = require('../assets/images/custom/AvatarSm.png');

function Defaultuserprofile() {

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <Fragment>
      <div className="main-wrapper">
        <Navheader />

        <div className="main-content">
          <Appheader />

          <div className="middle-sidebar-bottom theme-dark-bg">
            <div className="middle-sidebar-left">
              <div className="mb-3">
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
                <div className="user-profile">
                  <div className="profile-header mont-font">
                    <div className="row">
                      <div className="col-12 col-md-12 col-xl-4 w-100">
                        <div className="profile-info">
                          <figure className="avatar">
                            <img
                              src={avatar}
                              alt="avatar"
                              className="shadow-sm rounded-circle w-100 profile-info__avt"
                            />
                          </figure>
                          <div className="clearfix"></div>
                          <h2 className="profile-info__name">
                            Nguyễn Hồng Thái
                          </h2>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="profile-follow">
                          <div className="profile-follow__wrap">
                            <span className="profile-follow__follows">
                              <p>300k</p>
                              <div>Người theo dõi</div>
                            </span>
                            <span className="profile-follow__you">
                              <p>20k</p>
                              <div>Bạn theo dõi</div>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="profile-social">
                          <div className="profile-social__wrap">
                            <ul className="d-flex align-items-center">
                              <li>
                                <span className="">
                                  <img style={{ borderRadius: '50%' }} alt="Youtube" src={require('../assets/images/Youtube.png')} />
                                </span>
                              </li>
                              <li>
                                <span className="">
                                  <img alt="Facebook" src={require('../assets/images/Facebook.png')} />
                                </span>
                              </li>
                              <li>
                                <span className="">
                                  <img className="rounded-circle" alt="Tiktok" src={require('../assets/images/Tiktok.png')} />
                                </span>
                              </li>
                              <li>
                                <button className="profile-social__btn">
                                  Theo dõi
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="profile-code roboto-font">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="profile-code__wrap">
                          <div className="profile-code__code">
                            <p className="profile__label">Mã MENTOR</p>
                            <div>ME 100234</div>
                          </div>
                          <div className="profile-code__star">
                            <p className="profile__label">MỨC XẾP HẠNG HỌC VIÊN</p>
                            <div>
                              <div className="starWrap profile-code__starWrap">
                                <div>
                                  <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                  <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                  <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                  <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                  <img alt="star" src={require('../assets/images/star-disable.png')} className="star-item" />
                                </div>

                                <b className="roboto-font">4.0</b>
                              </div>
                            </div>
                          </div>
                          <div className="profile-code__star">
                            <p className="profile__label">MỨC XẾP HẠNG MENTOR</p>
                            <div>
                              <div className="starWrap profile-code__starWrap">
                                <div>
                                  <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                  <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                  <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                  <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                  <img alt="star" src={require('../assets/images/star-disable.png')} className="star-item" />
                                </div>

                                <b className="roboto-font">4.0</b>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="profile-contribute roboto-font">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="profile-contribute__wrap">
                          <div className="profile-contribute__item">
                            <div className="profile-contribute__title">
                              <p className="profile__label">SỐ TÀI LIỆU ĐÃ ĐÓNG GÓP</p>
                              <span>20/100</span>
                            </div>
                            <div className="progress h5 w-100">
                              <div
                                className={`progress-bar bg-primary`}
                                role="progressbar"
                                style={{ width: `20%` }}
                              ></div>
                            </div>
                          </div>

                          <div className="profile-contribute__item">
                            <div className="profile-contribute__title">
                              <p className="profile__label">SỐ TÀI LIỆU ĐÃ ĐÓNG GÓP</p>
                              <span>20/100</span>
                            </div>
                            <div className="progress h5 w-100">
                              <div
                                className={`progress-bar bg-primary`}
                                role="progressbar"
                                style={{ width: `20%` }}
                              ></div>
                            </div>
                          </div>

                          <div className="profile-contribute__item">
                            <div className="profile-contribute__title">
                              <p className="profile__label">SỐ TÀI LIỆU ĐÃ ĐÓNG GÓP</p>
                              <span>20/100</span>
                            </div>
                            <div className="progress h5 w-100">
                              <div
                                className={`progress-bar bg-primary`}
                                role="progressbar"
                                style={{ width: `20%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="profile-contact roboto-font">
                    <div className="row">
                      <div className="col-lg-3">
                        <div className="profile-contact__item">
                          <div className="profile-contact__title">
                            <p className="profile__label">TRƯỜNG HỌC</p>
                            <Switch size="small" defaultChecked onChange={onChange} />
                          </div>
                          <div className="profile-contact__content">
                            Đại học kinh tế quốc dân
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="profile-contact__item">
                          <div className="profile-contact__title">
                            <p className="profile__label">NGÀY THÁNG NĂM SINH</p>
                            <Switch size="small" defaultChecked onChange={onChange} />
                          </div>
                          <div className="profile-contact__content">
                            01/07/2002
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="profile-contact__item">
                          <div className="profile-contact__title">
                            <p className="profile__label">EMAIL</p>
                            <Switch size="small" defaultChecked onChange={onChange} />
                          </div>
                          <div className="profile-contact__content">
                            nguyenthai9cc@gmail.com
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="profile-contact__item">
                          <div className="profile-contact__title">
                            <p className="profile__label">SỐ ĐIỆN THOẠI</p>
                            <Switch size="small" defaultChecked onChange={onChange} />
                          </div>
                          <div className="profile-contact__content">
                            0345508678
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="profile-courses">
                  <div className="card d-block w-100 border-0 shadow-xss rounded-lg overflow-hidden p-lg-4 p-2">
                    <div className="card-body mb-lg-3 pb-0">
                      <h2 className="fw-400 font-lg d-block">
                        Các môn <b>đang học</b>
                        <a
                          href="/default-user-profile"
                          className="float-right"
                        >
                          <i className="feather-edit text-grey-500 font-xs"></i>
                        </a>
                      </h2>
                    </div>
                    <div className="card-body  pb-0">
                      <div className="row">
                        {courseList.map((value, index) => (
                          <div
                            className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-4"
                            key={index}
                          >
                            <div className="profile-courses__item card w-100 p-0 overflow-hidden mr-1 course-card">
                              <div className="card-image w-100 mb-3">
                                <Link
                                  to="/coursedetails"
                                  className="video-bttn position-relative d-block"
                                >
                                  <img
                                    src={`assets/images/${value.imageUrl}`}
                                    alt="course"
                                    className="w-100 home-course__img"
                                  />
                                </Link>
                              </div>
                              <div className="card-body  home-course__card  pt-0">
                                <span
                                  className={`font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 d-inline-block mr-1 ${value.status}`}
                                >
                                  {value.tag}
                                </span>
                                <span className="home-course__numberUser  float-right">
                                  <span className="mr-1">{value.price}</span>
                                  <i>
                                    <UserSvg />
                                  </i>
                                </span>
                                <h4 className="fw-700 font-xss mt-3 lh-28 mt-0 mb-0 home-course__title">
                                  <Link
                                    to="/coursedetails"
                                    className="text-dark text-grey-900"
                                  >
                                    {value.title}
                                  </Link>
                                </h4>
                                <div className="d-flex">
                                  <img alt="star" src={require('../assets/images/star.png')} className="home-course__star" />
                                  <img alt="star" src={require('../assets/images/star.png')} className="home-course__star" />
                                  <img alt="star" src={require('../assets/images/star.png')} className="home-course__star" />
                                  <img alt="star" src={require('../assets/images/star.png')} className="home-course__star" />
                                  <img alt="star" src={require('../assets/images/star.png')} className="home-course__star" />
                                </div>
                                <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-3">
                                  {value.lesson} Chuyên đề
                                </h6>
                                <div className="mt-3  mb-2 d-flex justify-content-between align-items-center home-course__student">
                                  <ul className="memberlist mb-0 ml-0 d-block">
                                    <li>
                                      <a href="/">
                                        <img
                                          src="assets/images/user.png"
                                          alt="avater"
                                          className="w30 d-inline-block home-course__studentImg"
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/">
                                        <img
                                          src="assets/images/user.png"
                                          alt="avater"
                                          className="w30 d-inline-block home-course__studentImg"
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/">
                                        <img
                                          src="assets/images/user.png"
                                          alt="avater"
                                          className="w30 d-inline-block home-course__studentImg"
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/">
                                        <img
                                          src="assets/images/user.png"
                                          alt="avater"
                                          className="w30 d-inline-block home-course__studentImg"
                                        />
                                      </a>
                                    </li>
                                    <li className="last-member">
                                      <a
                                        href="/"
                                        className="bg-greylight fw-600 text-grey-500 font-xssss ls-3 text-center"
                                      >
                                        +2
                                      </a>
                                    </li>

                                  </ul>
                                  <span
                                    className="fw-500 text-grey-500 font-xssss home-course__studentJoin"
                                  >
                                    Sinh viên tham gia
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          // End Single Demo
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>


              <div className="col-lg-12 mont-font">
                {/* <div className="container-fluid"></div> */}
                <HomeFooter />
              </div>


            </div>
            <div className="middle-sidebar-right scroll-bar">
              <div className="middle-sidebar-right-content">
                <Profile />
                <Myclass />
                <Share />
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

export default Defaultuserprofile;
