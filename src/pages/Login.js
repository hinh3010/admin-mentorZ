import React, { Fragment, useState } from 'react';
import { useFormik } from "formik";
import { Link, useHistory } from 'react-router-dom';
import Logo from '../components/Logo';
import '../assets/css/color.css';
import '../assets/css/common/auth.css';
import AccountSvg from '../assets/images/svg/auth/AccountSvg';
import PasswordSvg from '../assets/images/svg/auth/PasswordSvg';
import { loginAction } from '../redux/actions/authActions/authAction';
import { useDispatch } from 'react-redux';


const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const regexPhone = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;


function Login() {

  const dispatch = useDispatch();

  const history = useHistory();

  const objError = {
    account: "",
    password: ""
  }

  const [error, setError] = useState(objError)

  const formik = useFormik({
    initialValues: {
      account: "",
      password: ""
    },
    onSubmit: values => {
      const { account, password } = values;
      let error = false;
      const errorsObj = { ...objError }


      if (!regexEmail.test(account) && !regexPhone.test(account)) {
        errorsObj.account = "Tài khoản không hợp lệ!!"
        error = true;
      }

      if (password.length < 6) {
        errorsObj.password = "Mật khẩu cần ít nhất 6 ký tự!!";
        error = true;
      }

      setError(errorsObj);
      if (error) return;

      dispatch(loginAction(values, history));
    }
  })

  return (
    <Fragment>
      <div className="main-wrap">
        <div className="row p-relative">
          <div
            className="col-xl-5 d-none d-xl-block login__bg p-0 vh-100 bg-image-cover bg-no-repeat"
            style={{ backgroundImage: `url("assets/images/home-login.png")` }}
          ></div>

          <div style={{ overflow: 'auto' }} className="col-xl-7 vh-lg-100 align-items-center bg-white rounded-lg">
            <div className="row">
              <Logo />
            </div>
            <div className="row shadow-none border-0 ml-auto mr-auto login-card h-100">
              <div className="card-body rounded-0 text-left pt-4 h-100 ">
                <h2 style={{ fontSize: 24 }} className="text-center fw-700 mb-2 pb-3 pt-2 text-social-zalo">
                  MentorZ là người bạn đồng hành trong việc học tập của bạn, hãy vào để trải nghiệm ngay nhé!
                </h2>
                <form onSubmit={formik.handleSubmit}>
                  <div style={{ marginBottom: 0, marginTop: '1rem' }} className="form-group icon-input">
                    <input
                      required
                      type="text"
                      className="style2-input pl-5 form-control text-grey-900 font-xssss fw-600"
                      placeholder="Đăng nhập bằng mail hoặc số điện thoại"
                      name="account"
                      onChange={formik.handleChange}
                    />
                    <i>
                      <AccountSvg />
                    </i>
                  </div>
                  {error.account && <div className="text-error">{error.account}</div>}
                  <div style={{ marginBottom: 0, marginTop: '1rem' }} className="form-group icon-input">
                    <input
                      type="Password"
                      required
                      className="style2-input pl-5 form-control text-grey-900 font-sm ls-3"
                      placeholder="Mật Khẩu"
                      name="password"
                      onChange={formik.handleChange}
                    />
                    <i className="">
                     <PasswordSvg />
                    </i>
                  </div>
                  {error.password && <div className="text-error">{error.password}</div>}
                  <div className=" text-left my-2 d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-between align-items-center">
                      <input
                        type="checkbox"
                        className="mr-2"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label fw-500 font-xssss text-grey-500"
                        htmlFor="exampleCheck1"
                      >
                        Lưu mật khẩu
                      </label>
                    </div>
                    <a
                      href="/forgot"
                      className="fw-600 font-xssss text-blue mt-1 float-right "
                    >
                      Quên mật khẩu ?
                    </a>
                  </div>
                  <div className="col-sm-12 p-0 text-left mb-2">
                    <div className="form-group mb-1 mr-0 ml-0 w-100 row d-flex justify-content-between" style={{ height: 50 }}>
                      <button
                        className="form-control cursor-pointer text-center style2-input text-white fw-600 bg-blue border-0 p-0 col-sm-9 "
                        type="submit"
                        onClick = {() => {
                            history.push('/');
                        }}
                      >
                        Đăng nhập
                      </button>
                      <img
                        src={`assets/images/QR.png`}
                        alt="QR"
                        className="col-sm-3 pl-3 pr-2 login__qr"
                      />
                    </div>
                    <h6 className="text-grey-500 font-xssss fw-600 mt-3 mb-0 lh-32">
                      Bạn chưa có tài khoản ?  {' '}
                      <Link to="/register" className="fw-600 text-blue  ml-1 ">
                        Đăng ký ngay
                      </Link>
                    </h6>
                  </div>
                </form>

                <div className="login__social-wrap col-sm-12 pl-0 pr-0 pt-5 text-center">
                  <h6 className="mb-0 d-inline-block bg-white fw-700 font-xssss text-grey-500 mb-3">
                    Cài đặt ứng dụng MentorZ trên điện thoại của bạn
                    giúp bạn có trải nghiệm tuyệt vời nhất{' '}
                  </h6>
                  <div className="form-group d-flex justify-content-between mr-0 ml-0 row p-0">
                    <div
                      style={{ height: 'fit-content' }}
                      className="col-sm-6 border-0 p-0"
                    >
                      <img
                        src={`assets/images/googlePlay.png`}
                        alt="social"
                        className="login__download h-100 mb-1 cursor-pointer"
                        style={{ objectFit: 'cover' }}
                      />
                      <img
                        src="assets/images/QRzalo.png"
                        alt="qr"
                        className="login__qr--social"
                      />
                    </div>
                    <div
                      className="form-control col-sm-6  border-0 p-0"
                      style={{ height: 'fit-content' }}
                    >
                      <img
                        src={`assets/images/appStore.png`}
                        alt="social"
                        className="login__download cursor-pointer h-100 mb-1"
                        style={{ objectFit: 'cover' }}
                      />
                      <img
                        src="assets/images/QRzalo.png"
                        alt="qr"
                        className="login__qr--social"
                      />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}


export default Login;
