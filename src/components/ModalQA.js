import React, { Fragment, useEffect, useState, } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Checkbox, Modal } from 'antd'
import styles from '../assets/css/common/modal.module.css'
import { hideHomeModal, showHomeModal } from '../redux/actions/uiActions/uiActions';
import HinhanhSvg from '../assets/images/svg/home/HinhanhSvg';
import VideoSvg from '../assets/images/svg/home/VideoSvg';
import VanbanSvg from '../assets/images/svg/home/VanbanSvg';

export default function ModalQA() {

    // const [isModalVisible, setIsModalVisible] = useState(true);

    const dispatch = useDispatch();
    const { isShowHomeModal, isText, isVideo, isImage } = useSelector(state => state.uiReducer);


    const handleOk = () => {
        dispatch(hideHomeModal());
    };

    const handleCancel = () => {
        dispatch(hideHomeModal());
    };

    return (
        <Fragment>
            <Modal
                title="Đặt câu hỏi"
                visible={isShowHomeModal}
                onOk={handleOk}
                width={623}
                onCancel={handleCancel}
                footer={null}
                className="modal-qa"
            >
                <div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="modal-qa__input--wrap">
                                {
                                    (isText && <textarea placeholder="Đặt câu hỏi của bạn tại đây" className="modal-qa__input" />)
                                    ||
                                    (isVideo && <>
                                        <textarea placeholder="Đặt câu hỏi của bạn tại đây" className="modal-qa__input" />
                                        <div className="modal-qa__file--wrap">
                                            <label className="modal-qa__label" htmlFor="file-qa">
                                                <img src={require('../assets/images/custom/fileLabel.png')} alt="file" />
                                                <div className="modal-qa__text">Thêm hoặc kéo thả video tại đây</div>
                                                <div className="modal-qa__size">1.67MB</div>
                                            </label>
                                            <input type="file" id="file-qa" hidden />
                                        </div>
                                    </>)
                                    ||
                                    (isImage && <>
                                        <textarea placeholder="Đặt câu hỏi của bạn tại đây" className="modal-qa__input" />
                                        <div className="modal-qa__file--wrap">
                                            <label className="modal-qa__label" htmlFor="file-qa">
                                                <img src={require('../assets/images/custom/fileLabel.png')} alt="file" />
                                                <div className="modal-qa__text">Thêm hoặc kéo thả hình ảnh tại đây</div>
                                                <div className="modal-qa__size">1.67MB</div>
                                            </label>
                                            <input type="file" id="file-qa" hidden />
                                        </div>
                                    </>)
                                }
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="modal-qa__subject">
                                Môn học
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="modal-qa__tag">
                                # Hastag
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div style={{ justifyContent: 'space-between' }} className="modal-qa__score">
                                <span>
                                    Số điểm A+ thưởng
                                </span>
                                <Checkbox classname="float-right"></Checkbox>
                            </div>
                        </div>
                        {isText ? '' : <div onClick={() => {
                            dispatch(showHomeModal("text"))
                        }} className="col-lg-6">
                            <div style={{ background: '#0055FF' }} className="home-post__btn  modal-qa__btn mont-font">
                                <i className="d-none d-md-block">
                                    <VanbanSvg />
                                </i>
                                <span>Dạng văn bản</span>
                            </div>
                        </div>}

                        {isImage ? '' : <div className="col-lg-6">
                            <div onClick={() => {
                                dispatch(showHomeModal("image"))
                            }} style={{ background: '#FE9431' }} className="home-post__btn modal-qa__btn mont-font">
                                <i className="d-none d-md-block">
                                    <HinhanhSvg />
                                </i>
                                <span>Dạng hình ảnh</span>
                            </div>
                        </div>}

                        {isVideo ? '' : <div className="col-lg-6">
                            <div onClick={() => {
                                dispatch(showHomeModal("video"))
                            }} style={{ background: '#FF0000' }} className="home-post__btn modal-qa__btn mont-font">
                                <i className="d-none d-md-block">
                                    <VideoSvg />
                                </i>
                                <span>Dạng video</span>
                            </div>
                        </div>}

                        <div className="col-lg-12">
                            <div style={{ background: '#0055FF' }} className="home-post__btn modal-qa__submit mont-font">
                                <span>ĐĂNG BÀI</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </Fragment >
    )
}
