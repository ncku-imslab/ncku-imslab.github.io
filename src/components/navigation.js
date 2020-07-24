import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/imslab_logo.jpg';
import menu_icon from '../images/menu_icon.png';
import './navigation.css';

// It's better to provide the key attribute such that rendering is more stable.
const expandedObject = [
    {
        title: "指導教授 Professor",
        to: "/professor",
        key: "professor"
    },
    {
        title: "學生 Students",
        to: "/students",
        key: "students"
    },
    {
        title: "學成下山 Alumni",
        to: "/alumni",
        key: "alumni"
    }
]

class Navigation extends Component {
    openNav() { document.getElementById("sideNavbar").style.width = "245px"; }

    closeNav() { document.getElementById("sideNavbar").style.width = "0"; }

    render() {
        const expandedList = expandedObject.map((object) => {
            return (
                <Link
                    className="dim link near-white pv2 f5 f5-l tl fw5 pl5 db"
                    to={object.to}
                    key={object.key}
                    onClick={() => this.closeNav()}
                >{object.title}</Link>
            )
        });
        const expandedAttributes = "link dim near-white db pl4 pv2 f5 f5-l tl fw5";
        const expandedStyles = {
            transition: "0.3s",
            letterSpacing: "0.05em"
        };

        const originalList = expandedObject.map((object) => {
            return (
                <Link
                    className="dim link dark-gray pa2 db tc bb b-dark-gray"
                    to={object.to}
                    key={object.key}
                >{object.title}</Link>
            )
        });
        const originalAttributes = "link dim grow dark-gray f5 f5-l dib ph3 pb3";

        return (
            <nav className="dt w-100 pb4 mb1 response960">
                <div
                    id="sideNavbar"
                    className="h-100 fixed bg-near-black pt5"
                    style={{
                        width: "0",
                        zIndex: "10",
                        top: "0",
                        right: "0",
                        overflowX: "hidden",
                        transition: "0.5s"
                    }}
                >
                    <p
                        className="link dim near-white absolute db pv3 ph4 fw6 f3 pv0 mv0 pointer"
                        style={{
                            top: "0",
                            left: "0px",
                            animation: "shiftRightAnimation 2s infinite"
                        }}
                        onClick={() => this.closeNav()}
                    ><small>➢</small></p>
                    <p className="link near-white db pt2 f5 f5-l tl mh4 mb0 mt2">智慧化行動服務實驗室</p>
                    <p className="link near-white db f5 f5-l tl mh4 mt0">@ 國立成功大學</p>
                    <p className="link near-white db pb2 f5 f5-l tl bb b-near-white mh4 mb4 mt0">Intelligent Mobile Service Laboratory @ NCKU</p>

                    <Link
                        className={expandedAttributes}
                        style={expandedStyles}
                        to="/"
                        onClick={() => this.closeNav()}
                    >首頁 Home</Link>
                    <div className="db dropdown">
                        <span
                            className={expandedAttributes}
                            style={expandedStyles}
                        >成員 Members
                            <b> </b>
                            <small
                                className="dib fw7 light-green"
                                style={{ animation: "shiftDownAnimation 2s infinite" }}
                            > ▽ </small>
                        </span>
                        <div
                            className="dn dropdown-content tc"
                            style={{ zIndex: "1" }}
                        >
                            {expandedList}
                        </div>
                    </div>

                    <Link
                        className={expandedAttributes}
                        style={expandedStyles}
                        to="/research"
                        onClick={() => this.closeNav()}
                    >研究 Research</Link>
                    <Link
                        className={expandedAttributes}
                        style={expandedStyles}
                        to="/honors"
                        onClick={() => this.closeNav()}
                    >榮譽 Honors</Link>
                    <Link
                        className={expandedAttributes}
                        style={expandedStyles}
                        to="/resources"
                        onClick={() => this.closeNav()}
                    >相關資源 Resources</Link>
                    <Link
                        className={expandedAttributes}
                        style={expandedStyles}
                        to="/contact"
                        onClick={() => this.closeNav()}
                    >聯絡我們 Contact</Link>
                </div>

                <Link to="/">
                    <img
                        src={logo}
                        className="dib dtc-l w4 ph3"
                        style={{ minWidth: "200px" }}
                        alt=""
                    />
                </Link>

                <div className="mw8 dib dtc-l v-mid w-100 w-75-l tr-l ph3">
                    <div className="ph2 justify-center disappear960 mr3">
                        <span className="dark-gray db f5 f5-l fw5 mb2">智慧化行動服務實驗室 @ 國立成功大學</span>
                        <span className="dark-gray db f5 f5-l fw5 pb2">Intelligent Mobile Service Laboratory @ NCKU</span>
                        <p></p>
                    </div>
                    <button
                        className="dim dn appear960 center pointer mv3 bn"
                        style={{ animation: "pulseAnimation 3s infinite" }}
                        onClick={() => this.openNav()}
                    >
                        <img
                            className="pa2"
                            src={menu_icon}
                            alt=""
                        />
                    </button>

                    <div className="pr2 disappear960">
                        <Link
                            className={originalAttributes}
                            to="/"
                        >首頁 Home
                        </Link>

                        <div className="dib relative dropdown">
                            <span
                                className="link dark-gray f5 f5-l dib ph3 pb3"
                                style={{ cursor: "default" }}
                            >成員 Members
                                <b> </b>
                                <small
                                    className="dib fw7 navy"
                                    style={{ animation: "shiftDownAnimation 2s infinite" }}
                                >▽</small>
                            </span>
                            <div
                                className="dn w-90 absolute dropdown-content tc br bl bt br1 b-dark-gray bg-white"
                                style={{ zIndex: "1" }}
                            >
                                {originalList}
                            </div>
                        </div>

                        <Link
                            className={originalAttributes}
                            to="/research"
                        >研究 Research
                        </Link>
                        <Link
                            className={originalAttributes}
                            to="/honors"
                        >榮譽 Honors
                        </Link>
                        <Link
                            className={originalAttributes}
                            to="/resources"
                        >相關資源 Resources
                        </Link>
                        <Link
                            className={originalAttributes}
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