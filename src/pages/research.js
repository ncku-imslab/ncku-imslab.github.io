import React, { useState } from "react"
import Markdown from "react-markdown"
import ResearchesData from "../data/researches/researches"
import Projects from "../data/researches/projects.json"
import { handleClickOpen1D } from "../utils/handleClick"
import {
    paddingBottomClass,
    shiftUpAnimationClass,
    shiftDownAnimationClass,
    f5,
    navyBorderSecClass,
    titleArrowClass,
    foldArrowClass,
    contentWithFoldingArrowSecClass,
    contentTitleClass,
    entryTitleSecClass,
} from "../utils/classes"
import { NavyTitle } from "../components/title"

const researches = { ...ResearchesData }
Object.entries(researches).forEach(([key, value]) => {
    researches[key] = <Markdown source={value} />
})
// make this a function component s.t. it's rendered in/after Research
const researchTopicSec = () =>
    Object.entries(researches).map(([title, content]) => {
        return (
            <div className={paddingBottomClass} key={title}>
                {NavyTitle(title)}
                <div className={researchTopicSecContentClass}>{content}</div>
            </div>
        )
    })

const Research = () => {
    const [open, setOpen] = useState([])

    const titleSec = (title, index) => {
        const arrow = !open[index] ? "↓" : "↑"
        const arrowAnimation = !open[index] ? shiftDownAnimationClass : shiftUpAnimationClass

        return (
            <button className={entryTitleSecClass} onClick={() => handleClickOpen1D(index, open, setOpen)}>
                {title} {}
                <span className={titleArrowClass} style={{ animation: arrowAnimation }}>
                    {arrow}
                </span>
            </button>
        )
    }

    const contentSec = (projectArr) => {
        return projectArr.map(({ name, duration, subsidy }, index) => {
            const durationTitle = "- 時間 Duration:"
            const subsidyTitle = "- 補助單位 Sponsor:"

            return (
                <div key={index}>
                    <p className={contentTitleClass}>{name}</p>
                    <p className={f5}>
                        <span className={contentHeaderClass}> {durationTitle}</span>
                        {duration}
                    </p>
                    <p className={contentSubsidySecClass}>
                        <span className={contentHeaderClass}>{subsidyTitle}</span> {subsidy}
                    </p>
                </div>
            )
        })
    }

    const projectSec = (projectArr, projectIndex) => {
        const arrow = "↑"

        return (
            <div className={contentWithFoldingArrowSecClass}>
                {contentSec(projectArr)}
                <button className={foldArrowClass} onClick={() => handleClickOpen1D(projectIndex, open, setOpen)}>
                    {arrow}
                </button>
            </div>
        )
    }

    const projectCategorySec = Object.entries(Projects).map(([title, projectArr], projectIndex) => {
        return (
            <div className={navyBorderSecClass} key={title}>
                {titleSec(title, projectIndex)}
                {open[projectIndex] ? projectSec(projectArr, projectIndex) : null}
            </div>
        )
    })

    const title = "研究計畫 Research Projects"
    return (
        <div className={researchSecClass}>
            {researchTopicSec()}
            <div className={paddingBottomClass}>
                {NavyTitle(title)}
                {projectCategorySec}
            </div>
        </div>
    )
}

export default Research

const researchTopicSecContentClass = "pt1 ph3 lh-copy tl f5 f5-ns ba b--navy br1"

const researchSecClass = "bg-near-white shadow-5 pa2 ph5-ns center mw8 mw8-ns"
const contentHeaderClass = "near-black"
const contentSubsidySecClass = "pb3 f5"
