import React from 'react';
import Data from "../data/members/members.json";

const Students = () => {
    const students = Data.students;
    const section = Object.entries(students).map((titleAndObject, index) => {
        return (
            <div className="mb4 pb2" key={titleAndObject[0]}>
                <h1 className="self-gold pb2 " >{titleAndObject[0]}</h1>
                {
                    Object.entries(titleAndObject[1]).map((yearAndObject, yearIndex) => {
                        console.log(yearAndObject[0].length)
                        return (
                            <div className="black tl pa2 mb2 mt3 bg-near-white" key={yearAndObject[0]}>
                                {
                                    yearAndObject[0].length === 0 ? null :
                                        <div className="dim navy f4 b w-100 tl bn pl2 pt1 pb1 mb1">
                                            {yearAndObject[0][0] === 'b' ?
                                                yearAndObject[0].substr(1, 3) + ' 級 Graduate in ' + (Number(yearAndObject[0].substr(1, 3)) + 1911).toString()
                                                : yearAndObject[0]}
                                        </div>
                                }
                                <div className="tc">
                                    {
                                        yearAndObject[1].map((content, contentIndex) => {
                                            return (
                                                <div class="dib bg-white br3 ph2 pv4 ma3 ba b--black-10"
                                                    style={{ width: "225px" }}
                                                    key={contentIndex}>
                                                    <div class="">
                                                        <img src="http://tachyons.io/img/avatar_1.jpg" class="br-100 h4 w4 dib ba b--black-05 pa2 mv2" title="Photo of a kitty staring at you" />
                                                        <span class="tc ttu tracked dim link db f4 f4-ns navy b pt2">{content.name_ch}</span>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>

                            </div>
                        );
                    })
                }

            </div>
        );
    })

    return (
        <div className="mw8 mw8-ns center bg-mid-gray pa2 ph5-ns shadow-5 br1">
            {section}
        </div>
    );
}

export default Students;