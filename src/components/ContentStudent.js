import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import CauhoiSvg from '../assets/images/svg/home/CauhoiSvg';
import HinhanhSvg from '../assets/images/svg/home/HinhanhSvg';
import UserSvg from '../assets/images/svg/home/UserSvg';
import VanbanSvg from '../assets/images/svg/home/VanbanSvg';
import VideoSvg from '../assets/images/svg/home/VideoSvg';
import { getClassAction } from '../redux/actions/homeActions/homeActions';
import { showHomeModal } from '../redux/actions/uiActions/uiActions';
import ModalQA from './ModalQA';


const latestList = [
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
        title: 'GV.Nguyễn Thị Thu',
        price: '760',
        tag: 'Bootstrap',
        lesson: '14 ',
        status: 'alert-primary text-primary',
    },
    {
        imageUrl: 'home-login.png',
        title: 'GV.Nguyễn Thị Thu',
        price: '370',
        tag: 'Develop',
        lesson: '23 ',
        status: 'alert-danger text-danger',
    },
    {
        imageUrl: 'home-login.png',
        title: 'GV.Nguyễn Thị Thu',
        price: '2400',
        tag: 'Python',
        lesson: '32 ',
        status: 'alert-warning text-warning',
    },
    {
        imageUrl: 'home-login.png',
        title: 'GV.Nguyễn Thị Thu',
        price: '40',
        tag: 'Desinger',
        lesson: '24 ',
        status: 'alert-danger text-danger',
    },
];
const popularList = [
    {
        imageUrl: 'course.png',
        title: 'Complete Python Bootcamp From Zero to Hero in Python ',
        price: '2400',
        tag: 'Python',
        lesson: '32 ',
        status: 'alert-warning text-warning',
    },
    {
        imageUrl: 'course.png',
        title: 'Complete Python Bootcamp From Zero to Hero in Python ',
        price: '40',
        tag: 'Desinger',
        lesson: '24 ',
        status: 'alert-danger text-danger',
    },
    {
        imageUrl: 'course.png',
        title: 'Java Programming Masterclass for Developers',
        price: '60',
        tag: 'Bootstrap',
        lesson: '14 ',
        status: 'alert-success text-success',
    },
    {
        imageUrl: 'course.png',
        title: 'The Data Science Course Complete Data Science ',
        price: '370',
        tag: 'Develop',
        lesson: '23 ',
        status: 'alert-danger text-danger',
    },
    {
        imageUrl: 'course.png',
        title: 'Complete Python Bootcamp From Zero to Hero in Python ',
        price: '450',
        tag: 'Desinger',
        lesson: '24 ',
        status: 'alert-danger text-danger',
    },
];

