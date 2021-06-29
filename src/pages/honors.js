import React, { useState } from "react"
import Honor from "../data/honors.json"
import { handleClickOpen2D } from "../utils/handleClick"
import { create2DArray } from "../utils/create2DArray"

const Honors = () => {
    // React Hooks for 2D array
    const [open, setOpen] = useState(create2DArray(Honor))

    const contentSec = (honorByYearArr) => {
        return honorByYearArr.map(({ content, name }, index) => {
            const title = "✰ " + content

            return (
                <div className={contentSecClass} key={index}>
                    <p className={contentTitleClass}> {title} </p>
                    <p className={contentNameClass}> {name} </p>
                </div>
            )
        })
    }
    const honorByYearSec = (honorByYearArr, categoryIndex, yearIndex) => {
        const arrow = "↑"

        return (
            <div className={honorByYearSecClass}>
                {contentSec(honorByYearArr)}
                <button
                    className={honorByYearArrowClass}
                    onClick={() => handleClickOpen2D(categoryIndex, yearIndex, open, setOpen)}
                >
                    {arrow}
                </button>
            </div>
        )
    }
    const yearTitleSec = (year, categoryIndex, yearIndex) => {
        const arrow = !open[categoryIndex][yearIndex] ? "↓" : "↑"
        const arrowAnimation = !open[categoryIndex][yearIndex] ? shiftDownAnimationClass : shiftUpAnimationClass

        return (
            <button
                className={yearTitleSecClass}
                onClick={() => handleClickOpen2D(categoryIndex, yearIndex, open, setOpen)}
            >
                {year.substr(5, 4)} {}
                <span className={yearTitleArrowClass} style={{ animation: arrowAnimation }}>
                    {arrow}
                </span>
            </button>
        )
    }
    const yearSec = (categoryArr, categoryIndex) => {
        return Object.entries(categoryArr).map(([year, yearArr], yearIndex) => {
            return (
                <div className={yearSecClass} key={year}>
                    {yearTitleSec(year, categoryIndex, yearIndex)}
                    {open[categoryIndex][yearIndex] ? honorByYearSec(yearArr, categoryIndex, yearIndex) : null}
                </div>
            )
        })
    }
    const honorCategorySec = Object.entries(Honor).map(([category, categoryArr], categoryIndex) => {
        return (
            <div className={honorCategorySecClass} key={category}>
                <h1 className={categoryTitleClass}>{category}</h1>
                {yearSec(categoryArr, categoryIndex)}
            </div>
        )
    })

    return <div className={honorsSecClass}>{honorCategorySec}</div>
}

export default Honors

const honorsSecClass = "bg-near-white shadow-5 pa2 ph5-ns center mw8 mw8-ns "
const honorCategorySecClass = "pb2 mb4"
const categoryTitleClass = "navy pb2 bb bw1"
const yearSecClass = "pa2 mb2 mt3 black tl ba b--navy br1"
const yearTitleSecClass = "w-100 pl2 navy tl b f4 dim bn"
const yearTitleArrowClass = "dib navy link"
const shiftDownAnimationClass = "shiftDownAnimation 2s infinite"
const shiftUpAnimationClass = "shiftUpAnimation 2s infinite"
const honorByYearSecClass = "ph4 pt1 mt1"
const honorByYearArrowClass = "w-100 pb1 center b f4 dim grow bn"
const contentSecClass = "tl normal"
const contentTitleClass = "pb1 b f5"
const contentNameClass = "pb2 f5"
