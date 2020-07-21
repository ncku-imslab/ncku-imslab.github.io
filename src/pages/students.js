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
                        return (
                            <div className="black tl pa2 mb2 mt3 bg-near-white" key={yearAndObject[0]}>
                                {
                                    yearAndObject[0].length === 0 ? null :
                                        <div className="navy f4 b w-100 tl bn pl2 pt1 pb1 mb1">
                                            {yearAndObject[0][0] === 'b' ?
                                                yearAndObject[0].substr(1, 3) + ' 級 Graduate in ' + (Number(yearAndObject[0].substr(1, 3)) + 1911).toString()
                                                : yearAndObject[0]}
                                        </div>
                                }
                                <div className="tc">
                                    {
                                        yearAndObject[1].map((content, contentIndex) => {
                                            return (
                                                <div className="dib bg-white br3 ph2 pt3 pb4 ma3 ba b--black-10"
                                                    style={{ width: "225px" }}
                                                    key={contentIndex}>
                                                    <div>
                                                        <img src={content.image.length === 0 ?
                                                            require('../images/members/cat.jpg')
                                                            : require('../images/members/' + content.image)
                                                        }
                                                            className="br-100 h4 w4 dib ba b--black-05 pa2 mv2"
                                                            style={{ objectFit: "cover" }}
                                                            title="Cat is the best. Image source: https://www.pickpik.com/black-cat-view-cat-eyes-cat-looking-cute-38005" 
                                                            alt=""
                                                            />
                                                        <span className="tc ttu tracked link db f4 f4-ns navy b pt2">{content.name_ch}</span>
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