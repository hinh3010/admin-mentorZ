import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../images/index'
import Categoty from './Categoty';

import Ranking from './Ranking';
import Account from './Account';

function SideBar() {
    return (
        <nav className="navigation 
            scroll-barr 
            scrollbar
            "  style={{
                // maxWidth: '280px', 
                width: '280px',
                paddingBottom: '200px'
            }}
        >
            <div className="container pl-0 pr-0">
                <div className="nav-content">
                    <div className="nav-top">
                        <Link to="/" style={{ paddingLeft: 0 }}>
                            <img src={images.Logo} alt="Logo" />
                        </Link>
                        <Link to="/" className="close-nav d-inline-block d-lg-none">
                            <i className="ti-close bg-grey mb-4 btn-round-sm font-xssss fw-700 text-dark ml-auto mr-2 "></i>
                        </Link>
                    </div>

                    <Categoty />

                    <div style={{ padding: '0 15px 26px 15px' }}>
                        <img style={{ width: '100%', height: 'auto' }} src={images.Banner} alt="banner" />
                    </div>

                    <Ranking />

                    <Account />

                </div>
            </div>
        </nav >
    );
}

export default SideBar;
