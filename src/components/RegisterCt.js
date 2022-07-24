import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { hideSocial, showSocial } from '../redux/actions/authActions/authAction';
function RegiserCt(props) {

  const dispatch = useDispatch();
  const [link, setLink] = useState(``);
  const history = useHistory();

  const handleRegister = () => {
    if (link === "-hs" || link === "-sv") {
      dispatch(showSocial('Student'));
    } else {
      dispatch(hideSocial('Mentor'));
    }
    history.push(`register${link}`);
  }

  useEffect(() => {
    dispatch(hideSocial());
  }, [])

  return (
    <Fragment>
      <div className="shadow-none border-0 login-card m-auto">
        <div className="card-body rounded-0 text-left">
          <h2 className="register__title fw-700 mont-font text-yellow">
            Đăng ký ngay để trải nghiệm những gì tuyệt vời nhất về học tập nhé!
          </h2>
          <h4 className="register__sub-title roboto-font">Chọn danh tính của bạn để  đăng ký nhé</h4>
          <form className="w-100" name="vaiTro">
            <div className="p-relative">
              <i className="register__icon-select text-blue">
                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.8333 2.5H10.35C10 1.53333 9.08333 0.833333 8 0.833333C6.91667 0.833333 6 1.53333 5.65 2.5H2.16667C1.25 2.5 0.5 3.25 0.5 4.16667V15.8333C0.5 16.75 1.25 17.5 2.16667 17.5H13.8333C14.75 17.5 15.5 16.75 15.5 15.8333V4.16667C15.5 3.25 14.75 2.5 13.8333 2.5ZM8 2.5C8.45833 2.5 8.83333 2.875 8.83333 3.33333C8.83333 3.79167 8.45833 4.16667 8 4.16667C7.54167 4.16667 7.16667 3.79167 7.16667 3.33333C7.16667 2.875 7.54167 2.5 8 2.5ZM8 5.83333C9.38333 5.83333 10.5 6.95 10.5 8.33333C10.5 9.71667 9.38333 10.8333 8 10.8333C6.61667 10.8333 5.5 9.71667 5.5 8.33333C5.5 6.95 6.61667 5.83333 8 5.83333ZM13 15.8333H3V14.6667C3 13 6.33333 12.0833 8 12.0833C9.66667 12.0833 13 13 13 14.6667V15.8333Z" fill="#0049F6" />
                </svg>

              </i>
              <select onChange={(e) => setLink(e.target.value)} defaultValue="" className="register__select form-group icon-input mb-3 w-100 border-0 bg-select text-blue fw-700 " style={{ height: 60 }}>
                <option className="form-group icon-input bg-select text-blue fw-700 " value="" disabled hidden>
                  Bạn là
                </option>
                <option value="-pupil" >Học sinh</option>
                <option value="-student">Sinh viên</option>
                <option value="-mentor">Mentor</option>
              </select>
              <i className="feather-chevron-down register__icon-down text-blue"></i>
            </div>
          </form>

          <div className="col-sm-12 p-0 text-left">
            <div style={{ marginBottom: 21 }} className="form-group">
              <button
                onClick={() => { handleRegister() }}
                className="form-control text-center style2-input text-white fw-600 bg-blue border-0 p-0 "
              >
                Đăng ký
              </button>
            </div>
            <h6 className="text-grey-500 font-xssss mont-font fw-500 mt-0 mb-0">
              Bạn đã có tài khoản ? {' '}
              <Link to="/login" className="fw-700 ml-1 mont-font text-green">
                Đăng nhập ngay
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </Fragment>
  );
}


export default RegiserCt;
