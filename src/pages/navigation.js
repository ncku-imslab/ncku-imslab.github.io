import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/imslab_logo.jpg';

const Navigation = () => {
    return (
        <nav className="dt w-100 pt2">
            <img src={logo}
                className="dib dtc-l w5 ph3"
                style={{ "min-width": "255px" }}
                alt=""
            ></img>
            <div className="mw8 dib dtc-l v-mid w-100 w-75-l tr-l ph3">
                <div class="ph3 pt3">
                    <a className="dark-gray db f5 f5-l fw5 ph3 mb2">智慧化行動服務實驗室 @ 國立成功大學</a>
                    <a className="dark-gray f5 f5-l fw5 ph3">Intelligent Mobile Service Laboratory @ NCKU</a>
                    <p></p>
                </div>
                <div class="ph3">
                    <Link
                        className="mt2 link dim grow dark-gray f5 f5-l dib ph3 pv2"
                        to="/"
                    >首頁 Home
                        </Link>
                    <Link
                        className="link dim grow dark-gray f5 f5-l dib ph3 pv2"
                        to="/researches"
                    >研究 Researches
                        </Link>
                    <Link
                        className="link dim grow dark-gray f5 f5-l dib ph3 pv2"
                        to="/professor"
                    >成員 Members
                        </Link>
                    <Link
                        className="link dim grow dark-gray f5 f5-l dib ph3 pv2"
                        to="/honors"
                    >榮譽 Honors
                        </Link>
                    <Link
                        className="link dim grow dark-gray f5 f5-l dib ph3 pv2"
                        to="/resources"
                    >相關資源 Resources
                        </Link>
                    <Link
                        className="link dim grow dark-gray f5 f5-l dib ph3 pv2"
                        to="/contact"
                    >聯絡我們 Contact
                        </Link>
                </div>
            </div>
        </nav>
    );
}

// export default Navigation;
export default Navigation;