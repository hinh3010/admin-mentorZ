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

function Defaultcourseone() {
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
            <div className="middle-sidebar-left">
              <div className="row">
                <div className="col-xl-12">
                  <div className="card border-0 mb-0 rounded-lg overflow-hidden  course-detail__video">
                    <ReactPlayer
                      controls={true}
                      width="100%"
                      height="100%"
                      className="react-player"
                      url={`https://www.youtube.com/watch?v=YRFSTg9IXNc`}
                    />
                  </div>
                  <div className="card d-block border-0 rounded-lg overflow-hidden dark-bg-transparent bg-transparent mt-4 pb-3">
                    <h2 className="fw-700 font-md d-block lh-4 mb-2">
                      KHÓA HỌC TOÁN CAO CẤP
                    </h2>
                  </div>

                  <div className="row">
                    <div className="col-lg-6">
                      <div className="course-detail__info--wrap">
                        <div className="d-flex">
                          <figure className="avatar">
                            <img
                              src={avatar}
                              alt="avatar"
                              className="shadow-sm rounded-circle w-100 profile-info__avt"
                            />
                          </figure>
                          <div className="course-detail__info">
                            <h3 className="course-detail__name">
                              GV Vũ Minh Đức
                            </h3>
                            <div className="course-detail__list">
                              <div className="course-detail__item">
                                <i>
                                  <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1.61803L8.09607 4.99139L8.20833 5.33688H8.5716H12.1186L9.24901 7.42173L8.95511 7.63526L9.06737 7.98075L10.1634 11.3541L7.29389 9.26925L7 9.05573L6.70611 9.26925L3.83656 11.3541L4.93263 7.98075L5.04489 7.63526L4.75099 7.42173L1.88145 5.33688H5.4284H5.79167L5.90393 4.99139L7 1.61803Z" stroke="black" />
                                  </svg>
                                </i>
                                <span>
                                  4,4 Đánh giá của giảng viên
                                </span>
                              </div>
                              <div className="course-detail__item">
                                <i>
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.33366 1.33341H10.667V8.33342H2.01616L1.33366 9.01591V1.33341ZM1.33366 0.166748C0.691992 0.166748 0.172826 0.691748 0.172826 1.33341L0.166992 11.8334L2.50033 9.50008H10.667C11.3087 9.50008 11.8337 8.97508 11.8337 8.33342V1.33341C11.8337 0.691748 11.3087 0.166748 10.667 0.166748H1.33366ZM2.50033 5.41675H9.50033V6.58342H2.50033V4.25008V5.41675ZM2.50033 3.66675H9.50033V4.83342H2.50033V2.50008V3.66675Z" fill="black" />
                                  </svg>

                                </i>
                                <span>
                                  121.123 nhận xét
                                </span>
                              </div>
                              <div className="course-detail__item">
                                <i>
                                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.72363 5.65918C10.5228 6.20168 11.0828 6.93668 11.0828 7.91668V9.66668H13.4161V7.91668C13.4161 6.64501 11.3336 5.89251 9.72363 5.65918Z" fill="black" />
                                    <path d="M8.74947 4.99992C10.0386 4.99992 11.0828 3.95575 11.0828 2.66659C11.0828 1.37742 10.0386 0.333252 8.74947 0.333252C8.4753 0.333252 8.21863 0.391585 7.97363 0.473252C8.4578 1.07409 8.74947 1.83825 8.74947 2.66659C8.74947 3.49492 8.4578 4.25909 7.97363 4.85992C8.21863 4.94159 8.4753 4.99992 8.74947 4.99992Z" fill="black" />
                                    <path d="M5.24935 4.99992C6.53852 4.99992 7.58268 3.95575 7.58268 2.66659C7.58268 1.37742 6.53852 0.333252 5.24935 0.333252C3.96018 0.333252 2.91602 1.37742 2.91602 2.66659C2.91602 3.95575 3.96018 4.99992 5.24935 4.99992ZM5.24935 1.49992C5.89102 1.49992 6.41602 2.02492 6.41602 2.66659C6.41602 3.30825 5.89102 3.83325 5.24935 3.83325C4.60768 3.83325 4.08268 3.30825 4.08268 2.66659C4.08268 2.02492 4.60768 1.49992 5.24935 1.49992Z" fill="black" />
                                    <path d="M5.24967 5.58325C3.69217 5.58325 0.583008 6.36492 0.583008 7.91659V9.66659H9.91634V7.91659C9.91634 6.36492 6.80717 5.58325 5.24967 5.58325ZM8.74967 8.49992H1.74967V7.92242C1.86634 7.50242 3.67467 6.74992 5.24967 6.74992C6.82467 6.74992 8.63301 7.50242 8.74967 7.91659V8.49992Z" fill="black" />
                                  </svg>

                                </i>
                                <span>
                                  818.312 sinh viên
                                </span>
                              </div>
                              <div className="course-detail__item">
                                <i>
                                  <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.2497 0.916667C11.6022 0.7125 10.8905 0.625 10.208 0.625C9.07051 0.625 7.84551 0.858333 6.99967 1.5C6.15384 0.858333 4.92884 0.625 3.79134 0.625C2.65384 0.625 1.42884 0.858333 0.583008 1.5V10.0458C0.583008 10.1917 0.728841 10.3375 0.874674 10.3375C0.933008 10.3375 0.962174 10.3083 1.02051 10.3083C1.80801 9.92917 2.94551 9.66667 3.79134 9.66667C4.92884 9.66667 6.15384 9.9 6.99967 10.5417C7.78717 10.0458 9.21634 9.66667 10.208 9.66667C11.1705 9.66667 12.1622 9.84167 12.9788 10.2792C13.0372 10.3083 13.0663 10.3083 13.1247 10.3083C13.2705 10.3083 13.4163 10.1625 13.4163 10.0167V1.5C13.0663 1.2375 12.6872 1.0625 12.2497 0.916667ZM12.2497 8.79167C11.608 8.5875 10.908 8.5 10.208 8.5C9.21634 8.5 7.78717 8.87917 6.99967 9.375V2.66667C7.78717 2.17083 9.21634 1.79167 10.208 1.79167C10.908 1.79167 11.608 1.87917 12.2497 2.08333V8.79167Z" fill="black" />
                                  </svg>

                                </i>
                                <span>
                                  20 khóa học
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="course-detail__info--wrap">
                        <div className="course-progress__wrap">
                          <h4 className="course-progress__title">
                            Khóa học đã thực hiện
                          </h4>
                          <div className="progress w-100 course-progress__content">
                            <div
                              className={`progress-bar primary`}
                              role="progressbar"
                              style={{ width: `50%` }}
                            >50%</div>
                          </div>
                          <h5 className="course-progress__sub">
                            50% khóa học đã được thực hiện
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>



                  {/* <div className="card d-block border-0 rounded-lg p-4 course-detail__target">
                    <h2>
                      Mục tiêu
                    </h2>
                    <h4 className="pl-30 position-relative">
                      <i className="ti-check text-white position-absolute left-0"></i>
                      <span>
                        Create awesome animated splash screens for any Excel
                        project such as animation with password access to a work
                        book, loading animation.
                      </span>
                    </h4>
                    <h4 className="pl-30 position-relative">
                      <i className="ti-check text-white position-absolute left-0"></i>
                      <span>
                        Create awesome animated splash screens for any Excel
                        project such as animation with password access to a work
                        book, loading animation.
                      </span>
                    </h4>
                    <h4 className="pl-30 position-relative">
                      <i className="ti-check text-white position-absolute left-0"></i>
                      <span>
                        Create awesome animated splash screens for any Excel
                        project such as animation with password access to a work
                        book, loading animation.
                      </span>
                    </h4>
                    <h4 className="pl-30 position-relative">
                      <i className="ti-check text-white position-absolute left-0"></i>
                      <span>
                        Create awesome animated splash screens for any Excel
                        project such as animation with password access to a work
                        book, loading animation.
                      </span>
                    </h4>
                    <h4 className="pl-30 position-relative">
                      <i className="ti-check text-white position-absolute left-0"></i>
                      <span>
                        Create awesome animated splash screens for any Excel
                        project such as animation with password access to a work
                        book, loading animation.
                      </span>
                    </h4>
                    <h4 className="pl-30 position-relative">
                      <i className="ti-check text-white position-absolute left-0"></i>
                      <span>
                        Create awesome animated splash screens for any Excel
                        project such as animation with password access to a work
                        book, loading animation.
                      </span>
                    </h4>
                  </div> */}

                  {/* <div className="card d-block border-0 rounded-lg p-4 course-detail__document">
                    <h2>
                      Tài liệu tham khảo
                    </h2>
                    <div className="course-detail__slider">
                      <Slider {...latestSlider}>
                        {latestList.map((value, index) => (
                          <div
                            className="home-course__card card course-card w250 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-3 mb-4"
                            style={{ minHeight: 470 }}
                            key={index}
                          >
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
                            <div className="card-body pt-0">
                              <h4 className="fw-700 font-xss mt-3 lh-23 mt-0 mb-0">
                                <Link
                                  to="/coursedetails"
                                  className="text-dark text-grey-900"
                                >
                                  {value.title}
                                </Link>
                              </h4>
                              <h6 style={{}} className="font-xssss text-grey-500 mt-1 fw-600 ml-0">
                                Giảng viên: {value.name}
                              </h6>
                              <h3 style={{ color: 'var(--red)' }} className="fw-700 font-xssss lh-23">
                                {value.fee}
                              </h3>
                              <div>
                                <span className="mr-3">
                                  <i className="mr-1">
                                    <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M3 9H8V10.25H3V9ZM3 6.5H8V7.75H3V6.5ZM6.75 0.25H1.75C1.0625 0.25 0.5 0.8125 0.5 1.5V11.5C0.5 12.1875 1.05625 12.75 1.74375 12.75H9.25C9.9375 12.75 10.5 12.1875 10.5 11.5V4L6.75 0.25ZM9.25 11.5H1.75V1.5H6.125V4.625H9.25V11.5Z" fill="black" />
                                    </svg>

                                  </i>
                                  <span className="fw-700 font-xssss lh-23">{value.document}</span>
                                </span>

                                <span>
                                  <i className="mr-1">
                                    <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M7.5 1.75C9.86875 1.75 11.9812 3.08125 13.0125 5.1875C11.9812 7.29375 9.86875 8.625 7.5 8.625C5.13125 8.625 3.01875 7.29375 1.9875 5.1875C3.01875 3.08125 5.13125 1.75 7.5 1.75ZM7.5 0.5C4.375 0.5 1.70625 2.44375 0.625 5.1875C1.70625 7.93125 4.375 9.875 7.5 9.875C10.625 9.875 13.2937 7.93125 14.375 5.1875C13.2937 2.44375 10.625 0.5 7.5 0.5ZM7.5 4.875C8.3625 4.875 9.0625 5.575 9.0625 6.4375C9.0625 7.3 8.3625 6.75 7.5 6.75C6.6375 6.75 5.9375 6.05 5.9375 5.1875C5.9375 4.325 6.6375 3.625 7.5 3.625M7.5 2.375C5.95 2.375 4.6875 3.6375 4.6875 5.1875C4.6875 6.7375 5.95 8 7.5 8C9.05 8 10.3125 6.7375 10.3125 5.1875C10.3125 3.6375 9.05 2.375 7.5 2.375Z" fill="black" />
                                    </svg>
                                  </i>
                                  <span className="fw-700 font-xssss lh-23">{value.view}</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div> */}
                </div>
                <div className="col-xl-12">

                  <div className="card rounded-lg border-0 p-4 mb-4">
                    <h2 className="font-sm fw-700 lh-700 text-grey-900 d-block mb-3">Tổng quan về môn toán cao cấp</h2>
                    <div className="course-detail__description">Create awesome animated splash screens for any Excel project such as animation with password access to a work book, loading animation.</div>
                  </div>

                  <div className="card rounded-lg border-0 p-4 mb-4">
                    <h4 className="font-sm fw-700 lh-700 text-grey-900 d-block mb-3">
                      Lộ trình học tập
                    </h4>
                    <div className="card-body d-flex p-0">
                      <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600 course-detail__index">
                        1
                      </span>
                      <span className="font-xssss fw-700 text-grey-500 ml-2 course-detail__nameSubject">
                        Chương 1: Số thực
                      </span>
                      <span className="ml-auto font-xssss fw-700 text-grey-500">
                        12 bài
                      </span>
                    </div>
                    <div className="card-body d-flex p-0 mt-3">
                      <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600 course-detail__index">
                        2
                      </span>
                      <span className="font-xssss fw-700 text-grey-500 ml-2 course-detail__nameSubject">
                        Chương 2: Dãy số thực
                      </span>
                      <span className="ml-auto font-xssss fw-700 text-grey-500">
                        12 bài
                      </span>
                    </div>

                    <div className="card-body d-flex p-0 mt-3">
                      <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600 course-detail__index">
                        3
                      </span>
                      <span className="font-xssss fw-700 text-grey-500 ml-2 course-detail__nameSubject">
                        Chương 3: Giới hạn của hàm số một biến
                      </span>
                      <span className="ml-auto font-xssss fw-700 text-grey-500">
                        12 bài
                      </span>
                    </div>

                    <div className="card-body d-flex p-0 mt-3">
                      <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600 course-detail__index">
                        4
                      </span>
                      <span className="font-xssss fw-700 text-grey-500 ml-2 course-detail__nameSubject">
                        Chương 4: Hàm số liên tục
                      </span>
                      <span className="ml-auto font-xssss fw-700 text-grey-500">
                        12 bài
                      </span>
                    </div>

                    <div className="card-body d-flex p-0 mt-3">
                      <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600 course-detail__index">
                        5
                      </span>
                      <span className="font-xssss fw-700 text-grey-500 ml-2 course-detail__nameSubject">
                        Chương 5: Đạo hàm và vi phân của hàm số một biến
                      </span>
                      <span className="ml-auto font-xssss fw-700 text-grey-500">
                        12 bài
                      </span>
                    </div>

                    <div className="card-body d-flex p-0 mt-3">
                      <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600 course-detail__index">
                        6
                      </span>
                      <span className="font-xssss fw-700 text-grey-500 ml-2 course-detail__nameSubject">
                        Chương 6: Tích phân bất định
                      </span>
                      <span className="ml-auto font-xssss fw-700 text-grey-500">
                        12 bài
                      </span>
                    </div>
                  </div>

                  <div className="card rounded-lg border-0 p-4 mb-4">
                    <h4 style={{ marginBottom: 28 }} className="font-sm fw-700 lh-700 text-grey-900 d-block">
                      Khoảng thời gian thi cuối kỳ
                    </h4>
                    <div className="course-detail__exam">
                      <input type="number" placeholder="Ngày" />
                      <input type="number" placeholder="Tháng" />
                      <input type="number" placeholder="Năm" />
                    </div>
                  </div>

                  <div className="card rounded-lg border-0 p-4 mb-4">
                    <h4 className="font-sm fw-700 lh-700 text-grey-900 d-block mb-3">
                      Đề thi thử
                    </h4>
                    <div className="card-body d-flex p-0">
                      <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600 course-detail__index">
                        1
                      </span>
                      <span className="font-xssss fw-700 text-grey-500 ml-2 course-detail__nameSubject">
                        Đề số 1
                      </span>
                      <span className="ml-auto font-xssss fw-700 text-grey-500">
                        120 phút
                      </span>
                    </div>
                    <div className="card-body d-flex p-0 mt-3">
                      <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600 course-detail__index">
                        2
                      </span>
                      <span className="font-xssss fw-700 text-grey-500 ml-2 course-detail__nameSubject">
                        Đề số 2
                      </span>
                      <span className="ml-auto font-xssss fw-700 text-grey-500">
                        120 phút
                      </span>
                    </div>

                    <div className="card-body d-flex p-0 mt-3">
                      <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600 course-detail__index">
                        3
                      </span>
                      <span className="font-xssss fw-700 text-grey-500 ml-2 course-detail__nameSubject">
                        Đề số 3
                      </span>
                      <span className="ml-auto font-xssss fw-700 text-grey-500">
                        120 phút
                      </span>
                    </div>

                    <div className="card-body d-flex p-0 mt-3">
                      <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600 course-detail__index">
                        4
                      </span>
                      <span className="font-xssss fw-700 text-grey-500 ml-2 course-detail__nameSubject">
                        Đề số 4
                      </span>
                      <span className="ml-auto font-xssss fw-700 text-grey-500">
                        120 phút
                      </span>
                    </div>

                    <div className="card-body d-flex p-0 mt-3">
                      <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600 course-detail__index">
                        5
                      </span>
                      <span className="font-xssss fw-700 text-grey-500 ml-2 course-detail__nameSubject">
                        Đề số 5
                      </span>
                      <span className="ml-auto font-xssss fw-700 text-grey-500">
                        120 phút
                      </span>
                    </div>

                    <div className="card-body d-flex p-0 mt-3">
                      <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600 course-detail__index">
                        6
                      </span>
                      <span className="font-xssss fw-700 text-grey-500 ml-2 course-detail__nameSubject">
                        Đề số 6
                      </span>
                      <span className="ml-auto font-xssss fw-700 text-grey-500">
                        120 phút
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="middle-sidebar-right scroll-bar">
              <div className="middle-sidebar-right-content">
                <Evaluate />
              </div>
            </div>
          </div>
        </div>

        <Appfooter />
      </div>
    </Fragment>
  );

}

export default Defaultcourseone;
