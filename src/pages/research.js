import React, { useState } from "react"
import Markdown from "react-markdown"
import ResearchesData from "../data/researches/researches"
import Projects from "../data/researches/projects.json"
import { handleClickOpen1D } from "../utils/handleClick"

const researches = { ...ResearchesData }
Object.entries(researches).forEach(([key, value]) => {
    researches[key] = <Markdown source={value} />
})
// make this a function component s.t. it's rendered in/after Research
const researchTopicSec = () =>
    Object.entries(researches).map(([title, content]) => {
        return (
            <div className={researchTopicSecClass} key={title}>
                <h1 className={researchTopicSecTitleClass}> {title} </h1>
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
            <button className={titleSecClass} onClick={() => handleClickOpen1D(index, open, setOpen)}>
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
                    <p className={contentNameClass}>{name}</p>
                    <p className={contentDurationSecClass}>
                        <span className={contentTitleClass}> {durationTitle}</span>
                        {duration}
                    </p>
                    <p className={contentSubsidySecClass}>
                        <span className={contentTitleClass}>{subsidyTitle}</span> {subsidy}
                    </p>
                </div>
            )
        })
    }

    const projectSec = (projectArr, projectIndex) => {
        const arrow = "↑"

        return (
            <div className={projectSecClass}>
                {contentSec(projectArr)}
                <button className={projectArrowClass} onClick={() => handleClickOpen1D(projectIndex, open, setOpen)}>
                    {arrow}
                </button>
            </div>
        )
    }

    const projectCategorySec = Object.entries(Projects).map(([title, projectArr], projectIndex) => {
        return (
            <div className={projectCategorySecClass} key={title}>
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
                <h1 className={titleClass}> {title} </h1>
                {projectCategorySec}
            </div>
        </div>
    )
}

export default Research

const researchTopicSecClass = "pb2 mb4"
const researchTopicSecTitleClass = "pb2 navy bb bw1"
const researchTopicSecContentClass = "pt1 ph3 lh-copy tl f5 f5-ns ba b--navy br1"

const researchSecClass = "bg-near-white shadow-5 pa2 ph5-ns center mw8 mw8-ns"
const paddingBottomClass = "pb2 mb4"
const titleClass = "pb2 navy bb bw1"
const projectCategorySecClass = "pa2 mb2 mt3 black tl ba b--navy br1"
const titleSecClass = "w-100 pt1 pl2 navy tl b f4 dim bn"
const titleArrowClass = "dib navy link"
const shiftDownAnimationClass = "shiftDownAnimation 2s infinite"
const shiftUpAnimationClass = "shiftUpAnimation 2s infinite"
const projectSecClass = "ph4 pt1 mt1"
const contentNameClass = "pb1 b f5"
const contentDurationSecClass = "f5"
const contentTitleClass = "near-black"
const contentSubsidySecClass = "pb3 f5"
const projectArrowClass = "w-100 pb1 center b f4 dim grow bn"
