import React, { Fragment } from 'react'

export default function HomeFooter() {
    return (
        <Fragment>
            <div className="home-footer">
                <div className="row h-100">
                    <div className="col-12 col-xl-5 h-100 py-3 px-4">
                        <div className="home-footer__head mb-4">
                            <h2 className="text-black">TẢI ỨNG DỤNG <span style={{ color: '#0055FF' }}>MIỄN PHÍ NGAY</span></h2>
                            <p>Hỗ trợ các phiên bản từ Android 4.4 trở lên</p>
                            <p>Hỗ trợ các phiên bản từ IOS 10.0 trở lên</p>
                        </div>
                        <div className="home-footer__download">
                            <div className="home-footer__app mb-3">
                                <img className="mr-3" src={require('../assets/images/googlePlay.png')} alt="GooglePlay" />
                                <img src={require('../assets/images/appstore.png')} alt="GooglePlay" />
                            </div>
                            <div className="home-footer__qr d-none d-md-flex">
                                <img className="mr-3" src={require('../assets/images/QR171.png')} alt="GooglePlay" />
                                <img src={require('../assets/images/QR171.png')} alt="GooglePlay" />
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-xl-block col-lg-7">
                        <div className="home-footer__doulingo">
                            <img src={require('../assets/images/Duo1.png')} alt="Duolingo" />
                            <img style={{ zIndex: 1 }} src={require('../assets/images/Duo2.png')} alt="Duolingo" />
                            <img src={require('../assets/images/Duo3.png')} alt="Duolingo" />
                        </div>
                    </div>
                </div>
                {/* <div className="row"></div> */}

            </div>
        </Fragment>
    )
}
