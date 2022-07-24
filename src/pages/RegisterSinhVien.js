import React, { Component, Fragment } from 'react';
import '../assets/css/color.css';
import '../assets/css/style.css';
import RegisterSvCt from '../components/RegisterSvCt';
import RegisterTemplate from '../templates/RegisterTemplate';
function RegisterSinhVien() {

    return (
        <Fragment>
            <RegisterTemplate data={RegisterSvCt} />
        </Fragment>
    );
}

export default RegisterSinhVien;
