import React, { useState } from "react"
import Data from "../data/members/members.json"
import Photo from "../components/photo"
import { handleClickOpen2D } from "../utils/handleClick"
import { create2DArray } from "../utils/create2DArray"
import {
    paddingBottomClass,
    studentsAndAlumniClass,
    personSecClass,
    animatedArrowClass,
    shiftUpAnimationClass,
    shiftDownAnimationClass,
    pb2,
} from "../utils/classes"
import { GoldenTitle } from "../components/title"

const Alumni = () => {
    const alumni = Data.alumni
    const [open, setOpen] = useState(create2DArray(alumni))

    const descriptionSec = (year, paper, job, proj) => {
        const workTitle = year[0] === "b" ? "專題題目 Project" : "論文題目 Thesis"
        const workContent = year[0] === "b" ? proj : paper
        const jobTitle = "出路 Destination"

        return (
            <div className={pb2}>
                <span className={descriptionTitleClass}>{workTitle}</span>
                <span className={descriptionClass}>{workContent}</span>
                {job === undefined ? null : (
                    <div>
                        <span className={descriptionTitleClass}>{jobTitle}</span>
                        <span className={descriptionClass}>{job}</span>
                    </div>
                )}
            </div>
        )
    }
    const personSec = (year, imageDir, name, paper, job, proj, index) => {
        return (
            <div className={personSecClass} style={{ width: personSecWidth }} key={index}>
                {Photo(imageDir)}
                <span className={nameClass}> {name} </span>
                <hr className={breakClass} />
                {descriptionSec(year, paper, job, proj)}
            </div>
        )
    }
    const yearTitleSec = (degreeIndex, year, yearIndex) => {
        const title =
            year.substr(1, 3) +
            (year[0] === "b" ? " 級 Graduate in " : " 年畢 Graduate in ") +
            (Number(year.substr(1, 3)) + 1911).toString()
        const arrowAnimation = !open[degreeIndex][yearIndex] ? shiftDownAnimationClass : shiftUpAnimationClass
        const arrow = !open[degreeIndex][yearIndex] ? "↓" : "↑"

        return (
            <button className={yearTitleClass} onClick={() => handleClickOpen2D(degreeIndex, yearIndex, open, setOpen)}>
                {title}{" "}
                <span
                    className={animatedArrowClass}
                    style={{
                        animation: arrowAnimation,
                    }}
                >
                    {arrow}
                </span>
            </button>
        )
    }
    const yearSec = (degreeIndex, year, studentArr, yearIndex) => {
        const arrow = "↑"

        return (
            <div className={yearSecClass} key={year}>
                {yearTitleSec(degreeIndex, year, yearIndex)}
                {open[degreeIndex][yearIndex] ? (
                    <div className={openYearSecClass}>
                        {studentArr.map(({ image, name_ch, paper, job, proj }, index) => {
                            return personSec(year, image, name_ch, paper, job, proj, index)
                        })}
                        <button
                            className={bottomArrowClass}
                            onClick={() => handleClickOpen2D(degreeIndex, yearIndex, open, setOpen)}
                        >
                            {arrow}
                        </button>
                    </div>
                ) : null}
            </div>
        )
    }
    const degreeSec = (degree, memberArr, degreeIndex) => {
        return (
            <div className={paddingBottomClass} key={degree}>
                {GoldenTitle(degree)}
                {Object.entries(memberArr).map(([year, studentArr], yearIndex) => {
                    return yearSec(degreeIndex, year, studentArr, yearIndex)
                })}
            </div>
        )
    }

    return (
        <div className={studentsAndAlumniClass}>
            {Object.entries(alumni).map(([degree, memberArr], degreeIndex) => {
                return degreeSec(degree, memberArr, degreeIndex)
            })}
        </div>
    )
}

export default Alumni

const yearSecClass = "bg-near-white pa2 mb2 mt3 tl black"
const yearTitleClass = "w-100 pt1 pb1 pl2 mb1 tl navy b f4 dim bn"
const openYearSecClass = "tc"
const bottomArrowClass = "w-100 pv1 pb1 center b f4 bn dim grow"
const personSecWidth = "250px"
const nameClass = "db pt2 tc ttu tracked navy b f4 f4-ns link"
const breakClass = "mw3 mt2 mb3 bw1 bb b--black-10 "
const descriptionTitleClass = "db pv1 lh-copy measure center near-black b f5"
const descriptionClass = "db pv1 ph3 lh-copy measure center near-black f6"
