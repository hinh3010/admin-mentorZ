import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import ClassSvg from '../assets/images/svg/auth/ClassSvg';
import EmailSvg from '../assets/images/svg/auth/EmailSvg';
import HoTenSvg from '../assets/images/svg/auth/HoTenSvg';
import PasswordSvg from '../assets/images/svg/auth/PasswordSvg';
import PhoneSvg from '../assets/images/svg/auth/PhoneSvg';
import ReferalSvg from '../assets/images/svg/auth/ReferalSvg';
import SchoolSvg from '../assets/images/svg/auth/SchoolSvg';
import YouASvg from '../assets/images/svg/auth/YouASvg';
import { registerAction } from '../redux/actions/authActions/authAction';
import { getAllClassAction, getClassAction, getEducationAction } from '../redux/actions/homeActions/homeActions';
import { getEducation } from '../services/homeServices/homeServices';

const listClass = [1, 2, 3, 4, 5, 6, 7, 8];
const regexPhone = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;

export default function RegisterSvCt() {


    let errorObj = {
        phone: "",
        confirmPassword: "",
    }
    const dispatch = useDispatch();
    const history = useHistory();
    const [error, setError] = useState(errorObj)


    const allEducation = useSelector(state => state.homeReducer.education);
    const renderEducation = () => {
        return allEducation.map((item, index) => {
            if (item.educationType === "UNIVERSITY") {
                return <option key={index} value={item.id}>{item.name}</option>
            }
        })
    }

    const allClass = useSelector(state => state.homeReducer.class);
    const renderClass = () => {
        if(allClass.length === 0 || !allClass) {
            return <option value="" disabled>Vui lòng chọn trường học của bạn trước!!</option>
        } else {
            return allClass.map((item, index) => {
                return <option key={index} value={item.id}>{item.class}</option>
            })
        }
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: "",
            phone: "",
            fullName: "",
            referralCode: "",
            educationId: "",
            accountType: "STUDENT",
            classId: ""
        },
        onSubmit: (values) => {
            let errors = { ...errorObj };
            let isError = false;

            if (!regexPhone.test(values.phone)) {
                errors.phone = 'Số điện thoại không hợp lệ!!';
                isError = true;
            }

            if (values.confirmPassword !== values.password) {
                errors.confirmPassword = 'Mật khẩu không khớp!!';
                isError = true;
            }

            setError(errors);

            if (isError) return;

            const valuesSubmit = {
                email: values.email,
                password: values.password,
                fullName: values.fullName,
                referralCode: values.referralCode,
                accountType: "STUDENT",
                phone: values.phone,
                classId: values.classId,
                educationId: values.educationId
            }

            console.log(values)

            dispatch(registerAction(valuesSubmit, history));
        }
    })

    useEffect(() => {
        dispatch(getEducationAction());
    }, [])
    return (
        <>
            <div className="col-xl-12 vh-100 align-items-center pl-5 pr-5 d-flex bg-white rounded-lg overflow-hidden">
                <div className="card shadow-none border-0 ml-auto mr-auto ">
                    <div className="card-body rounded-0 text-left">
                        <h2 className="fw-700 mb-2 font-md pb-4 text-yellow mont-font text-center pt-5 px-3">
                            Đăng ký ngay để trải nghiệm những gì tuyệt vời nhất về học tập nhé!
                        </h2>

                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group icon-input mb-2 bg-input">
                                <input
                                    type="text"
                                    className="register__type style2-input pl-5 border-none form-control text-blue font-xsss fw-700 bg-select text-blue"
                                    placeholder="Sinh viên"
                                    disabled
                                />
                                <i className="font-sm text-grey-500 pr-0 text-blue fw-700">
                                    <YouASvg />
                                </i>
                            </div>
                            <div className="row mb-3">
                                <div className=" col-sm-6">
                                    <div className="form-group icon-input mb-2">
                                        <input
                                            type="text"
                                            name="fullName"
                                            onChange={formik.handleChange}
                                            className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                                            placeholder="Họ tên"
                                            required
                                            minleng="6"
                                            maxleng="30"
                                        />
                                        <i>
                                            <HoTenSvg />
                                        </i>
                                    </div>

                                    <div className="form-group icon-input mb-2">
                                        <input
                                            type="email"
                                            required
                                            name="email"
                                            onChange={formik.handleChange}
                                            className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                                            placeholder="Email"
                                        />
                                        <i>
                                            <EmailSvg />
                                        </i>
                                    </div>
                                    <div className="form-group icon-input mb-2">
                                        <input
                                            type="text"
                                            name="phone"
                                            onChange={formik.handleChange}
                                            className="style2-input pl-5 form-control input__number text-grey-900 font-xsss fw-600"
                                            placeholder="Số điện thoại"
                                        />
                                        <i>
                                            <PhoneSvg />
                                        </i>
                                    </div>
                                    {error.phone && <div className="text-error">{error.phone}</div>}
                                    <div className="form-group icon-input mb-2">
                                        <i style={{ right: 15, left: 'unset' }} className="feather-chevron-down register__icon-down text-black"></i>
                                        <select
                                            name="educationId"
                                            required
                                            onChange={(event) => {
                                                dispatch(getAllClassAction(event.target.value))
                                                formik.handleChange(event)
                                            }
                                            }
                                            style={{ paddingTop: 0, paddingBottom: 0, lineHeight: 'normal' }}
                                            defaultValue=""
                                            className="register__select form-group icon-input mb w-100 style2-input pl-5 form-control fw-700 text-black"
                                        >
                                            <option className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600 " value="" disabled hidden>
                                                Chọn trường đại học
                                            </option>
                                            {renderEducation()}
                                        </select>
                                        <i>
                                            <SchoolSvg />
                                        </i>
                                    </div>

                                </div>
                                <div className=" col-sm-6">
                                    <div className="form-group icon-input mb-2">
                                        <i style={{ right: 15, left: 'unset' }} className="feather-chevron-down register__icon-down text-black"></i>
                                        <select
                                            name="classId"
                                            onChange={formik.handleChange}
                                            style={{ paddingTop: 0, paddingBottom: 0, lineHeight: 'normal' }}
                                            defaultValue=""
                                            required
                                            className="register__select form-group icon-input mb-0 w-100 style2-input pl-5 form-control fw-700 text-black"
                                        >
                                            <option className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600 " value="" disabled hidden>
                                                Sinh viên năm thứ
                                            </option>
                                            {renderClass()}
                                        </select>
                                        <i>
                                            <ClassSvg />
                                        </i>
                                    </div>

                                    <div className="form-group icon-input mb-2">
                                        <input
                                            type="password"
                                            className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                                            placeholder="Mật khẩu"
                                            autoComplete="on"
                                            name="password"
                                            onChange={formik.handleChange}
                                            minLength="6"
                                        />
                                        <i>
                                            <PasswordSvg />
                                        </i>
                                    </div>
                                    <div className="form-group icon-input mb-2">
                                        <input
                                            type="password"
                                            className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                                            placeholder="Nhập lại mật khẩu"
                                            autoComplete="on"
                                            minLength="6"
                                            name="confirmPassword"
                                            onChange={formik.handleChange}
                                        />
                                        <i>
                                            <PasswordSvg />
                                        </i>
                                    </div>
                                    {error.confirmPassword && <div className="text-error">{error.confirmPassword}</div>}
                                    <div className="form-group icon-input mb-2">
                                        <input
                                            type="text"
                                            name="referralCode"
                                            onChange={formik.handleChange}
                                            className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                                            placeholder="Nhập mã giới thiệu"
                                        />
                                        <i>
                                            <ReferalSvg />
                                        </i>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mb-1">
                                <button
                                    type="submit"
                                    className="form-control text-center style2-input text-white fw-600 bg-blue border-0 p-0 "
                                >
                                    Đăng ký
                                </button>
                            </div>
                        </form>

                        <div className="col-sm-12 p-0 text-left">
                            <h6 className="text-grey-500 mt-5 border-right pt-4 font-xssss fw-500 d-flex justify-content-center mt-0 mb-0 lh-32">
                                Bạn đã có tài khoản ? {' '}
                                <Link to="/login" className="fw-700 ml-1 text-green">
                                    Đăng nhập ngay
                                </Link>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
