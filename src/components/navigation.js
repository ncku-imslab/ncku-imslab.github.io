import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/imslab_logo.jpg';
import specialLogo from '../images/imslab_eth.jpg';
import menu_icon from '../images/menu_icon.png';
import './navigation.css';

// It's better to provide the key attribute such that rendering is more stable.
const dropdownObject = [
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

const navbarObject = [
    {
        title: "首頁 Home",
        to: "/",
        key: "home"
    },
    {
        title: "成員 Members",
        to: null,
        key: "members"
    },
    {
        title: "研究 Research",
        to: "/research",
        key: "research"
    },
    {
        title: "榮譽 Honors",
        to: "/honors",
        key: "honors"
    },
    {
        title: "相關資源 resources",
        to: "/resources",
        key: "resources"
    },
    {
        title: "聯絡我們 contact",
        to: "/contact",
        key: "contact"
    }
]

const Navigation = () => {
    const navRef = useRef(null);
    function openNav() { navRef.current.style.width = "245px"; }
    function closeNav() { navRef.current.style.width = "0"; }

    const Dropdown = (props) => {
        return dropdownObject.map((object) => {
            return (
                <Link className={props.title === "desktop" ?
                    "dim link dark-gray pa2 db tc bb b-dark-gray" :
                    "dim link near-white pv2 f5 f5-l tl fw5 pl5 db"}
                    to={object.to}
                    key={object.key}
                    onClick={props.title === "desktop" ? null : () => closeNav()}
                > {object.title} </Link>
            )
        });
    }

    const mobileAttributes = "link dim near-white db pl4 pv2 f5 f5-l tl fw5";
    const desktopAttributes = "link dim grow dark-gray f5 f5-l dib ph3 pb3";
    const Navbar = (props) => {
        return navbarObject.map((object) => {
            if (object.key === "members") {
                return (
                    <div className={props.title === "desktop" ? "dib relative dropdown" : "db dropdown"} key={props.title + object.key}>
                        <span className={props.title === "desktop" ? "link dark-gray f5 f5-l dib ph3 pb3" : mobileAttributes}
                            style={props.title === "desktop" ? { cursor: "default" } : { letterSpacing: "0.05em" }}
                        > 成員 Members
                            <b> </b>
                            <small className="dib fw7"
                                style={{ animation: "shiftDownAnimation 2s infinite" }}
                            > ▽ </small>
                        </span>
                        <div className={props.title === "desktop" ?
                            "dn w-90 absolute dropdown-content tc br bl bt br1 b-dark-gray bg-white"
                            : "dn dropdown-content tc"}
                            style={{ zIndex: "1" }}
                        >
                            <Dropdown title={props.title} />
                        </div>
                    </div>
                );
            } else {
                return (
                    <Link className={props.title === "desktop" ? desktopAttributes : mobileAttributes}
                        to={object.to}
                        key={object.key}
                        onClick={props.title === "desktop" ? null : () => closeNav()}
                    > {object.title} </Link>
                );
            }
        });
    }
    const today = new Date();
    const month = today.getMonth();
    const date = today.getDate();

    return (
        <nav className="dt w-100 pb4 mb1 response960">
            <div ref={navRef}
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
                <p className="link dim near-white absolute db pv3 ph4 fw6 f3 pv0 mv0 pointer"
                    style={{
                        top: "0",
                        left: "0px",
                        animation: "shiftRightAnimation 2s infinite"
                    }}
                    onClick={() => closeNav()}
                ><small> ➢ </small>
                </p>
                <p className="link near-white db pt2 f5 f5-l tl mh4 mb0 mt2"> 智慧化行動服務實驗室 </p>
                <p className="link near-white db f5 f5-l tl mh4 mt0"> @ 國立成功大學 </p>
                <p className="link near-white db pb2 f5 f5-l tl bb b-near-white mh4 mb4 mt0"> Intelligent Mobile Service Laboratory @ NCKU </p>
                <Navbar title="mobile" />
            </div>

            <Link to="/" >
                <img src={month === 7 && date === 30 ? specialLogo : logo}
                    className="dib dtc-l w4 ph3"
                    style={{ minWidth: month === 7 && date === 30 ? "180px" : "200px" }}
                    onClick={month === 7 && date === 30 ? () => { window.alert("Today is Ethereum's birthday ｡:.ﾟヽ(*´∀`)ﾉﾟ.:｡\nToday is Ethereum's birthday ｡:.ﾟヽ(*´∀`)ﾉﾟ.:｡\nToday is Ethereum's birthday ｡:.ﾟヽ(*´∀`)ﾉﾟ.:｡") }
                        : null}
                    alt=""
                />
            </Link>

            <div className="mw8 dib dtc-l v-mid w-100 w-75-l tr-l ph3">
                <div className="ph2 justify-center disappear960 mr3">
                    <span className="dark-gray db f5 f5-l fw5 mb2"> 智慧化行動服務實驗室 @ 國立成功大學 </span>
                    <span className="dark-gray db f5 f5-l fw5 pb2"> Intelligent Mobile Service Laboratory @ NCKU </span>
                    <p></p>
                </div>
                <button className="dim dn appear960 center pointer mv3 bn"
                    style={{ animation: "pulseAnimation 3s infinite" }}
                    onClick={() => openNav()}
                >
                    <img className="pa2"
                        src={menu_icon}
                        alt=""
                    />
                </button>
                <div className="pr2 disappear960">
                    <Navbar title="desktop" />
                </div>
            </div>
        </nav >
    );
}

export default Navigation;