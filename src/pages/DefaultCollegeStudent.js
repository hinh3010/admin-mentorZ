import React, { Fragment } from 'react'
import ContentCollegeStudent from '../components/ContentCollegeStudent'
import HomeTemplate from '../templates/HomeTemplate'

export default function DefaultCollegeStudent() {
    return (
        <Fragment>
            <HomeTemplate data={ContentCollegeStudent} />
        </Fragment>
    )
}
