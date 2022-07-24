import React, { Fragment } from 'react';
import '../assets/css/color.css';
import '../assets/css/style.css';
import RegisterHsCt from '../components/RegisterHsCt';
import RegisterTemplate from '../templates/RegisterTemplate';



const listClass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const bg1 = require('../assets/images/home-register.png');
const imgQR = require('../assets/images/QRzalo.png');
const imgZalo = require('../assets/images/zalo.png')
const imgFanpage = require('../assets/images/fanpage.png')

function RegisterHocSinh(props) {
    return (
        <Fragment>
            <RegisterTemplate data={RegisterHsCt} />
        </Fragment>
    );
}

export default RegisterHocSinh;
