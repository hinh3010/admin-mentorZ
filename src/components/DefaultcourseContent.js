import React, { Fragment } from 'react'
import '../assets/css/common/course.css'

export default function DefaultcourseContent() {


    const document = [
        {
            title: 'Tài liệu toán cao cấp',
            fee: 'Free',
            type: "Giáo Trình",
            view: 54651,
            name: "Nguyễn Văn An"
        },
        {
            title: 'Tài liệu toán cao cấp',
            fee: 'Free',
            type: "Sách Tham Khảo",
            view: 54651,
            name: "Nguyễn Văn An"
        },
        {
            title: 'Tài liệu toán cao cấp',
            fee: 'Free',
            type: "Bí Kíp",
            view: 54651,
            name: "Nguyễn Văn An"
        },
        {
            title: 'Tài liệu toán cao cấp',
            fee: 'Free',
            type: "Đề Thi",
            view: 54651,
            name: "Nguyễn Văn An"
        },
    ]

    const document1 = [
        {
            title: 'Tài liệu toán cao cấp',
            fee: '3A+',
            type: "Giáo Trình",
            view: 54651,
            name: "Nguyễn Văn An"
        },
        {
            title: 'Tài liệu toán cao cấp',
            fee: '3A+',
            type: "Sách Tham Khảo",
            view: 54651,
            name: "Nguyễn Văn An"
        },
        {
            title: 'Tài liệu toán cao cấp',
            fee: '3A+',
            type: "Bí Kíp",
            view: 54651,
            name: "Nguyễn Văn An"
        },
        {
            title: 'Tài liệu toán cao cấp',
            fee: '3A+',
            type: "Đề Thi",
            view: 54651,
            name: "Nguyễn Văn An"
        },
    ]

    return (
        <Fragment>
            <div className="course">
                <h3 className="course__title">
                    Danh mục tài liệu môn toán cao cấp
                </h3>
                <div className="course-document">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="course-document__free">
                                <h4 className="course-document__title">
                                    Tài liệu miễn phí
                                </h4>
                                <div className="course-document__content">
                                    <table className="course-document__table">
                                        <tbody>
                                            {document.map((item, index) => {
                                                return <tr key={index}>
                                                    <td>
                                                        {item.title}
                                                    </td>
                                                    <td>
                                                        {item.fee}
                                                    </td>
                                                    <td>
                                                        {item.type}
                                                    </td>
                                                    <td>
                                                        {item.view}
                                                    </td>
                                                    <td>
                                                        <div className="starWrap">
                                                            <div>
                                                                <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                                                <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                                                <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                                                <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                                                <img alt="star" src={require('../assets/images/star-disable.png')} className="star-item" />
                                                            </div>
                                                            <b className="roboto-font">4.0</b>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {item.name}
                                                    </td>
                                                </tr>
                                            })}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="course-document__fee">
                                <h4 className="course-document__title">
                                    Tài liệu có phí
                                </h4>
                                <div className="course-document__content">
                                    <table>
                                        <tbody>
                                            {document1.map((item, index) => {
                                                return <tr key={index}>
                                                    <td>
                                                        {item.title}
                                                    </td>
                                                    <td>
                                                        {item.fee}
                                                    </td>
                                                    <td>
                                                        {item.type}
                                                    </td>
                                                    <td>
                                                        {item.view}
                                                    </td>
                                                    <td>
                                                        <div className="starWrap">
                                                            <div>
                                                                <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                                                <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                                                <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                                                <img alt="star" src={require('../assets/images/star.png')} className="star-item" />
                                                                <img alt="star" src={require('../assets/images/star-disable.png')} className="star-item" />
                                                            </div>
                                                            <b className="roboto-font">4.0</b>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {item.name}
                                                    </td>
                                                </tr>
                                            })}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
