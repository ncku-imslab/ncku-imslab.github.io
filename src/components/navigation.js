import React, { useRef } from "react"
import { Link } from "react-router-dom"
import logo from "../images/imslab_logo.jpg"
import specialLogo from "../images/imslab_eth.jpg"
import menu_icon from "../images/menu_icon.png"
import "./navigation.css"
import { shiftDownAnimationClass } from "../utils/classes"

// It's better to provide the key attribute s.t. rendering is more stable.
const dropdownArr = [
    {
        title: "指導教授 Professor",
        to: "/professor",
        key: "professor",
    },
    {
        title: "學生 Students",
        to: "/students",
        key: "students",
    },
    {
        title: "學成下山 Alumni",
        to: "/alumni",
        key: "alumni",
    },
]

const navbarArr = [
    {
        title: "首頁 Home",
        to: process.env.PUBLIC_URL + "/",
        key: "home",
    },
    {
        title: "成員 Members",
        to: null,
        key: "members",
    },
    {
        title: "研究 Research",
        to: process.env.PUBLIC_URL + "/research",
        key: "research",
    },
    {
        title: "榮譽 Honors",
        to: process.env.PUBLIC_URL + "/honors",
        key: "honors",
    },
    {
        title: "相關資源 Resources",
        to: process.env.PUBLIC_URL + "/resources",
        key: "resources",
    },
    {
        title: "聯絡我們 Contact",
        to: process.env.PUBLIC_URL + "/contact",
        key: "contact",
    },
]

const Navigation = () => {
    const labName = "網際網路與行動服務實驗室"
    const atUniversityName = "@ 國立陽明交通大學"
    const chineseName = labName + " " + atUniversityName
    const englishName = "Internet and Mobile Service Laboratory @ NYCU"

    function isSpecialDay() {
        const today = new Date()
        return today.getMonth() === 7 && today.getDate() === 30
    }
    const handleClickOnSpecialDay = () => {
        window.alert("Today is Ethereum's birthday ｡:.ﾟヽ(*´∀`)ﾉﾟ.:｡")
    }

    const navRef = useRef(null)
    const openNav = () => {
        navRef.current.style.width = "245px"
    }
    const closeNav = () => {
        navRef.current.style.width = "0"
    }

    const menuIconSec = () => {
        return (
            <button className={menuIconSecClass} style={{ animation: menuIconAnimation }} onClick={openNav}>
                <img className={menuIconClass} src={menu_icon} alt="" />
            </button>
        )
    }

    const dropdownSec = (layout) =>
        dropdownArr.map(({ to, key, title }) => {
            const dropdownLinkClass = layout === "desktop" ? desktopDropdownLinkClass : mobileDropdownLinkClass
            const dropdownOnClick = layout === "desktop" ? null : closeNav

            return (
                <Link className={dropdownLinkClass} to={to} key={key} onClick={dropdownOnClick}>
                    {title}
                </Link>
            )
        })

    const membersLinkSec = (layout, key, title) => {
        const membersLinkSecClass = layout === "desktop" ? desktopMembersLinkSecClass : mobileMembersLinkSecClass
        const keyAttr = layout + key
        const membersLinkClass = layout === "desktop" ? desktopMembersLinkClass : mobileNonMembersLinkClass
        const membersLinkStyle =
            layout === "desktop" ? { cursor: membersLinkCursor } : { letterSpacing: membersLinkLetterSpacing }
        const reverseTriangle = "▽"
        const dropdownSecClass = layout === "desktop" ? desktopDropdownSecClass : mobileDropdownSecClass

        return (
            <div className={membersLinkSecClass} key={keyAttr}>
                <span className={membersLinkClass} style={membersLinkStyle}>
                    {title}{" "}
                    <small className={reverseTriangleClass} style={{ animation: shiftDownAnimationClass }}>
                        {reverseTriangle}
                    </small>
                </span>
                <div className={dropdownSecClass} style={{ zIndex: dropdownSecZIndex }}>
                    {dropdownSec(layout)}
                </div>
            </div>
        )
    }

    const nonMembersLink = (layout, to, key, title) => {
        const linkClass = layout === "desktop" ? desktopNonMembersLinkClass : mobileNonMembersLinkClass
        const onClick = layout === "desktop" ? null : closeNav

        return (
            <Link className={linkClass} to={to} key={key} onClick={onClick}>
                {title}
            </Link>
        )
    }

    const navbarSec = (layout) =>
        navbarArr.map(({ to, key, title }) => {
            if (key !== "members") {
                return nonMembersLink(layout, to, key, title)
            } else {
                return membersLinkSec(layout, key, title)
            }
        })

    const desktopSec = () => {
        return (
            <div className={desktopSecClass}>
                <div className={labNameSecClass}>
                    <span className={labNameClass}> {chineseName} </span>
                    <span className={labNameClass}> {englishName} </span>
                    <p></p>
                </div>
                <div className={desktopNavbarSecClass}>{navbarSec("desktop")}</div>
            </div>
        )
    }

    const logoLinkSec = () => {
        const to = process.env.PUBLIC_URL + "/"
        const src = isSpecialDay() ? specialLogo : logo
        const minWidth = isSpecialDay() ? "180px" : "200px"
        const onClick = isSpecialDay() ? handleClickOnSpecialDay : null

        return (
            <Link to={to}>
                <img src={src} className={logoLinkClass} style={{ minWidth: minWidth }} onClick={onClick} alt="" />
            </Link>
        )
    }

    const mobileSec = () => {
        const secStyle = {
            width: "0",
            zIndex: "10",
            top: "0",
            right: "0",
            overflowX: "hidden",
            transition: "0.5s",
        }
        const arrowStyle = {
            top: "0",
            left: "0px",
            animation: arrowAnimation,
        }
        const arrow = "➢"

        return (
            <div ref={navRef} className={mobileSecClass} style={secStyle}>
                <p className={animatedArrowClass} style={arrowStyle} onClick={closeNav}>
                    <small> {arrow} </small>
                </p>
                <p className={mobileLabNameClass}> {labName} </p>
                <p className={mobileAtUniversityNameClass}> {atUniversityName} </p>
                <p className={mobileEnglishNameClass}>{englishName}</p>
                {navbarSec("mobile")}
            </div>
        )
    }

    return (
        <nav className={navigationClass}>
            <div className={responsiveSecClass}>
                {/* mobileSec is placed in front s.t. won't hinder with the layout */}
                {mobileSec()}
                {logoLinkSec()}
                {desktopSec()}
            </div>
            {menuIconSec()}
        </nav>
    )
}

