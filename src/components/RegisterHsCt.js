import React, { useState } from 'react'
import { useFormik } from 'formik'
import YouASvg from '../assets/images/svg/auth/YouASvg'
import HoTenSvg from '../assets/images/svg/auth/HoTenSvg'
import EmailSvg from '../assets/images/svg/auth/EmailSvg'
import PhoneSvg from '../assets/images/svg/auth/PhoneSvg'
import ClassSvg from '../assets/images/svg/auth/ClassSvg'
import PasswordSvg from '../assets/images/svg/auth/PasswordSvg'
import { registerAction } from '../redux/actions/authActions/authAction'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const listClass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const regexPhone = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;


export default function RegisterHsCt() {

    let errorObj = {
        phone: "",
        confirmPassword: "",
    }
    const dispatch = useDispatch();
    const [error, setError] = useState(errorObj)

    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
            classId: "",
            referralCode: "",
            accountType: "PUPIL"
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
                accountType: "PUPIL",
                phone: values.phone,
                classId: values.classId
            }

            dispatch(registerAction(valuesSubmit));
        }
    })




    return (
        <>
            <div className="col-xl-12 vh-100 align-items-center d-flex bg-white rounded-lg">
                <div className="card shadow-none border-0 ml-auto mr-auto ">
                    <div className="card-body rounded-0 text-left">
                        <h2 className="fw-700 mb-2 font-md pb-4 text-yellow mont-font text-center pt-5 px-3">
                            Đăng ký ngay để trải nghiệm những gì tuyệt vời nhất về học tập nhé!
                        </h2>

                        <form onSubmit={formik.handleSubmit}>
                            <div style={{ borderRadius: 8 }} className="form-group icon-input mb-2 bg-input ">
                                <input
                                    type="text"
                                    className="register__type style2-input pl-5 border-none form-control text-blue font-xsss fw-700 bg-select text-blue"
                                    placeholder="Học sinh"
                                    disabled
                                />
                                <i className="font-sm text-grey-500 pr-0 text-blue fw-700">
                                    <YouASvg />
                                </i>
                            </div>
                            <div className="row mb-0">
                                <div className=" col-sm-6">
                                    <div className="form-group icon-input mb-2">
                                        <input
                                            type="text"
                                            className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                                            placeholder="Họ tên"
                                            name="fullName"
                                            onChange={formik.handleChange}
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
                                            className="style2-input pl-5 form-control input__number text-grey-900 font-xsss fw-600"
                                            placeholder="Số điện thoại"
                                            name="phone"
                                            required
                                            onChange={(event) => { formik.handleChange(event) }}
                                        />
                                        <i>
                                            <PhoneSvg />
                                        </i>
                                    </div>
                                    {error.phone && <div className="text-error">{error.phone}</div>}
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group icon-input mb-2">
                                        <i style={{ right: 15, left: 'unset' }} className="feather-chevron-down register__icon-down text-black"></i>
                                        <select
                                            name="classId"
                                            onChange={formik.handleChange}
                                            style={{ paddingTop: 0, paddingBottom: 0, lineHeight: 'normal' }}
                                            defaultValue=""
                                            required
                                            className="register__select mb-0 form-group icon-input w-100 style2-input pl-5 form-control fw-700 text-black"
                                        >
                                            <option className="style2-input pl-5 form-control  font-xsss fw-600 " value="" disabled hidden>
                                                Lớp
                                            </option>
                                            {listClass.map((value, index) => (
                                                <option value={value} key={index}>{value}</option>
                                            ))}
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
                                            name="password"
                                            onChange={formik.handleChange}
                                            autoComplete="on"
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
                                            name="confirmPassword"
                                            onChange={formik.handleChange}
                                            autoComplete="on"
                                            minLength="6"
                                        />
                                        <i>
                                            <PasswordSvg />
                                        </i>
                                    </div>
                                    {error.confirmPassword && <div className="text-error">{error.confirmPassword}</div>}

                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group icon-input mb-2">
                                        <input
                                            type="text"
                                            className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                                            placeholder="Mã giới thiệu (không bắt buộc)"
                                            name="referralCode"
                                            onChange={formik.handleChange}
                                            required
                                        />
                                        <i>
                                            <HoTenSvg />
                                        </i>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group mt-3 mb-1">
                                <button
                                    type="submit"
                                    className="form-control text-center style2-input text-white fw-600 bg-blue border-0 p-0 "
                                >
                                    Đăng ký
                                </button>
                            </div>
                        </form>
                        <div className="col-sm-12 p-0 text-left">

                            <h6 className="text-grey-500 mt-5 border-right pt-5 font-xssss fw-500 d-flex justify-content-center mt-0 mb-0 lh-32">
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
