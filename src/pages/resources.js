import React, { useState } from "react"
import Markdown from "react-markdown"
import resourcesData from "../data/resources"
import { handleClickOpen1D } from "../utils/handleClick"
import {
    paddingBottomClass,
    shiftDownAnimationClass,
    shiftUpAnimationClass,
    navyBorderSecClass,
    titleArrowClass,
    foldArrowClass,
    entryTitleSecClass,
} from "../utils/classes"
import { NavyTitle } from "../components/title"

const resources = { ...resourcesData }
Object.entries(resources).forEach(([key, value]) => {
    resources[key] = <Markdown children={value} />
})

const Resources = () => {
    const [open, setOpen] = useState([true])

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

    const contentSec = (content, index, open, setOpen) => {
        const arrow = "↑"

        return (
            <div className={contentSecClass}>
                {content}
                <button className={foldArrowClass} onClick={() => handleClickOpen1D(index, open, setOpen)}>
                    {arrow}
                </button>
            </div>
        )
    }

    // forced to use single (v.s. plural of this whole section)
    const singleResourceSec = (title, content, index) => {
        return (
            <div className={navyBorderSecClass} key={title}>
                {titleSec(title, index)}
                {open[index] ? contentSec(content, index, open, setOpen) : null}
            </div>
        )
    }

    const title = "相關資源 Resources"
    return (
        <div className={resourcesClass}>
            <div className={paddingBottomClass}>
                {NavyTitle(title)}
                {Object.entries(resources).map(([title, content], index) => {
                    return singleResourceSec(title, content, index)
                })}
            </div>
        </div>
    )
}

export default Resources

const resourcesClass = "bg-near-white shadow-5 pa2 ph5-ns mw8 mw8-ns center"
const contentSecClass = "pt2 ph3 lh-copy tl f5 f5-ns"