export default Navigation

const navigationClass = "dt w-100 pb4 mb1 response960"
const responsiveSecClass = "dt w-100"
// mobileSec
const mobileSecClass = "h-100 fixed bg-near-black pt5"
const animatedArrowClass = "db absolute pv3 ph4 pv0 mv0 near-white fw6 f3 link dim pointer"
const arrowAnimation = "shiftRightAnimation 2s infinite"
const mobileLabNameClass = "db pt2 mh4 mb1 mt2 tl near-white f5 f5-l link"
const mobileAtUniversityNameClass = "db mh4 mt0 tl near-white f5 f5-l link"
const mobileEnglishNameClass = "db pb2 mh4 mb4 mt0 tl near-white f5 f5-l link bb b-near-white"
// logoLinkSec
const logoLinkClass = "dib dtc-l w4 ph3"
// desktopSec
const desktopSecClass = "dib dtc-l v-mid w-100 w-75-l ph3 mw8 tr-l"
const labNameSecClass = "justify-center ph2 mr3 disappear960"
const labNameClass = "db mb2 dark-gray f5 f5-l fw5"
const desktopNavbarSecClass = "pr2 disappear960"
// nonMembersLink
const desktopNonMembersLinkClass = "dib ph3 pb3 dark-gray f5 f5-l link dim grow"
const mobileNonMembersLinkClass = "db pl4 pv2 tl near-white f5 f5-l fw5 link dim"
// membersLink
const desktopMembersLinkSecClass = "dib relative dropdown"
const mobileMembersLinkSecClass = "db dropdown"
const desktopMembersLinkClass = "dib ph3 pb3 dark-gray f5 f5-l link"
const membersLinkCursor = "default"
const membersLinkLetterSpacing = "0.05em"
const reverseTriangleClass = "dib"
const desktopDropdownSecClass = "dn absolute bg-white w-90 tc br bl bt br1 b--dark-gray dropdown-content"
const mobileDropdownSecClass = "dn tc dropdown-content"
const dropdownSecZIndex = "1"
// dropdownSec
const desktopDropdownLinkClass = "db pa2 tc dark-gray dim link bb b-dark-gray"
const mobileDropdownLinkClass = "db pv2 pl5 tl near-white dim link f5 f5-l fw5"
// menuIconSec
const menuIconSecClass = "dn dim center mb3 pointer bn appear960"
const menuIconAnimation = "pulseAnimation 3s infinite"
const menuIconClass = "pa2"
