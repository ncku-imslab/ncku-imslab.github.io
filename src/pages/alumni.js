import React, { useState } from "react"
import Data from "../data/members/members.json"

const Alumni = () => {
    const alumni = Data.alumni
    const outerLength = Object.keys(alumni).length
    const array = new Array(outerLength)
    for (let i = 0; i < outerLength; i++) {
        const innerLength = Object.keys(alumni)[i].length
        array[i] = new Array(innerLength)

        for (let j = 0; j < innerLength; j++) {
            if (j === 0) {
                array[i][j] = true
            } else {
                array[i][j] = false
            }
        }
    }
    // React Hooks for 2D array
    const [open, setOpen] = useState(array)

    function handleClick(xIndex, yIndex) {
        const list = { ...open }
        list[xIndex][yIndex] = !list[xIndex][yIndex]
        setOpen(list)
    }

    const section = Object.entries(alumni).map((titleAndObject, index) => {
        return (
            <div className="mb4 pb2" key={titleAndObject[0]}>
                <h1 className="self-gold pb2 "> {titleAndObject[0]} </h1>
                {Object.entries(titleAndObject[1]).map((yearAndObject, yearIndex) => {
                    return (
                        <div className="black tl pa2 mb2 mt3 bg-near-white" key={yearAndObject[0]}>
                            <button
                                className="dim navy f4 b w-100 tl bn pl2 pt1 pb1 mb1"
                                onClick={() => handleClick(index, yearIndex)}
                            >
                                {yearAndObject[0][0] === "b"
                                    ? yearAndObject[0].substr(1, 3) +
                                    " 級 Graduate in " +
                                    (Number(yearAndObject[0].substr(1, 3)) + 1911).toString()
                                    : yearAndObject[0].substr(1, 3) +
                                    " 年畢 Graduate in " +
                                    (Number(yearAndObject[0].substr(1, 3)) + 1911).toString()}
                                <b> </b>
                                {!open[index][yearIndex] ? (
                                    <span className="dib link" style={{ animation: "shiftDownAnimation 2s infinite" }}>
                                        {" "}
                                        ↓{" "}
                                    </span>
                                ) : (
                                        <span className="dib link" style={{ animation: "shiftUpAnimation 2s infinite" }}>
                                            {" "}
                                        ↑{" "}
                                        </span>
                                    )}
                            </button>
                            {open[index][yearIndex] ? (
                                <div className="tc">
                                    {yearAndObject[1].map((content, contentIndex) => {
                                        return (
                                            <div
                                                className="dib bg-white br1 ph2 pv3 ma3 ba b--black-10"
                                                style={{ width: "250px" }}
                                                key={contentIndex}
                                            >
                                                <img
                                                    src={
                                                        content.image.length === 0
                                                            ? require("../images/members/cat.jpg").default
                                                            : require("../images/members/" + content.image).default
                                                    }
                                                    className="br-100 h4 w4 dib ba b--black-05 pa2 mv2"
                                                    style={{ objectFit: "cover" }}
                                                    title="Cat is the best. Image source: https://www.pickpik.com/black-cat-view-cat-eyes-cat-looking-cute-38005"
                                                    alt=""
                                                />
                                                <span className="tc ttu tracked link db f4 f4-ns navy b pt2">
                                                    {" "}
                                                    {content.name_ch}{" "}
                                                </span>
                                                <hr className="mw3 bb bw1 b--black-10 mt2 mb3" />
                                                <div className="pb2">
                                                    <span className="lh-copy measure center f5 near-black db b pv1">
                                                        {yearAndObject[0][0] === "b"
                                                            ? "專題題目 Project"
                                                            : "論文題目 Thesis"}
                                                    </span>
                                                    <span className="lh-copy measure center f6 near-black db pv1 ph3">
                                                        {yearAndObject[0][0] === "b" ? content.proj : content.paper}
                                                    </span>
                                                    {content.job === undefined ? null : (
                                                        <div>
                                                            <span className="lh-copy measure center f5 near-black db b pv1">
                                                                出路 Destination
                                                            </span>
                                                            <span className="lh-copy measure center f6 near-black db pv1 ph3">
                                                                {content.job}
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )
                                    })}
                                    <button
                                        className="dim grow w-100 center f4 pb1 bn pv1 b"
                                        onClick={() => handleClick(index, yearIndex)}
                                    >
                                        {" "}
                                        ↑{" "}
                                    </button>
                                </div>
                            ) : null}
                        </div>
                    )
                })}
            </div>
        )
    })

    return <div className="mw8 mw8-ns center bg-mid-gray pa2 ph5-ns shadow-5">{section}</div>
}

export default Alumni
