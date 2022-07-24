import React, { Fragment } from 'react';
import HomeTemplate from '../templates/HomeTemplate'
import ContentStudent from '../components/ContentStudent';


export default function DefaultStudent() {

  return (
    <Fragment>
      <HomeTemplate data={ContentStudent} />
    </Fragment>
  );

}

