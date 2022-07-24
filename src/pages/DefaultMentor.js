import React, { Fragment } from 'react'
import ContentMentor from '../components/ContentMentor'
import HomeTemplate from '../templates/HomeTemplate'

export default function DefaultMentor() {
    return (
        <Fragment>
            <HomeTemplate data={ContentMentor} />
        </Fragment>
    )
}
