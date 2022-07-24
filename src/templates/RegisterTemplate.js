import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player";
import Logo from "../components/Logo";
import { hideSocial } from "../redux/actions/authActions/authAction";
import { useLocation } from "react-router-dom";

const bg1 = require("../assets/images/home-register.png");

function RegisterTemplate(props) {
    const dispatch = useDispatch();
    const location = useLocation();

    const { showSocial, userType, detailUser } = useSelector(
        (state) => state.authReducer
    );

    useEffect(() => {
        if (location.pathname === "/register-mentor") {
            dispatch(hideSocial("Mentor"));
        } else {
            dispatch(hideSocial("Student"));
        }
    }, []);

    return (
        <Fragment>
            <div className='main-wrap'>
                <div className='row'>
                    {userType === "Mentor" ? (
                        <div className='col-xl-5 d-none d-xl-flex p-0 vh-100'>
                            <ReactPlayer
                                url='https://www.youtube.com/watch?v=InlnBTL4qeQ'
                                width='100%'
                                height='100%'
                                playing={false}
                                controls={true}
                            />
                        </div>
                    ) : (
                        <div
                            className='col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat'
                            style={{ backgroundImage: `url(${bg1})` }}
                        ></div>
                    )}

                    <div
                        style={{ overflowX: "hidden", overflowY: "auto" }}
                        className='col-xl-7 vh-100 align-items-center d-flex flex-column bg-white rounded-lg'
                    >
                        <div className='d-flex w-100'>
                            <Logo />
                        </div>

                        <props.data />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default RegisterTemplate;