const classesList12 = [
    {
        imageUrl: 'user.png',
        class: 12,
        title: 'Bootstrap',
        num: '32 Course',
        bg: '#fcf1eb',
    },
    {
        imageUrl: 'user.png',
        title: 'HTML',
        class: 12,
        num: '54 Course',
        bg: '#fff9eb',
    },
    {
        imageUrl: 'user.png',
        title: 'Jquery',
        class: 12,
        num: '76 Course',
        bg: '#e5f4fb',
    },
    {
        imageUrl: 'user.png',
        title: 'SASS',
        class: 12,
        num: '76 Course',
        bg: '#dcf4f8',
    },
    {
        imageUrl: 'user.png',
        title: 'React',
        class: 12,
        num: '23 Course',
        bg: '#fcf1eb',
    },

    {
        imageUrl: 'user.png',
        title: 'JAVA',
        class: 12,
        num: '78 Course',
        bg: '#fff9eb',
    },
    {
        imageUrl: 'user.png',
        title: 'Python',
        class: 12,
        num: '65 Course',
        bg: '#e5f4fb',
    },
    {
        imageUrl: 'user.png',
        title: 'MongoDB',
        class: 12,
        num: '11 Course',
        bg: '#fcf1eb',
    },
    {
        imageUrl: 'user.png',
        title: 'Bootstrap',
        class: 12,
        num: '32 Course',
        bg: '#fcf1eb',
    },
    {
        imageUrl: 'user.png',
        title: 'Bootstrap',
        class: 12,
        num: '32 Course',
        bg: '#fff9eb',
    },
];
const classesList11 = [
    {
        imageUrl: 'user.png',
        class: 11,
        title: 'Bootstrap',
        num: '32 Course',
        bg: '#fcf1eb',
    },
    {
        imageUrl: 'user.png',
        title: 'HTML',
        class: 11,
        num: '54 Course',
        bg: '#fff9eb',
    },
    {
        imageUrl: 'user.png',
        title: 'Jquery',
        class: 11,
        num: '76 Course',
        bg: '#e5f4fb',
    },
    {
        imageUrl: 'user.png',
        title: 'SASS',
        class: 11,
        num: '76 Course',
        bg: '#dcf4f8',
    },
    {
        imageUrl: 'user.png',
        title: 'React',
        class: 11,
        num: '23 Course',
        bg: '#fcf1eb',
    },

    {
        imageUrl: 'user.png',
        title: 'JAVA',
        class: 11,
        num: '78 Course',
        bg: '#fff9eb',
    },
    {
        imageUrl: 'user.png',
        title: 'Python',
        class: 11,
        num: '65 Course',
        bg: '#e5f4fb',
    },
    {
        imageUrl: 'user.png',
        title: 'MongoDB',
        class: 11,
        num: '11 Course',
        bg: '#fcf1eb',
    },
    {
        imageUrl: 'user.png',
        title: 'Bootstrap',
        class: 11,
        num: '32 Course',
        bg: '#fcf1eb',
    },
    {
        imageUrl: 'user.png',
        title: 'Bootstrap',
        class: 11,
        num: '32 Course',
        bg: '#fff9eb',
    },
];
const classesList10 = [
    {
        imageUrl: 'user.png',
        class: 10,
        title: 'Bootstrap',
        num: '32 Course',
        bg: '#fcf1eb',
    },
    {
        imageUrl: 'user.png',
        title: 'HTML',
        class: 10,
        num: '54 Course',
        bg: '#fff9eb',
    },
    {
        imageUrl: 'user.png',
        title: 'Jquery',
        class: 10,
        num: '76 Course',
        bg: '#e5f4fb',
    },
    {
        imageUrl: 'user.png',
        title: 'SASS',
        class: 10,
        num: '76 Course',
        bg: '#dcf4f8',
    },
    {
        imageUrl: 'user.png',
        title: 'React',
        class: 10,
        num: '23 Course',
        bg: '#fcf1eb',
    },

    {
        imageUrl: 'user.png',
        title: 'JAVA',
        class: 10,
        num: '78 Course',
        bg: '#fff9eb',
    },
    {
        imageUrl: 'user.png',
        title: 'Python',
        class: 10,
        num: '65 Course',
        bg: '#e5f4fb',
    },
    {
        imageUrl: 'user.png',
        title: 'MongoDB',
        class: 10,
        num: '11 Course',
        bg: '#fcf1eb',
    },
    {
        imageUrl: 'user.png',
        title: 'Bootstrap',
        class: 10,
        num: '32 Course',
        bg: '#fcf1eb',
    },
    {
        imageUrl: 'user.png',
        title: 'Bootstrap',
        class: 10,
        num: '32 Course',
        bg: '#fff9eb',
    },
];

const memberList = [
    {
        imageUrl: 'user.png',
        name: 'Aliqa Macale ',
        email: 'Một bài kiểm tra dành cho những người sử dụng tiếng Anh như một ngoại ngữ, muốn sử dụng tiếng anh trong môi trường gioao tiếp và làm việc',
        bgimage: 'course.png',
    },
    {
        imageUrl: 'user.png',
        name: 'John Steere ',
        email: 'Một bài kiểm tra dành cho những người sử dụng tiếng Anh như một ngoại ngữ, muốn sử dụng tiếng anh trong môi trường gioao tiếp và làm việc',
        bgimage: 'course.png',
    },
    {
        imageUrl: 'user.png',
        name: 'Mohannad Zitoun ',
        email: 'Một bài kiểm tra dành cho những người sử dụng tiếng Anh như một ngoại ngữ, muốn sử dụng tiếng anh trong môi trường gioao tiếp và làm việc',
        bgimage: 'course.png',
    },
    {
        imageUrl: 'user.png',
        name: 'Aliqa Macale ',
        email: 'Một bài kiểm tra dành cho những người sử dụng tiếng Anh như một ngoại ngữ, muốn sử dụng tiếng anh trong môi trường gioao tiếp và làm việc',
        bgimage: 'course.png',
    },
    {
        imageUrl: 'user.png',
        name: 'Hendrix Stamp ',
        email: 'Một bài kiểm tra dành cho những người sử dụng tiếng Anh như một ngoại ngữ, muốn sử dụng tiếng anh trong môi trường gioao tiếp và làm việc',
        bgimage: 'course.png',
    },
    {
        imageUrl: 'user.png',
        name: 'Mohannad Zitoun ',
        email: 'Một bài kiểm tra dành cho những người sử dụng tiếng Anh như một ngoại ngữ, muốn sử dụng tiếng anh trong môi trường gioao tiếp và làm việc',
        bgimage: 'course.png',
    },
    {
        imageUrl: 'user.png',
        name: 'John Steere ',
        email: 'Một bài kiểm tra dành cho những người sử dụng tiếng Anh như một ngoại ngữ, muốn sử dụng tiếng anh trong môi trường gioao tiếp và làm việc',
        bgimage: 'course.png',
    },
];


