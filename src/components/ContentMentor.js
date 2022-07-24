import React, { Fragment } from 'react'
import ReactPlayer from 'react-player';
import { Pagination } from 'antd';


export default function ContentMentor() {
    return (
        <Fragment>
            <div className="col-lg-12 pt-4 mb-4 home__mentor-title">
                <h2 className="m-0 fw-400 font-lg w-100">
                    <span className="p-relative" >
                        Các câu hỏi <b> bạn cần giải đáp</b>
                    </span>
                </h2>
                <div>
                    <div className="d-flex home-select__wrap">
                        <div className="form-group mb-0 icon-input p-relative mr-2">
                            <i style={{ right: 15, left: 'unset', top: 22 }} className="feather-chevron-down home__icon-down text-black"></i>
                            <select style={{ paddingTop: 0, paddingBottom: 0, lineHeight: 'normal' }} defaultValue="" className="home__select form-group icon-input w-100 style2-input form-control fw-700 text-black">
                                <option className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600 " value="" disabled hidden>
                                    Môn học
                                </option>
                                <option>Toán</option>
                            </select>
                        </div>

                        <div className="form-group mb-0 icon-input p-relative">
                            <i style={{ right: 15, left: 'unset', top: 22 }} className="feather-chevron-down home__icon-down text-black"></i>
                            <select style={{ paddingTop: 0, paddingBottom: 0, lineHeight: 'normal' }} defaultValue="" className="home__select form-group icon-input w-100 style2-input form-control fw-700 text-black">
                                <option className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600 " value="" disabled hidden>
                                    Sắp xếp theo
                                </option>
                                <option>Toán</option>
                            </select>
                        </div>

                    </div>
                </div>
            </div>

            <div className="mentor__content w-100">
                <div style={{
                    paddingLeft: '15px',
                    paddingRight: '15px',
                }} className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="mentor__item">
                                <div className="mentor-inf">
                                    <img src={require('../assets/images/home-login.png')} alt="avatar" />
                                    <div >
                                        <div className="mentor-inf__name">Vũ Minh Đức</div>
                                        <div className="mentor-inf__date">31 tháng 5 lúc 22:14</div>
                                    </div>
                                </div>
                                <div className="pb-3" style={{ marginTop: 20, marginLeft: 12 }}>
                                    <div className="mentor-question">
                                        Ancol là
                                    </div>
                                    <div className="mentor-answer">
                                        <div className="mentor-answer__item">
                                            <span>A. </span>
                                            <span className="mentor-answer__content">
                                                Axit
                                            </span>
                                        </div>
                                        <div className="mentor-answer__item">
                                            <span>B. </span>
                                            <span className="mentor-answer__content">
                                                Bazo
                                            </span>
                                        </div>
                                        <div className="mentor-answer__item">
                                            <span>C. </span>
                                            <span className="mentor-answer__content">
                                                Muối
                                            </span>
                                        </div>
                                        <div className="mentor-answer__item">
                                            <span>D. </span>
                                            <span className="mentor-answer__content">
                                                Chả là gì cả
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mentor-footer">
                                    <div className="mentor-footer__wrap">
                                        <div style={{ borderColor: '#F66D00', color: "#F66D00" }} className="mentor-footer__item">
                                            Môn toán
                                        </div>
                                        <div style={{ borderColor: '#00862E', color: "#00862E" }} className="mentor-footer__item">
                                            00:00:05
                                        </div>
                                        <div style={{ borderColor: '#0055FF', color: "#0055FF" }} className="mentor-footer__item">
                                            5A+
                                        </div>
                                        <div className="home-btn__wrap mentor-btn">
                                            <button style={{
                                                width: '180px',
                                                height: '36px'
                                            }}>Nhận giải đáp</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="mentor__item">
                                <div className="mentor-inf">
                                    <img src={require('../assets/images/home-login.png')} alt="avatar" />
                                    <div >
                                        <div className="mentor-inf__name">Vũ Minh Đức</div>
                                        <div className="mentor-inf__date">31 thasng5 lúc 22:14</div>
                                    </div>
                                </div>
                                <div className="pb-3" style={{ marginTop: 20, marginLeft: 12 }}>
                                    <div className="mentor-question">
                                        Ancol là
                                    </div>
                                    <div className="mentor-answer">
                                        <div className="mentor-answer__item">
                                            <span>A. </span>
                                            <span className="mentor-answer__content">
                                                Axit
                                            </span>
                                        </div>
                                        <div className="mentor-answer__item">
                                            <span>B. </span>
                                            <span className="mentor-answer__content">
                                                Bazo
                                            </span>
                                        </div>
                                        <div className="mentor-answer__item">
                                            <span>C. </span>
                                            <span className="mentor-answer__content">
                                                Muối
                                            </span>
                                        </div>
                                        <div className="mentor-answer__item">
                                            <span>D. </span>
                                            <span className="mentor-answer__content">
                                                Chả là gì cả
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mentor-answer__img mt-2">
                                        <img src={require('../assets/images/answer.png')} alt="answer" className="w-100 h-100" />
                                    </div>
                                </div>
                                <div className="mentor-footer">
                                    <div className="mentor-footer__wrap">
                                        <div style={{ borderColor: '#F66D00', color: "#F66D00" }} className="mentor-footer__item">
                                            Môn toán
                                        </div>
                                        <div style={{ borderColor: '#00862E', color: "#00862E" }} className="mentor-footer__item">
                                            00:00:05
                                        </div>
                                        <div style={{ borderColor: '#0055FF', color: "#0055FF" }} className="mentor-footer__item">
                                            5A+
                                        </div>
                                        <div className="home-btn__wrap mentor-btn">
                                            <button style={{
                                                width: '180px',
                                                height: '36px'
                                            }}>Nhận giải đáp</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="mentor__item">
                                <div className="mentor-inf">
                                    <img src={require('../assets/images/home-login.png')} alt="avatar" />
                                    <div >
                                        <div className="mentor-inf__name">Vũ Minh Đức</div>
                                        <div className="mentor-inf__date">31 thasng5 lúc 22:14</div>
                                    </div>
                                </div>
                                <div className="pb-3" style={{ marginTop: 20, marginLeft: 12 }}>
                                    <div className="mentor-question">
                                        Ancol là
                                    </div>
                                    <div className="mentor-answer">
                                        <div className="mentor-answer__item">
                                            <span>A. </span>
                                            <span className="mentor-answer__content">
                                                Axit
                                            </span>
                                        </div>
                                        <div className="mentor-answer__item">
                                            <span>B. </span>
                                            <span className="mentor-answer__content">
                                                Bazo
                                            </span>
                                        </div>
                                        <div className="mentor-answer__item">
                                            <span>C. </span>
                                            <span className="mentor-answer__content">
                                                Muối
                                            </span>
                                        </div>
                                        <div className="mentor-answer__item">
                                            <span>D. </span>
                                            <span className="mentor-answer__content">
                                                Chả là gì cả
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mentor-answer__video mt-2">
                                        <ReactPlayer
                                            url='https://www.youtube.com/watch?v=InlnBTL4qeQ'
                                            width="100%"
                                            className="mentor-player"
                                            playing={false}
                                            controls={true}
                                        />
                                    </div>
                                </div>
                                <div className="mentor-footer">
                                    <div className="mentor-footer__wrap">
                                        <div style={{ borderColor: '#F66D00', color: "#F66D00" }} className="mentor-footer__item">
                                            Môn toán
                                        </div>
                                        <div style={{ borderColor: '#00862E', color: "#00862E" }} className="mentor-footer__item">
                                            00:00:05
                                        </div>
                                        <div style={{ borderColor: '#0055FF', color: "#0055FF" }} className="mentor-footer__item">
                                            5A+
                                        </div>
                                        <div className="home-btn__wrap mentor-btn">
                                            <button style={{
                                                width: '180px',
                                                height: '36px'
                                            }}>Nhận giải đáp</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

            <div className="pagination">
                <Pagination className="mentor-pagination" responsive={true} defaultCurrent={2} total={240} />
            </div>

        </Fragment >
    )
}
