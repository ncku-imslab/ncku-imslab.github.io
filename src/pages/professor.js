import React, { useState } from "react"
import Markdown from "react-markdown"
import professorData from "../data/members/prof"
import professorContact from "../data/members/prof.json"
import { handleClickOpen1D } from "../utils/handleClick"
import {
    paddingBottomClass,
    animatedArrowClass,
    shiftDownAnimationClass,
    shiftUpAnimationClass,
    pb2,
    f5,
} from "../utils/classes"
import { GoldenTitle } from "../components/title"

const professor = { ...professorData }
Object.entries(professor).forEach(([key, value]) => {
    professor[key] = <Markdown children={value} />
})

const Professor = () => {
    const [open, setOpen] = useState([true])

    function isSpecialDay() {
        const today = new Date()
        return today.getMonth() === 2 && today.getDate() === 20
    }
    const handleClickOnSpecialDay = () => {
        window.alert("Today is Meng-Hsun's birthday ｡:.ﾟヽ(*´∀`)ﾉﾟ.:｡")
    }

    const contactSec = Object.entries(professorContact).map(([title, content]) => {
        const contentClass = title === "信箱 Email" ? emailClass : faxAndTelephoneClass

        return (
            <div className={pb2} key={title}>
                <span className={contactSecTitleClass}>{title}</span>
                <span className={contentClass}>{content}</span>
            </div>
        )
    })

    const personalInfoSec = () => {
        const imageAlt = "The nicest professor in NCKU CSIE is staring at you σ`∀´)σ"
        const chineseName = "蔡 孟 勳"
        const englishName = "Meng-Hsun Tsai ↗"
        const url = "https://www.cs.nycu.edu.tw/~tsaimh/"
        const onClick = isSpecialDay() ? handleClickOnSpecialDay : null

        return (
            <div className={personalInfoSecClass} style={{ maxWidth: personalInfoSecMaxWidth }}>
                <img
                    alt={imageAlt}
                    src={require("../images/tsaimh.jpg")}
                    className={imageClass}
                    onClick={onClick}
                    title=""
                />
                <a className={chineseNameClass} href={url}>
                    {chineseName}
                </a>
                <a className={englishNameClass} href={url}>
                    {englishName}
                </a>
                <hr className={dividerClass} />
                {contactSec}
            </div>
        )
    }

    const generalInfoTitleSec = (title, index) => {
        const arrowAnimation = !open[index] ? shiftDownAnimationClass : shiftUpAnimationClass
        const arrow = !open[index] ? "↓" : "↑"

        return (
            <button className={generalInfoTitleSecClass} onClick={() => handleClickOpen1D(index, open, setOpen)}>
                {title} {}
                <span className={animatedArrowClass} style={{ animation: arrowAnimation }}>
                    {arrow}
                </span>
            </button>
        )
    }

    const generalInfoContentSec = (content, index) => {
        const arrow = "↑"

        return (
            <div className={generalInfoContentSecClass}>
                <span className={f5}> {content} </span>
                <button
                    className={generalInfoContentArrowClass}
                    onClick={() => handleClickOpen1D(index, open, setOpen)}
                >
                    {arrow}
                </button>
            </div>
        )
    }

    const generalInfoSec = Object.entries(professor).map(([title, content], index) => {
        return (
            <div className={generalInfoSecClass} key={title}>
                {generalInfoTitleSec(title, index)}
                {open[index] ? generalInfoContentSec(content, index) : null}
            </div>
        )
    })

    const title = "指導教授 Professor"
    return (
        <div className={professorClass}>
            <div className={paddingBottomClass}>
                {GoldenTitle(title)}
                {personalInfoSec()}
                {generalInfoSec}
            </div>
        </div>
    )
}

export default Professor

const professorClass = "bg-mid-gray shadow-5 pa2 ph5-ns center mw8 mw8-ns"
const personalInfoSecClass = "bg-white center pv3 br1"
const personalInfoSecMaxWidth = "21rem"
const imageClass = "db h4 w4 pa2 center pointer ba b--black-10 br-100"
const chineseNameClass = "db pt2 pb1 mv1 navy b f4 f4-ns ttu dim link"
const englishNameClass = "db pv1 mv1 navy b f5 f5-ns ttu tracked dim link"
const dividerClass = "mw3 mt2 mb3 bb bw1 b--black-10"
const contactSecTitleClass = "db measure lh-copy pv1 center near-black f5 b"
// add "!" to cancel out the last effect
const faxAndTelephoneClass = contactSecTitleClass + "!"
const emailClass = faxAndTelephoneClass + "! dim"
const generalInfoSecClass = "bg-near-white pa2 mb2 mt3 black tl br1"
const generalInfoTitleSecClass = "w-100 pt1 navy b tl f4 dim bn"
const generalInfoContentSecClass = "pt2 ph3 lh-copy near-black tl f5 f5-ns"
const generalInfoContentArrowClass = "w-100 pb1 center f4 dim grow bn b"
