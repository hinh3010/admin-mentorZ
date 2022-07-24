import React, { } from 'react';

const classList = [
    {
        imageUrl: 'Share1.png',
        title: 'Góc hoàn thiện bản thân',
        per: '87',
        status: 'bg-warning',
    },
    {
        imageUrl: 'Share2.png',
        title: 'Góc tâm sự',
        per: '96',
        status: 'bg-success',
    },
    {
        imageUrl: 'Share3.png',
        title: 'Góc phòng trọ',
        per: '95',
        status: 'bg-primary',
    },
    {
        imageUrl: 'Share4.png',
        title: '1001 Sinh viên nên né',
        per: '55',
        status: 'bg-warning',
    },
];

function Share() {
    return (
        <div className="card theme-light-bg overflow-hidden rounded-xxl border-0 mb-3">
            <div className="card-body d-flex justify-content-between align-items-end pl-4 pr-4 pt-4 pb-3 share__heading">
                <h4 className="fw-700 font-xsss">Góc chia sẻ</h4>
            </div>
            {classList.map((value, index) => (
                <div
                    className="card-body pl-4 pr-4 pt-0 pb-3 border-0 w-100 d-block"
                    key={index}
                >
                    <div className="row">
                        <div className="col-3 p-0">
                            <a
                                href="/"
                                className="btn-round-lg rounded-lg ml-3 share__img"
                            >
                                <img
                                    src={require(`../assets/images/${value.imageUrl}`)}
                                    alt="icon"
                                    className="p-1 w-100"
                                    style={{ borderRadius: 8 }}
                                />
                            </a>
                        </div>
                        <div className="col-9 pr-3 d-flex share__content">
                            <div className="my-auto">
                                <h4 className="home-share__title">
                                    {value.title}
                                </h4>
                                <div className="home-share__sub">
                                    <div>
                                        <span className="mr-1">{value.per}</span>
                                        <span>nghìn thành viên</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

}

export default Share;
