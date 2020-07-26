import React from 'react';
import Data from "../data/members/members.json";

const Students = () => {
    const students = Data.students;
    const section = Object.entries(students).map((titleAndObject, index) => {
        return (
            <div className="pb2 mb4" key={titleAndObject[0]}>
                <h1 className="pb2 self-gold"> {titleAndObject[0]} </h1>
                {
                    Object.entries(titleAndObject[1]).map((yearAndObject, yearIndex) => {
                        return (
                            <div className="pa2 mb2 mt3 black bg-near-white" key={yearAndObject[0]}>
                                {yearAndObject[0].length === 0 ? null :
                                    <div className="navy f4 b w-100 tl bn pl2 pt1 pb1 mb1">
                                        {yearAndObject[0][0] === 'b' ?
                                            yearAndObject[0].substr(1, 3) + ' 級 Graduate in ' + (Number(yearAndObject[0].substr(1, 3)) + 1911).toString()
                                            : yearAndObject[0]
                                        }
                                    </div>
                                }
                                {yearAndObject[1].map((content, contentIndex) => {
                                    return (
                                        <div className="dib ph2 pt3 pb4 ma3 bg-white ba b--black-10 br1"
                                            style={{ width: "225px" }}
                                            key={contentIndex}
                                        >
                                            <img src={content.image.length === 0 ?
                                                require('../images/members/cat.jpg')
                                                : require('../images/members/' + content.image)
                                            }
                                                className="dib h4 w4 pa2 mv2 ba b--black-05 br-100"
                                                style={{ objectFit: "cover" }}
                                                title="Cats are the best. Image source: https://www.pickpik.com/black-cat-view-cat-eyes-cat-looking-cute-38005"
                                                alt=""
                                            />
                                            <span className="db navy b tc ttu tracked f4 f4-ns link pt2"> {content.name_ch} </span>
                                        </div>
                                    );
                                })
                                }
                            </div>
                        );
                    })
                }
            </div>
        );
    })

    return (
        <div className="mw8 mw8-ns center bg-mid-gray pa2 ph5-ns shadow-5">
            {section}
        </div>
    );
}

export default Students;