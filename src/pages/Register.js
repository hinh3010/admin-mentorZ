import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import RegiserCt from '../components/RegisterCt';
import RegisterTemplate from '../templates/RegisterTemplate';
function Register() {
  return (
    <Fragment>
      <RegisterTemplate data={RegiserCt} />
    </Fragment>
  );
}


export default Register;
