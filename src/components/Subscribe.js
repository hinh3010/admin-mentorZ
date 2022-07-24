import React, { } from 'react';

function Subscribe() {
    return (
        <div className="card overflow-hidden subscribe-widget p-3 mb-3 rounded-xxl border-0">
            <div className="card-body d-block text-left">
                <h1 className="text-grey-800 font-xl fw-900 mb-4 lh-3 subscribe__title">Hãy tham gia kết nối cùng MentorZ</h1>
                <ul className="d-flex align-items-center justify-content-between mt-3">
                    <li>
                        <a href="/" className="">
                            <img className="subscribe__img" style={{borderRadius: '50%'}} alt="Youtube" src={require('../assets/images/Youtube.png')} />
                        </a>
                    </li>
                    <li>
                        <a href="/" className="">
                            <img className="subscribe__img" alt="Facebook" src={require('../assets/images/Facebook.png')} />
                        </a>
                    </li>
                    <li>
                        <a href="/" className="">
                            <img className="subscribe__img" alt="Tiktok" src={require('../assets/images/Tiktok.png')} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );

}

export default Subscribe;