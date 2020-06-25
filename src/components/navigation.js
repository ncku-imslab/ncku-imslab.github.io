import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/imslab_logo.jpg';

const Navigation = () => {
    //  <a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
    //  </a>
    return (
        <nav className="db dt-l w-100 border-box">
            <img src={logo} className="dib w5 pa3" alt="Site Name"></img>
            <div className="mw8 db dtc-l v-mid w-100 w-75-l tc tr-l center ph4">
                <div class="ph3">
                    <a className="dark-gray f5 f5-l fw5 ph3">智慧化行動服務實驗室 @ 國立成功大學</a>
                    <p></p>
                    <a className="dark-gray f5 f5-l fw5 ph3">Intelligent Mobile Service Laboratory @ NCKU</a>
                    <p></p>
                </div>
                <div class="ph3">
                    <Link
                        className="mt2 link dim grow dark-gray f5 f5-l dib ph3 pv2 bn bg-white"
                        title="Home"
                        to="/"
                    >首頁 Home
                </Link>
                    <Link
                        className="link dim grow dark-gray f5 f5-l dib ph3 pv2 bg-white"
                        to="/researches"
                    >研究領域 Researches
                </Link>
                    <Link
                        className="link dim grow dark-gray f5 f5-l dib ph3 pv2 bn bg-white"
                        title="Members"
                        to="/members"
                    >成員 Members
                </Link>
                    <Link
                        className="link dim grow dark-gray f5 f5-l dib ph3 pv2 bn bg-white"
                        title="Honors"
                        to="/honors"
                    >榮譽 Honors
                </Link>
                    <Link
                        className="link dim grow dark-gray f5 f5-l dib ph3 pv2 bn bg-white"
                        title="Resources"
                        to="/resources"
                    >相關資源 Resources
                </Link>
                    <Link
                        className="link dim grow dark-gray f5 f5-l dib ph3 pv2 bn bg-white"
                        title="Contact"
                        to="/contact"
                    >聯絡我們 Contact</Link>
                </div>
            </div>
        </nav>
    );

}

// export default Navigation;
export default Navigation;