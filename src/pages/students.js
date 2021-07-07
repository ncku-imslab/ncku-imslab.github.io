import React from "react"
import Data from "../data/members/members.json"
import Photo from "../components/photo"
import { paddingBottomClass, studentsAndAlumniClass, personSecClass } from "../utils/classes"
import { GoldenTitle } from "../components/title"

const Students = () => {
    function getUndergraduateTitle(year) {
        return year.substr(1, 3) + " 級 Graduate in " + (Number(year.substr(1, 3)) + 1911).toString()
    }

    const personSec = (imageDir, name, index) => {
        return (
            <div className={personSecClass} style={{ width: personSecWidth }} key={index}>
                {Photo(imageDir)}
                <span className={nameClass}> {name} </span>
            </div>
        )
    }
    const yearTitle = (year) => {
        const title = year[0] === "b" ? getUndergraduateTitle(year) : year
        return <div className={yearTitleClass}>{title}</div>
    }
    const yearSec = (year, studentArr) => {
        return (
            <div className={yearSecClass} key={year}>
                {year.length === 0 ? null : yearTitle(year)}
                {studentArr.map(({ image, name_ch }, index) => {
                    return personSec(image, name_ch, index)
                })}
            </div>
        )
    }
    const degreeSec = (degree, memberArr) => {
        return (
            <div className={paddingBottomClass} key={degree}>
                {GoldenTitle(degree)}
                {Object.entries(memberArr).map(([year, studentArr]) => {
                    return yearSec(year, studentArr)
                })}
            </div>
        )
    }

    const students = Data.students
    return (
        <div className={studentsAndAlumniClass}>
            {Object.entries(students).map(([degree, memberArr]) => {
                return degreeSec(degree, memberArr)
            })}
        </div>
    )
}

export default Students

const yearSecClass = "bg-near-white pa2 mb2 mt3 black"
const yearTitleClass = "w-100 pt1 pb1 pl2 mb1 tl navy b f4 bn"
const personSecWidth = "225px"
const nameClass = "db pt2 navy b tc ttu tracked f4 f4-ns link"
