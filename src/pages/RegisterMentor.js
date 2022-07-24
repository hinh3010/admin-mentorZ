import React, { Component, Fragment } from 'react';
import '../assets/css/color.css';
import '../assets/css/style.css';
import RegisterMtCt from '../components/RegisterMtCt';
import RegisterTemplate from '../templates/RegisterTemplate';
const listClass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
function RegisterMentor() {

    return (
        <Fragment>
            <RegisterTemplate data={RegisterMtCt} />
        </Fragment>
    );
}

export default RegisterMentor;
