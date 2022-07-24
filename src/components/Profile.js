import React, { } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
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

function Profile() {

  const history = useHistory();
  const detailUser = useSelector(state => state.authReducer.detailUser);
  const { accountType, fullName } = detailUser;

  const renderButton = () => {
    <button> 'THÔNG TIN CÁ NHÂN MENTOR' : 'ĐĂNG KÝ LÀM MENTOR</button>
    const index = accountType.findIndex(item => item === 'MENTOR');
    if (index === -1) {
      return <button>ĐĂNG KÝ LÀM MENTOR</button>
    } else {
      return <button
        onClick={() => { history.push('/default-mentor') }
        }>THÔNG TIN CÁ NHÂN MENTOR</button>

    }
  }

  const { pathname } = useLocation();

  const skillsettings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 300,
    centerMode: false,
    variableWidth: true,
  };
  return (
    <div className="card overflow-hidden subscribe-widget p-3 mb-3 rounded-xxl border-0">
      <div
        className="home-profile card-body p-2 d-block text-center bg-no-repeat bg-image-topcenter"
        style={{ backgroundImage: `url("assets/images/user-pattern.png")` }}
      >
        <figure className="avatar ml-auto mr-auto mb-0 mt-2 w90">
          <img
            src={avatar}
            alt="avatar"
            className="float-right shadow-sm rounded-circle w-100"
          />
        </figure>
        <div className="clearfix"></div>
        <h2 className="text-black font-xss lh-3 fw-700 mt-3 mb-1">
          {fullName}
        </h2>
        <h4 className="text-grey-500 font-xssss mt-0 fw-500">
          <span className="d-inline-block bg-success btn-round-xss m-0 mr-1"></span>
          AT170144
        </h4>
        <div className="clearfix"></div>
        <div className="col-12 text-center mt-4 mb-2 home-profile__mess">
          <a
            href="/message"
            className="p-0 ml-1 btn btn-round-md rounded-xl bg-lightblue"
          >
            <i className="text-current ti-comment-alt font-sm"></i>
          </a>
          {/* <a
            href="/login"
            className="p-0 ml-1 btn btn-round-md rounded-xl bg-lightblue"
          >
            <i className="text-current ti-lock font-sm"></i>
          </a> */}
          <a
            href="/"
            className="p-0 btn p-2 lh-24 w100 ml-1 ls-3 d-inline-block rounded-xl bg-current font-xsssss fw-700 ls-lg text-white"
          >
            30+ Điểm A+
          </a>
        </div>
        {/* <ul className="list-inline border-0 mt-4">
          <li className="list-inline-item text-center mr-4">
            <h4 className="fw-700 font-md">
              500+
              <span className="font-xsssss fw-500 mt-1 text-grey-500 d-block">
                Connections
              </span>
            </h4>
          </li>
          <li className="list-inline-item text-center mr-4">
            <h4 className="fw-700 font-md">
              88.7 k
              <span className="font-xsssss fw-500 mt-1 text-grey-500 d-block">
                Follower
              </span>
            </h4>
          </li>
          <li className="list-inline-item text-center">
            <h4 className="fw-700 font-md">
              1,334
              <span className="font-xsssss fw-500 mt-1 text-grey-500 d-block">
                Followings
              </span>
            </h4>
          </li>
        </ul> */}

        <div className="starWrap mt-4 mx-auto">
          <div>
            <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
            <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
            <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
            <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
            <img alt="star" src={require('../assets/images/star-disable.png')} className="star-item" />
          </div>

          <b className="roboto-font">4.0</b>
        </div>

        <div className="profile__approval">
          {renderButton()}
        </div>
        {/* <div className="col-12 pl-0 mt-4 text-left">
          <h4 className="text-grey-800 font-xsss fw-700 mb-3 d-block">
            My Skill
            <a href="/">
              <i className="ti-angle-right font-xsssss text-grey-700 float-right "></i>
            </a>
          </h4>
          <Slider {...skillsettings}>
            {skillList.map((value, index) => (
              <div key={index} className="mr-1">
                <a href="/" className="btn-round-xxxl border bg-greylight">
                  <img
                    src={`assets/images/${value.skill}`}
                    alt="icon"
                    className="p-3 w-100"
                  />
                </a>
              </div>
            ))}
          </Slider>
        </div> */}
      </div>
    </div>
  );

}

export default Profile;
