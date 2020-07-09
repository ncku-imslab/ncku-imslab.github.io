import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/imslab_logo.jpg';
import menu_icon from '../assets/menu_icon.png';
import './navigation.css';

class Navigation extends React.Component {
    openNav() {
        document.getElementById("sideNavbar").style.width = "250px";
    }

    closeNav() {
        document.getElementById("sideNavbar").style.width = "0";
    }

    render() {
        return (
            <nav className="dt w-100 pb4 response960">
                <div
                    id="sideNavbar"
                    className="h-100 fixed bg-dark-gray pt5"
                    style={{
                        width: "0",
                        zIndex: "10",
                        top: "0",
                        left: "0",
                        overflowX: "hidden",
                        transition: "0.5s"
                    }}
                >
                    <p
                        className="link dim near-white absolute db pv3 ph4 fw6 f3 pv0 mv0 pointer"
                        style={{
                            top: "0",
                            right: "0px"
                        }}
                        onClick={() => this.closeNav()}
                    >←</p>
                    <p className="link near-white db pt2 f5 f5-l tl b-white mh4 mb0 mt2">智慧化行動服務實驗室</p>
                    <p className="link near-white db f5 f5-l tl b-white mh4 mt0">@ 國立成功大學</p>
                    <p className="link near-white db pb2 f5 f5-l tl bb b-near-white mh4 mb4 mt0">Intelligent Mobile Service Laboratory @ NCKU</p>
                    <Link
                        className="link dim near-white db pl4 pv2 f5 f5-l tl fw5"
                        style={{
                            transition: "0.3s",
                            letterSpacing: "0.05em"
                        }}
                        to="/"
                        onClick={() => this.closeNav()}
                    >首頁 Home</Link>
                    <Link
                        className="link dim near-white db pl4 pv2 f5 f5-l tl fw5"
                        style={{
                            transition: "0.3s",
                            letterSpacing: "0.05em"
                        }}
                        to="/researches"
                        onClick={() => this.closeNav()}
                    >研究 Researches</Link>
                    <div class="db dropdown">
                        <Link
                            className="link dim near-white db pl4 pv2 f5 f5-l tl fw5"
                            style={{
                                transition: "0.3s",
                                letterSpacing: "0.05em"
                            }}
                        >成員 Members
                        <b> </b>
                            <div
                                className="dib fw7"
                                style={{ animation: "shiftDownAnimation 2.5s infinite" }}
                            >
                                <small> ▽ </small>
                            </div>
                        </Link>
                        <div
                            className="dn dropdown-content tc "
                            style={{ zIndex: "1" }}
                        >
                            <Link
                                className="dim link near-white pv2 f5 f5-l tl fw5 pl5 db"
                                to="/professor"
                                onClick={() => this.closeNav()}
                            >教授 Professor
                                </Link>
                            <Link
                                className="dim link near-white pv2 f5 f5-l tl fw5 pl5 db"
                                to="/students"
                                onClick={() => this.closeNav()}
                            >學生 Students
                                </Link>
                            <Link
                                className="dim link near-white pv2 f5 f5-l tl fw5 pl5 db"
                                to="/alumni"
                                onClick={() => this.closeNav()}
                            >學成下山 Alumni
                                </Link>
                        </div>
                    </div>

                    <Link
                        className="link dim near-white db pl4 pv2 f5 f5-l tl fw5"
                        style={{
                            transition: "0.3s",
                            letterSpacing: "0.05em"
                        }}
                        to="/honors"
                        onClick={() => this.closeNav()}
                    >榮譽 Honors</Link>
                    <Link
                        className="link dim near-white db pl4 pv2 f5 f5-l tl fw5"
                        style={{
                            transition: "0.3s",
                            letterSpacing: "0.05em"
                        }}
                        to="/resources"
                        onClick={() => this.closeNav()}
                    >相關資源 Resources</Link>
                    <Link
                        className="link dim near-white db pl4 pv2 f5 f5-l tl fw5"
                        style={{
                            transition: "0.3s",
                            letterSpacing: "0.05em"
                        }}
                        to="/contact"
                        onClick={() => this.closeNav()}
                    >聯絡我們 Contact</Link>
                </div>

                <img
                    src={logo}
                    className="dib dtc-l w4 ph3 pb2"
                    style={{ "minWidth": "200px" }}
                    alt=""
                ></img>

                <div className="mw8 dib dtc-l v-mid w-100 w-75-l tr-l ph3">
                    <div className="ph2 justify-center disappear960 mr3">
                        <a className="dark-gray db f5 f5-l fw5 mb2">智慧化行動服務實驗室 @ 國立成功大學</a>
                        <a className="dark-gray db f5 f5-l fw5 pb2">Intelligent Mobile Service Laboratory @ NCKU</a>
                        <p></p>
                    </div>

                    <p
                        className="dim dn appear960 mb3 center pointer mt1 mw3 mw3-ns"
                        style={{ animation: "pulseAnimation 3s infinite" }}
                        onClick={() => this.openNav()}
                    >
                        <img
                            className="pa2"
                            src={menu_icon}
                        />
                    </p>

                    <div className="pr2 disappear960">
                        <Link
                            className="link dim grow dark-gray f5 f5-l dib ph3 pb3"
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
                            <b> </b>
                                <div
                                    className="dib fw7"
                                    style={{ animation: "shiftDownAnimation 2.5s infinite" }}
                                >
                                    <small> ▽ </small>
                                </div>
                            </a>
                            <div
                                className="dn w-100 absolute dropdown-content tc ba br1 bg-white"
                                style={{ zIndex: "1" }}
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
                            className="link dim grow dark-gray f5 f5-l dib ph3 pb3"
                            to="/contact"
                        >聯絡我們 Contact
                        </Link>

                    </div>
                </div>
            </nav >
        );
    }
}

export default Navigation;