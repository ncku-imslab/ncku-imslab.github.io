import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/imslab_logo.jpg';
import menu_icon from '../assets/menu_icon.png';
import './navigation.css';

const Navigation = () => {
    /*
    return (
        <div className="dt w-100">
            <div class="dt w-100 mb3 pt2">
                <div
                    className="dtc-l ph2 tl disappear1145"
                    style={{ width: "35%" }}
                >
                    <a className="dark-gray db f5 f5-l fw5 ph3 pb2">智慧化行動服務實驗室 @ 國立成功大學</a>
                    <a className="dark-gray db f5 f5-l fw5 ph3">Intelligent Mobile Service Laboratory @ NCKU</a>
                    <p></p>
                </div>
                <div class="dn ph2 tr">
                    X
                </div>

                <div class="dtc-l ph2 tr disappear1145">
                    <Link
                        className="mt2 link dim grow dark-gray f5 f5-l dib ph3 pb2"
                        to="/"
                    >首頁 Home
                        </Link>
                    <Link
                        className="link dim grow dark-gray f5 f5-l dib ph3 pb2"
                        to="/researches"
                    >研究 Researches
                        </Link>
                    <Link
                        className="link dim grow dark-gray f5 f5-l dib ph3 pb2"
                        to="/professor"
                    >成員 Members
                        </Link>
                    <Link
                        className="link dim grow dark-gray f5 f5-l dib ph3 pb2"
                        to="/honors"
                    >榮譽 Honors
                        </Link>
                    <Link
                        className="link dim grow dark-gray f5 f5-l dib ph3 pb2"
                        to="/resources"
                    >相關資源 Resources
                        </Link>
                    <Link
                        className="link dim grow dark-gray f5 f5-l dib ph3 pb2"
                        to="/contact"
                    >聯絡我們 Contact
                        </Link>
                </div>
                

            </div>
            <img src={logo}
                className="db w5 ph3 center"
                style={{ "min-width": "250px" }}
                alt=""
            ></img>

        </div>
    );
    */

    return (
        <nav className="dt w-100 pb4 response960">
            <img
                src={logo}
                className="dib dtc-l w5 ph3 pb2"
                style={{ "minWidth": "255px" }}
                alt=""
            ></img>
            <div className="mw8 dib dtc-l v-mid w-100 w-75-l tr-l ph3">
                <div className="ph2 justify-center disappear960">
                    <a className="dark-gray db f5 f5-l fw5 ph3 mb2">智慧化行動服務實驗室 @ 國立成功大學</a>
                    <a className="dark-gray db f5 f5-l fw5 ph3">Intelligent Mobile Service Laboratory @ NCKU</a>
                    <p></p>
                </div>
                <button
                    className="dim dn appear960 mb3 mt1 center pointer br2 shadow-2 pulse">
                    <img
                        className="pa2"
                        src={menu_icon}
                    />
                </button>

                <div className="ph2 disappear960">
                    <Link
                        className="mt2 link dim grow dark-gray f5 f5-l dib ph3 pb3"
                        to="/"
                    >首頁 Home
                        </Link>
                    <Link
                        className="link dim grow dark-gray f5 f5-l dib ph3 pb3"
                        to="/researches"
                    >研究 Researches
                        </Link>
                    <div className="dib relative dropdown">
                        <a
                            className="link dark-gray f5 f5-l dib ph3 pb3"
                            style={{ cursor: "default" }}
                        >成員 Members
                            </a>
                        <div
                            className="dn absolute dropdown-content tc ba br1 bg-white"
                            style={{ "zIndex": "1" }}
                        >
                            <Link
                                className="dim link dark-gray pa2 db tc bb"
                                to="/professor"
                            >教授 Professor
                                </Link>
                            <Link
                                className="dim link dark-gray pa2 db tc bb"
                                to="/students"
                            >學生 Students
                                </Link>
                            <Link
                                className="dim link dark-gray pa2 db tc"
                                to="/alumni"
                            >學成下山 Alumni
                                </Link>
                        </div>
                    </div>
                    <Link
                        className="link dim grow dark-gray f5 f5-l dib ph3 pb3"
                        to="/honors"
                    >榮譽 Honors
                        </Link>
                    <Link
                        className="link dim grow dark-gray f5 f5-l dib ph3 pb3"
                        to="/resources"
                    >相關資源 Resources
                        </Link>
                    <Link
                        className="link dim grow dark-gray f5 f5-l dib ph3 pb2"
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