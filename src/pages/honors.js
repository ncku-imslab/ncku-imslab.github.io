import React, { useState } from 'react';
import Honor from '../data/honors.json';

const Honors = () => {
    const outerLength = Object.keys(Honor).length;
    const array = new Array(outerLength);
    for (let i = 0; i < outerLength; i++) {
        const innerLength = Object.keys(Honor)[i].length;
        array[i] = new Array(innerLength);

        for (let j = 0; j < innerLength; j++) {
            if (j === 0) {
                array[i][j] = true;
            } else {
                array[i][j] = false;
            }
        }
    }
    // React Hooks for 2D array
    const [open, setOpen] = useState(array);

    function handleClick(xIndex, yIndex) {
        const list = { ...open };
        list[xIndex][yIndex] = !list[xIndex][yIndex];
        setOpen(list);
    }

    const section = Object.entries(Honor).map((titleAndObject, index) => {
        return (
            <div className="mb4 pb2" key={titleAndObject[0]}>
                <h1 className="navy pb2 bb bw1" >{titleAndObject[0]}</h1>
                {
                    Object.entries(titleAndObject[1]).map((yearAndObject, yearIndex) => {
                        return (
                            <div className="black tl pa2 ba b--navy br1 mb2 mt3" key={yearAndObject[0]}>
                                <button className="dim navy f4 b w-100 tl bn pl2"
                                    onClick={() => handleClick(index, yearIndex)}
                                >
                                    {yearAndObject[0].substr(5, 4)} {}
                                    {!open[index][yearIndex] ?
                                        <span className="navy dib link"
                                            style={{ animation: "shiftDownAnimation 2s infinite" }}
                                        > ↓ </span>
                                        :
                                        <span className="navy dib link"
                                            style={{ animation: "shiftUpAnimation 2s infinite" }}
                                        > ↑ </span>
                                    }
                                </button>
                                {open[index][yearIndex] ?
                                    <div className="ph4 pt1 mt1">
                                        {yearAndObject[1].map((content, contentIndex) => {
                                            return (
                                                <div className="tl normal" key={contentIndex}>
                                                    <p className="b f5 pb1"> ✰ {content.content} </p>
                                                    <p className="f5 pb2"> {content.name} </p>
                                                </div>
                                            );
                                        })
                                        }
                                        <button className="dim grow w-100 center f4 pb1 bn b"
                                            onClick={() => handleClick(index, yearIndex)}
                                        > ↑ </button>
                                    </div>
                                    : null
                                }
                            </div>
                        );
                    })
                }
            </div>
        );
    })
    return (
        <div className="mw8 mw8-ns center bg-near-white pa2 ph5-ns shadow-5">
            {section}
        </div>
    );
}

export default Honors;