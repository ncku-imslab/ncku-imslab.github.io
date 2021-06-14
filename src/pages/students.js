import React from "react"
import Data from "../data/members/members.json"

const Students = () => {
    function getUndergraduateTitle(year) {
        return year.substr(1, 3) + " 級 Graduate in " + (Number(year.substr(1, 3)) + 1911).toString()
    }

    // require() is run on compilation instead of execution, thus dynamic paths will fail
    const photo = (dir) => (
        <img
            className={photoClass}
            src={
                // the .default property is to fix Webpack issue, afaik
                // cat's image source: "https://www.pickpik.com/black-cat-view-cat-eyes-cat-looking-cute-38005"
                dir.length === 0
                    ? require("../images/members/cat.jpg").default
                    : require("../images/members/" + dir).default
            }
            style={{ objectFit: "cover" }}
            alt=""
        />
    )
    const personSec = (imageDir, name, index) => {
        return (
            <div className={personSecClass} style={{ width: "225px" }} key={index}>
                {photo(imageDir)}
                <span className={nameClass}> {name} </span>
            </div>
        )
    }
    const yearTitle = (year) => {
        return <div className={yearTitleClass}>{year[0] === "b" ? getUndergraduateTitle(year) : year}</div>
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
            <div className={degreeSecClass} key={degree}>
                <h1 className={degreeTitleClass}> {degree} </h1>
                {Object.entries(memberArr).map(([year, studentArr]) => {
                    return yearSec(year, studentArr)
                })}
            </div>
        )
    }

    const students = Data.students
    return (
        <div className={studentClass}>
            {Object.entries(students).map(([degree, memberArr]) => {
                return degreeSec(degree, memberArr)
            })}
        </div>
    )
}

export default Students

const studentClass = "bg-mid-gray pa2 ph5-ns center mw8 mw8-ns shadow-5"
const degreeSecClass = "pb2 mb4"
const degreeTitleClass = "pb2 self-gold"
const yearSecClass = "bg-near-white pa2 mb2 mt3 black"
const yearTitleClass = "navy f4 b w-100 tl bn pl2 pt1 pb1 mb1"
const personSecClass = "bg-white dib ph2 pt3 pb4 ma3 ba b--black-10 br1"
const photoClass = "dib h4 w4 pa2 mv2 ba b--black-05 br-100"
const nameClass = "db pt2 navy b tc ttu tracked f4 f4-ns link"
