import React, { useState } from 'react';
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';
import ASvg from '../assets/images/svg/home/A+Svg';
import CfsSvg from '../assets/images/svg/home/CfsSvg';
import ThiSvg from '../assets/images/svg/home/ThiSvg';
import Darkbutton from '../components/Darkbutton';
import Logo from './Logo';
import "../assets/css/common/home.css"
import "../assets/css/common/header.css"
import TaiLieuSvg from '../assets/images/svg/home/TaiLieuSvg';
import MonHocSvg from '../assets/images/svg/home/MonHocSvg';
import TaiLieuHocTap from '../assets/images/svg/home/TaiLieuHocTap';
import { logoutAction } from '../redux/actions/authActions/authAction';
import { useDispatch } from 'react-redux';


const banner = require('../assets/images/custom/Banner.png');
const bannerMentor = require('../assets/images/custom/BannerMentor.png');
const bannerStudent = require('../assets/images/custom/BannerStudent.png');

function Appheader() {
  const [state, setState] = useState({
    isOpen: false,
    isActive: false,
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const toggleOpen = () => setState({ isOpen: !state.isOpen });
  const toggleActive = () => setState({ isActive: !state.isActive });

  const [showLogout, setShowLogout] = useState(false)


  const navClass = `${state.isOpen ? ' nav-active' : ''}`;
  const searchClass = `${state.isActive ? ' show' : ''}`;

  const handleLogOut = () => {
    dispatch(logoutAction(history))
  }

  const { pathname } = useLocation();

  return (
    <div className="middle-sidebar-header bg-white">
      <div className={`app-header-search ${searchClass}`}>
        <form className="search-form">
          <div className="form-group searchbox mb-0 border-0 p-1">
            <input
              type="text"
              className="form-control border-0"
              placeholder="Search..."
            />
            <i className="input-icon">
              <ion-icon
                name="search-outline"
                role="img"
                className="md hydrated"
                aria-label="search outline"
              ></ion-icon>
            </i>
            <span className="ms-1 mt-1 d-inline-block close searchbox-close">
              <i className="ti-close font-xs" onClick={toggleActive}></i>
            </span>
          </div>
        </form>
      </div>

      <button onClick={toggleOpen} className="header-menu"></button>
      <form action="#" className="float-left header-search">
        <div className="form-group mb-0 icon-input nav-left__search">
          <i style={{ top: '50%' }} className="feather-search font-lg"></i>
          <input
            type="text"
            placeholder="Tìm kiếm thông tin tại đây"
            className="bg-transparent border-0 lh-32 pt-2 pb-2 pl-5 pr-3 font-xsss fw-500 rounded-xl w350"
          />
        </div>
      </form>
      <ul className="d-flex ml-auto mr-5 right-menu-icon home__navTop">
        <li>
          <Link to="#">
            <span className="dot-count bg-warning"></span>
            <i className="feather-bell font-xl text-current"></i>
            <div className="menu-dropdown">
              <h4 className="fw-700 font-xs mb-4">Notification</h4>
              <div className="card bg-transparent-card w-100 border-0 pl-5 mb-3">
                <img
                  src="assets/images/user-8.png"
                  alt="user"
                  className="w40 position-absolute left-0"
                />
                <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
                  Hendrix Stamp
                  <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
                    3 min
                  </span>
                </h5>
                <h6 className="text-grey-500 fw-500 font-xssss lh-4">
                  There are many variations of pass..
                </h6>
              </div>
              <div className="card bg-transparent-card w-100 border-0 pl-5 mb-3">
                <img
                  src="assets/images/user-4.png"
                  alt="user"
                  className="w40 position-absolute left-0"
                />
                <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
                  Goria Coast
                  <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
                    2 min
                  </span>
                </h5>
                <h6 className="text-grey-500 fw-500 font-xssss lh-4">
                  Mobile Apps UI Designer is require..
                </h6>
              </div>

              <div className="card bg-transparent-card w-100 border-0 pl-5 mb-3">
                <img
                  src="assets/images/user-7.png"
                  alt="user"
                  className="w40 position-absolute left-0"
                />
                <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
                  Surfiya Zakir
                  <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
                    1 min
                  </span>
                </h5>
                <h6 className="text-grey-500 fw-500 font-xssss lh-4">
                  Mobile Apps UI Designer is require..
                </h6>
              </div>
              <div className="card bg-transparent-card w-100 border-0 pl-5">
                <img
                  src="assets/images/user-6.png"
                  alt="user"
                  className="w40 position-absolute left-0"
                />
                <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
                  Victor Exrixon
                  <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
                    30 sec
                  </span>
                </h5>
                <h6 className="text-grey-500 fw-500 font-xssss lh-4">
                  Mobile Apps UI Designer is require..
                </h6>
              </div>
            </div>
          </Link>
        </li>
        <Darkbutton />

        <li>
          <Link to="/message">
            <i className="feather-message-square font-xl text-current"></i>
          </Link>
        </li>
        <li onClick={() => {
          setShowLogout(!showLogout);
        }} className="p-relative">
          <span className="cursor-pointer">
            <img
              src="assets/images/user.png"
              alt="user"
              className="w40 mt--1 rounded-circle"
            />
          </span>
          <div
            style={{
              display: `${showLogout ? '' : 'none'}`
            }} className={`main-header__logOut`}>
            <div>
              <Link className="main-header__profile" to="/default-user-profile">
                Trang cá nhân
              </Link>
              <span onClick={() => handleLogOut()} className="main-header__logOut--btn">
                Đăng xuất
              </span>
            </div>
          </div>
        </li>
        <li>
          <span onClick={toggleActive} className="menu-search-icon">
            <i className="feather-search text-grey-900 font-lg"></i>
          </span>
        </li>
      </ul>

      <nav className={`navigation scroll-bar ${navClass}`}>
        <div className="container pl-0 pr-0">
          <div className="nav-content">
            <div className="nav-top">
              <Logo />
              <span
                onClick={toggleOpen}
                className="close-nav d-inline-block d-lg-none"
              >
                <i className="ti-close bg-grey mb-4 btn-round-sm font-xssss fw-700 text-dark ml-auto mr-2 "></i>
              </span>
            </div>


            {
              pathname === '/default-mt' ?
                <>
                  <div className="nav-caption fw-600 font-xssss text-grey-500">
                    <span>Danh </span>mục
                  </div>
                  <ul className="mb-3">
                    <li className="logo d-none d-xl-block d-lg-block"></li>
                    <li>
                      <NavLink
                        activeClassName="active"
                        to="/default-mt"
                        className="nav-content-bttn open-font home__nav"
                        data-tab="chats"
                      >
                        <i className="feather-tv mr-3"></i>
                        <span>Tạo khóa học</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        activeClassName="active"
                        to="/default-follower"
                        className=" nav-content-bttn open-font home__nav"
                        data-tab="friends"
                      >
                        <i className="feather-shopping-bag mr-3"></i>
                        <span>Quản lý khóa học</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        activeClassName="active"
                        to="/default-channel"
                        className="nav-content-bttn open-font home__nav"
                        data-tab="favorites"
                      >
                        <i style={{ marginLeft: 2 }} className="mr-3">
                          <ASvg />
                        </i>
                        <span>Quản lý A+</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        activeClassName="active"
                        to="/default-live-stream"
                        className="nav-content-bttn open-font home__nav"
                        data-tab="favorites"
                      >
                        <i style={{ marginLeft: 2 }} className="mr-3">
                          <TaiLieuSvg />
                        </i>
                        <span>Tài liệu</span>
                      </NavLink>
                    </li>
                  </ul>

                  <div className="home-btn__wrap">
                    <button>Tạo khóa học nhanh</button>
                  </div>

                  <div style={{ backgroundImage: `url(${bannerMentor})` }} className="nav-left__banner mentor mt-4">
                    {/* <button className="nav-left___join-btn roboto-font">Tham gia ngay</button> */}
                  </div>
                </>
                :
                <>
                  <div className="nav-caption fw-600 font-xssss text-grey-500">
                    <span>Danh </span>mục
                  </div>
                  <ul className="mb-3">
                    <li className="logo d-none d-xl-block d-lg-block"></li>
                    <li>
                      <NavLink
                        activeClassName="active"
                        to="/"
                        exact={true}
                        className="nav-content-bttn open-font home__nav"
                        data-tab="chats"
                      >
                        <i style={{ marginLeft: 2 }} className="mr-3">
                          <MonHocSvg />
                        </i>
                        <span>Môn học</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        activeClassName="active"
                        to="/default-follower"
                        className=" nav-content-bttn open-font home__nav"
                        data-tab="friends"
                      >
                        <i style={{ marginLeft: 2 }} className="mr-3">
                          <TaiLieuHocTap />
                        </i>
                        <span>Tài liệu học tập</span>

                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        activeClassName="active"
                        to="/default-channel"
                        className="nav-content-bttn open-font home__nav"
                        data-tab="favorites"
                      >
                        <i style={{ marginLeft: 2 }} className="mr-3">
                          <ASvg />
                        </i>
                        <span>Quản lý A+</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        activeClassName="active"
                        to="/default-live-stream"
                        className="nav-content-bttn open-font home__nav"
                        data-tab="favorites"
                      >
                        <i style={{ marginLeft: 2 }} className="mr-3">
                          <ThiSvg />
                        </i>
                        <span>Thi tự do</span>
                      </NavLink>
                    </li>
                    <li className="flex-lg-brackets">
                      <NavLink
                        activeClassName="active"
                        to="/default-user-profile"
                        data-tab="archived"
                        className="nav-content-bttn open-font home__nav"
                      >
                        <i style={{ marginLeft: 2 }} className="mr-3">
                          <CfsSvg />
                        </i>
                        <span>Confession</span>
                      </NavLink>
                    </li>
                  </ul>

                  <div style={{ backgroundImage: `url(${bannerStudent})` }} className="nav-left__banner mt-4">
                    {/* <button className="nav-left___join-btn roboto-font">Tham gia ngay</button> */}
                  </div>

                  <div className="nav-caption fw-600 font-xssss text-grey-500">
                    <span>Bảng </span>xếp hạng
                  </div>
                  <ul className="mb-3 open-font">
                    <li>
                      <Link
                        to="/default-author-profile"
                        className="nav-content-bttn open-font pl-2 pb-2 pt-1 h-auto rank__link"
                        data-tab="chats"
                      >
                        <img
                          src="assets/images/user.png"
                          alt="user"
                          className="rank__avt"
                        />
                        <div className="rank__name--wrap">
                          <div className="rank__name">Nguyễn Hồng Thái</div>
                          <div className="rank__type roboto-font">Sinh viên</div>
                        </div>
                        {/* <span className="circle-icon bg-success mt-3"></span> */}
                        <div className="rank__star">
                          <div>5.0</div>
                          <img src={require('../assets/images/star.png')} alt="star" />
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/default-author-profile"
                        className="nav-content-bttn open-font pl-2 pb-2 pt-1 h-auto rank__link"
                        data-tab="chats"
                      >
                        <img
                          src="assets/images/user.png"
                          alt="user"
                          className="rank__avt"
                        />
                        <div className="rank__name--wrap">
                          <div className="rank__name">Chu Bá Hiếu</div>
                          <div className="rank__type roboto-font">Sinh viên</div>
                        </div>
                        {/* <span className="circle-icon bg-warning mt-3"></span> */}
                        <div className="rank__star">
                          <div>5.0</div>
                          <img src={require('../assets/images/star.png')} alt="star" />
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/default-author-profile"
                        className="nav-content-bttn open-font pl-2 pb-2 pt-1 h-auto rank__link"
                        data-tab="chats"
                      >
                        <img
                          src="assets/images/user.png"
                          alt="user"
                          className="rank__avt"
                        />
                        <div>
                          <div className="rank__name">Nguyễn Thị Thảo</div>
                          <div className="rank__type roboto-font">Sinh viên</div>
                        </div>
                        {/* <span className="circle-icon bg-success mt-3"></span> */}
                        <div className="rank__star">
                          <div>5.0</div>
                          <img src={require('../assets/images/star.png')} alt="star" />
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/default-author-profile"
                        className="nav-content-bttn open-font pl-2 pb-2 pt-1 h-auto rank__link"
                        data-tab="chats"
                      >
                        <img
                          src="assets/images/user.png"
                          alt="user"
                          className="rank__avt"
                        />
                        <div>
                          <div className="rank__name">Nguyễn Văn Duy</div>
                          <div className="rank__type roboto-font">Sinh viên</div>
                        </div>
                        {/* <span className="circle-icon bg-success mt-3"></span> */}
                        <div className="rank__star">
                          <div>5.0</div>
                          <img src={require('../assets/images/star.png')} alt="star" />
                        </div>
                      </Link>
                    </li>
                  </ul>
                </>
            }



            <div className="nav-caption fw-600 font-xssss text-grey-500">
              <span></span> Tài khoản
            </div>
            <ul style={{ marginBottom: 40 }}>
              <li className="logo d-none d-xl-block d-lg-block"></li>
              <li>
                <Link
                  to="/default-settings"
                  className="nav-content-bttn open-font h-auto pt-2 pb-2"
                >
                  <i className="font-sm feather-settings mr-3 text-grey-500"></i>
                  <span>Cài đặt</span>
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/default-analytics"
                  className="nav-content-bttn open-font h-auto pt-2 pb-2"
                >
                  <i className="font-sm feather-pie-chart mr-3 text-grey-500"></i>
                  <span>Analytics</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/message"
                  className="nav-content-bttn open-font h-auto pt-2 pb-2"
                >
                  <i className="font-sm feather-message-square mr-3 text-grey-500"></i>
                  <span>Chat</span>
                  <span className="circle-count bg-warning mt-0">23</span>
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav >
    </div >
  );

}

export default Appheader;
