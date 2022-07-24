import { useFormik } from 'formik'
import React, { useState } from 'react'
import { message, Select } from 'antd';
import { useDispatch } from 'react-redux'
import EmailSvg from '../assets/images/svg/auth/EmailSvg'
import FileSvg from '../assets/images/svg/auth/FileSvg'
import HoTenSvg from '../assets/images/svg/auth/HoTenSvg'
import JobSvg from '../assets/images/svg/auth/JobSvg'
import PasswordSvg from '../assets/images/svg/auth/PasswordSvg'
import PhoneSvg from '../assets/images/svg/auth/PhoneSvg'
import SubjectSvg from '../assets/images/svg/auth/SubjectSvg'
import YouASvg from '../assets/images/svg/auth/YouASvg'
import { registerAction } from '../redux/actions/authActions/authAction'
import axios from 'axios';
import { attachmentService } from '../services/authServices/AuthServices';
import { Link } from 'react-router-dom';

const regexPhone = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
const { Option } = Select;

const arraySubject = [
    { value: 'toan', label: 'Toán' },
    { value: 'van', label: 'Văn' },
    { value: 'anh', label: 'Anh' },
    { value: 'lich su', label: 'Lịch Sử' },
    { value: 'The duc', label: 'Thể dục' },
]


export default function RegisterMtCt() {

    let errorObj = {
        phone: "",
        confirmPassword: "",
        subjectId: "",
        fileUrl: ""

    }
    const dispatch = useDispatch();
    const [error, setError] = useState(errorObj)
    const [arraySubjectId, setArrayObjectId] = useState([])

    const handleChangeSubjectId = (value) => {
        setArrayObjectId(value)
        if (value.length > 3) {
            message.error('Chỉ được chọn tối đa 3 môn học!')
        }
    };
    // console.log(arraySubjectId)

    const renderOptions = () => {
        return arraySubject.map((item, index) => {
            return <Option value={item.value} label={item.label}>
                <div className="demo-option-label-item">
                    {item.label}
                </div>
            </Option>
        })
    }

    const [imgPaperUrl, setImgPaperUrl] = useState([]);
    const setImgUrl = async (value) => {
        if (value.files && value.files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(value.files[0]);
            const formData = new FormData();
            formData.append("files", value.files[0])
            if (imgPaperUrl.length <= 3) {
                try {
                    const newData = [...imgPaperUrl];
                    const formData = new FormData();
                    formData.append("files", value.files[0])
                    const path = await attachmentService(formData);
                    newData.push(path.data[0].path)
                    setImgPaperUrl(newData);
                } catch (err) {
                    message.error(err.response.data);
                }
            } else {
                message.error("Chỉ được chọn tối đa 3 chứng chỉ!")
            }
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

            if (arraySubjectId.length === 0 || !arraySubjectId) {
                errors.subjectId = 'Vui lòng chọn môn học!!';
                isError = true;
            } else if (arraySubjectId.length > 3) {
                errors.subjectId = 'Chỉ được chọn tối đa 3 môn học!!';
                isError = true;
            }

            if (imgPaperUrl.length === 0 || !imgPaperUrl) {
                errors.fileUrl = 'Vui lòng chọn chứng chỉ!!';
                isError = true;
            }

            setError(errors);


            console.log(errors);
            if (isError) return;

            const valuesSubmit = {
                email: values.email,
                password: values.password,
                fullName: values.fullName,
                referralCode: values.referralCode,
                accountType: "MENTOR",
                phone: values.phone,
                workplace: values.workplace,
                subjects: {
                    subjectId: arraySubjectId,
                    fileUrl: imgPaperUrl
                }
            }
            dispatch(registerAction(valuesSubmit));
        }
    })

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
                                    placeholder="Mentor"
                                    disabled
                                />
                                <i className="font-sm text-grey-500 pr-0 text-blue fw-700">
                                    <YouASvg />
                                </i>
                            </div>
                            <div className="row">
                                <div className=" col-sm-6">
                                    <div className="form-group icon-input mb-2">
                                        <input
                                            type="text"
                                            className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                                            placeholder="Họ tên"
                                            required
                                            name="fullName"
                                            onChange={formik.handleChange}
                                            minleng="6"
                                            maxleng="30"
                                        />
                                        <i>
                                            <HoTenSvg />
                                        </i>
                                    </div>
                                    <div className="form-group icon-input mb-2">
                                        <i style={{ right: 15, left: 'unset' }} className="feather-chevron-down register__icon-down text-black"></i>
                                        <Select
                                            mode="multiple"
                                            // open={true}
                                            placeholder="Môn học Mentor đảm nhận"
                                            onChange={handleChangeSubjectId}
                                            optionLabelProp="label"
                                            // dropdownMatchSelectWidth = {false}
                                            className="register-mt__select form-control"
                                        >
                                            {renderOptions()}
                                        </Select>
                                        <i>
                                            <SubjectSvg />
                                        </i>
                                    </div>
                                    {error.subjectId && <div className="text-error">{error.subjectId}</div>}
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
                                    {/* <div className="form-group icon-input mb-2 ">
                                        <i className="font-sm ti-clip text-grey-500 pr-0"></i>
                                        <input type="file"
                                            className="font-xssss  text-grey-500 pr-0 border-0 style2-input "
                                        />
                                    </div> */}
                                    <div className="form-group icon-input mb-2">
                                        {/* <input type="file" id="file-register" hidden /> */}
                                        <input
                                            type="file"
                                            value=""
                                            accept="image/png, image/jpeg"
                                            onChange={(e) => {
                                                setImgUrl(e.target);
                                            }
                                            }
                                            onClick={(event) => {
                                                event.target.value = null
                                            }}
                                            className="site-button form-control"
                                            id="file-register"
                                            placeholder="Tải lên kích cỡ 3 MB"
                                            hidden
                                        />
                                        <label htmlFor="file-register" style={{ display: 'flex', alignItems: 'center', lineHeight: 'normal' }} className="cursor-pointer register__select mb-0 icon-input w-100 style2-input pl-5 fw-700 text-black">
                                            Upload các file chứng chỉ liên quan đến môn học
                                        </label>
                                        <i>
                                            <FileSvg />
                                        </i>
                                    </div>
                                    {error.fileUrl && <div className="text-error">{error.fileUrl}</div>}
                                </div>
                                <div className=" col-sm-6">
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
                                        <input
                                            type="text"
                                            name="workplace"
                                            onChange={formik.handleChange}
                                            className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                                            placeholder="Nơi làm việc"
                                        />
                                        <i>
                                            <JobSvg />
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
                                            name="confirmPassword"
                                            onChange={formik.handleChange}
                                            className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                                            placeholder="Nhập lại mật khẩu"
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

                            <div className="col-sm-12 p-0 text-left mt-3">
                                <div className="form-group mb-1">
                                    <button
                                        type="submit"
                                        className="form-control text-center style2-input text-white fw-600 bg-blue border-0 p-0 "
                                    >
                                        Đăng ký
                                    </button>
                                </div>
                                <h6 className="text-grey-500 mt-5 border-right pt-5 font-xssss fw-500 d-flex justify-content-center mt-0 mb-0 lh-32">
                                    Bạn đã có tài khoản ? {' '}
                                    <Link to="/login" className="fw-700 ml-1 text-green">
                                        Đăng nhập ngay
                                    </Link>
                                </h6>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}
