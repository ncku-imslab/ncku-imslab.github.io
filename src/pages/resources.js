import React, { useState } from "react"
import Markdown from "react-markdown"
import resourcesData from "../data/resources"
import { handleClickOpen1D } from "../utils/handleClick"

const resources = { ...resourcesData }
Object.entries(resources).forEach(([key, value]) => {
    resources[key] = <Markdown source={value} />
})

const Resources = () => {
    const [open, setOpen] = useState([true])

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

    const contentSec = (content, index, open, setOpen) => {
        const arrow = "↑"

        return (
            <div className={contentSecClass}>
                {content}
                <button className={contentArrowClass} onClick={() => handleClickOpen1D(index, open, setOpen)}>
                    {arrow}
                </button>
            </div>
        )
    }

    // forced to use single (v.s. plural of this whole section)
    const singleResourceSec = (title, content, index) => {
        return (
            <div className={singleResourceSecClass} key={title}>
                {titleSec(title, index)}
                {open[index] ? contentSec(content, index, open, setOpen) : null}
            </div>
        )
    }

    const title = "相關資源 Resources"
    return (
        <div className={resourcesClass}>
            <div className={paddingBottomClass}>
                <h1 className={titleClass}> {title} </h1>
                {Object.entries(resources).map(([title, content], index) => {
                    return singleResourceSec(title, content, index)
                })}
            </div>
        </div>
    )
}

export default Resources

const resourcesClass = "bg-near-white shadow-5 pa2 ph5-ns mw8 mw8-ns center"
const paddingBottomClass = "pb2 mb4"
const titleClass = "navy pb2 bb bw1"
const singleResourceSecClass = "pa2 mb2 mt3 black tl ba b--navy br1"
const titleSecClass = "w-100 pt1 pl2 navy tl b f4 dim bn"
const titleArrowClass = "dib navy link"
const shiftDownAnimationClass = "shiftDownAnimation 2s infinite"
const shiftUpAnimationClass = "shiftUpAnimation 2s infinite"
const contentSecClass = "pt2 ph3 lh-copy tl f5 f5-ns"
const contentArrowClass = "w-100 pb1 center b f4 dim grow bn"
