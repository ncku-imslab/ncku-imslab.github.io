import React, { useState } from "react"
import Honor from "../data/honors.json"
import { handleClickOpen2D } from "../utils/handleClick"
import { create2DArray } from "../utils/create2DArray"
import {
    paddingBottomClass,
    shiftDownAnimationClass,
    shiftUpAnimationClass,
    navyBorderSecClass,
    titleArrowClass,
    foldArrowClass,
    contentWithFoldingArrowSecClass,
    contentTitleClass,
} from "../utils/classes"
import { NavyTitle } from "../components/title"

const Honors = () => {
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
            <div className={contentWithFoldingArrowSecClass}>
                {contentSec(honorByYearArr)}
                <button
                    className={foldArrowClass}
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
                <span className={titleArrowClass} style={{ animation: arrowAnimation }}>
                    {arrow}
                </span>
            </button>
        )
    }
    const yearSec = (categoryArr, categoryIndex) => {
        return Object.entries(categoryArr).map(([year, yearArr], yearIndex) => {
            return (
                <div className={navyBorderSecClass} key={year}>
                    {yearTitleSec(year, categoryIndex, yearIndex)}
                    {open[categoryIndex][yearIndex] ? honorByYearSec(yearArr, categoryIndex, yearIndex) : null}
                </div>
            )
        })
    }
    const honorCategorySec = Object.entries(Honor).map(([category, categoryArr], categoryIndex) => {
        return (
            <div className={paddingBottomClass} key={category}>
                {NavyTitle(category)}
                {yearSec(categoryArr, categoryIndex)}
            </div>
        )
    })

    return <div className={honorsSecClass}>{honorCategorySec}</div>
}

export default Honors

const honorsSecClass = "bg-near-white shadow-5 pa2 ph5-ns center mw8 mw8-ns "
const yearTitleSecClass = "w-100 pl2 navy tl b f4 dim bn"
const contentSecClass = "tl normal"
const contentNameClass = "pb2 f5"