export default function ContentStudent() {
    const categorysettings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 300,
        centerMode: false,
        variableWidth: true,
        slidesToScroll: 3,
    };
    const popularSlider = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 300,
        centerMode: false,
        variableWidth: true,
    };
    const latestSlider = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 300,
        centerMode: false,
        variableWidth: true,
        slidesToScroll: 2,
    };
    const memberSlider = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 300,
        centerMode: false,
        variableWidth: true,
    };

    const dispatch = useDispatch();
    const { detailUser } = useSelector(state => state.authReducer);
    const allClass = useSelector(state => state.homeReducer.class);

    useEffect(() => {
        dispatch(getClassAction(detailUser.education.id, "PUPIL"));
    }, [])

    const renderSubjects = () => {
        return allClass.map((item, index) => {
            return <React.Fragment key={index}>
                <div className="col-lg-12 pt-4 mb-3 home__class-title">
                    <div className="d-flex justify-content-between">
                        <h2 className="fw-400 font-lg home__title d-block">
                            Các môn học <b> Khối {item.class.class}</b>
                        </h2>
                        <span className="float-right home__seeMore">
                            Xem thêm
                        </span>
                    </div>
                </div>
                <div className="col-lg-12 mb-3">
                    <Slider {...categorysettings}>
                        {item.subject.map((value, index1) => (

                            <div
                                key={index1}
                                className="card cat-card-hover mr-3 w140 border-0 p-0 text-center"
                            >
                                <div
                                    className="card-body p-4 ml-0"
                                    style={{ background: `#fcf1eb`, borderRadius: 4 }}
                                >
                                    <div style={{ color: `#C75517` }} className="bg-white mx-auto home__class">
                                        <span>Lớp</span>
                                        <div>
                                            {item.class.class}
                                        </div>
                                    </div>
                                    <h4 className="fw-600 font-xsss mt-3 mb-0">
                                        {value.name}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </React.Fragment>
        })
    }

    return (
        <Fragment>
            <ModalQA />
            <div className="col-lg-12 pt-2">
                <h2 className="fw-400 font-lg home__title">
                    Hỏi bài <b>tại đây này</b>
                    <a href="/" className="float-right">
                        <i className="feather-edit text-grey-500 font-xs"></i>
                    </a>
                </h2>
            </div>
            <div className="home-post container-fluid mx-3">
                <div className="row w-100 home-post__row">
                    <div className="d-none d-xl-block col-xl-3" style={{ textAlign: 'center' }}>
                        <img src={require('../assets/images/custom/Avatar.png')} alt="avatar" className="home-post__avt" />
                    </div>
                    <div className="col-12 col-xl-9">
                        <div onClick={() => {
                            dispatch(showHomeModal("text"))
                        }} className="home-post__input" >
                            <input className="cursor-pointer" placeholder="Hỏi bài ngay, các Mentor đã sẵn sàng hỗ trợ bạn rồi đó!" disabled />
                        </div>
                        <div className="d-flex justify-content-between home-post__option">
                            <div onClick={() => {
                                dispatch(showHomeModal("text"))
                            }} style={{ background: '#0055FF' }} className="home-post__btn mont-font">
                                <i>
                                    <VanbanSvg />
                                </i>
                                <span>Dạng văn bản</span>
                            </div>
                            <div onClick={() => {
                                dispatch(showHomeModal("image"))
                            }} style={{ background: '#FE9431' }} className="home-post__btn mont-font">
                                <i>
                                    <HinhanhSvg />
                                </i>
                                <span>Dạng hình ảnh</span>
                            </div>
                            <div onClick={() => {
                                dispatch(showHomeModal("video"))
                            }} style={{ background: '#FF0000' }} className="home-post__btn mont-font">
                                <i>
                                    <VideoSvg />
                                </i>
                                <span>Dạng video</span>
                            </div>
                            <div style={{ background: '#178F55' }} className="home-post__btn mont-font">
                                <i>
                                    <CauhoiSvg />
                                </i>
                                <span>Quản lý câu hỏi</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            {renderSubjects()}

            <div className="col-lg-12 pt-4 mt-3 home__class-title">
                <div className="d-flex justify-content-between">
                    <h2 className="fw-400 font-lg home__title d-block">
                        Các môn học <b> được các bạn lựa chọn nhiều nhất</b>
                    </h2>
                    <span className="float-right home__seeMore">
                        Xem thêm
                    </span>
                </div>
            </div>
            <div className="col-lg-12 mt-3">
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
                                <h4 className="fw-700 font-xss mt-3 lh-28 mt-0 mb-0">
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
                                <div className="mt-3  mb-2 d-flex justify-content-between align-items-center">
                                    <ul className="memberlist mb-0 ml-0 d-block">
                                        <li>
                                            <a href="/">
                                                <img
                                                    src="assets/images/user.png"
                                                    alt="avater"
                                                    className="w30 d-inline-block"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <img
                                                    src="assets/images/user.png"
                                                    alt="avater"
                                                    className="w30 d-inline-block"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <img
                                                    src="assets/images/user.png"
                                                    alt="avater"
                                                    className="w30 d-inline-block"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <img
                                                    src="assets/images/user.png"
                                                    alt="avater"
                                                    className="w30 d-inline-block"
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
                                        className="fw-500 text-grey-500 font-xssss"
                                    >
                                        Sinh viên tham gia
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>


            <div className="col-lg-12 pt-4 mt-3 home__class-title">
                <div className="d-flex justify-content-between">
                    <h2 className="fw-400 font-lg home__title d-block">
                        Các khóa học <b> Mới nhất</b>
                    </h2>
                    <span className="float-right home__seeMore">
                        Xem thêm
                    </span>
                </div>

            </div>
            <div className="col-lg-12 mt-3">
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
                                <h4 className="fw-700 font-xss mt-3 lh-28 mt-0 mb-0">
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
                                <div className="mt-3  mb-2 d-flex justify-content-between align-items-center">
                                    <ul className="memberlist mb-0 ml-0 d-block">
                                        <li>
                                            <a href="/">
                                                <img
                                                    src="assets/images/user.png"
                                                    alt="avater"
                                                    className="w30 d-inline-block"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <img
                                                    src="assets/images/user.png"
                                                    alt="avater"
                                                    className="w30 d-inline-block"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <img
                                                    src="assets/images/user.png"
                                                    alt="avater"
                                                    className="w30 d-inline-block"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <img
                                                    src="assets/images/user.png"
                                                    alt="avater"
                                                    className="w30 d-inline-block"
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
                                        className="fw-500 text-grey-500 font-xssss"
                                    >
                                        Sinh viên tham gia
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>


            <div className="col-lg-12 pt-4 mt-3 home__class-title">
                <div className="d-flex justify-content-between">
                    <h2 className="fw-400 font-lg home__title d-block">
                        Ôn thi chứng chỉ quốc tế <b> - định hướng nghề nghiệp</b>
                    </h2>
                    <span className="float-right home__seeMore">
                        Xem thêm
                    </span>
                </div>
            </div>
            <div className="col-lg-12 mt-3">
                <Slider {...memberSlider}>
                    {memberList.map((value, index) => (
                        <div
                            className="card w200 d-block border-0 shadow-xss rounded-lg overflow-hidden mb-4 mr-2"
                            key={index}
                        >
                            <div
                                className="card-body position-relative h100 bg-gradiant-bottom bg-image-cover bg-image-center"
                                style={{
                                    backgroundImage: `url(assets/images/${value.bgimage})`,
                                }}
                            ></div>
                            <div className="card-body d-block w-100 pl-3 pr-3 pb-4 text-center">
                                <figure className="avatar ml-auto mr-auto mb-0 mt--6 position-relative w75 z-index-1">
                                    <img
                                        src={`assets/images/${value.imageUrl}`}
                                        alt="avater"
                                        className="float-right p-1 bg-white rounded-circle w-100"
                                    />
                                </figure>
                                <div className="clearfix"></div>
                                <h4 className="fw-600 font-xsss mt-3 mb-1 text-black">
                                    {value.name}
                                </h4>
                                <p className="home-cer__content roboto-font">
                                    {value.email}
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </Fragment>
    )
}
