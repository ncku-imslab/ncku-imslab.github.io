import React, { Component } from 'react';
import Data from "../data/members/members.json";

class Alumni extends Component {
    constructor(props) {
        super(props);
        let alumni = Data.alumni;
        let outerLength = Object.keys(alumni).length;
        let array = new Array(outerLength);

        for (let i = 0; i < outerLength; i++) {
            let innerLength = Object.keys(alumni)[i].length;
            array[i] = new Array(innerLength);

            for (let j = 0; j < innerLength; j++) {
                if (j === 0) {
                    array[i][j] = true;
                } else {
                    array[i][j] = false;
                }
            }
        }
        this.state = {
            open: { ...array }
        }
        console.log(this.state)
    }

    handleClick = (index, yearIndex) => {
        this.setState(state => {
            let list = state.open;
            list[index][yearIndex] = !list[index][yearIndex];
            return list;
        })
    }

    render() {
        const { open } = this.state;
        const alumni = Data.alumni;
        const section = Object.entries(alumni).map((titleAndObject, index) => {
            return (
                <div className="mb4 pb2" key={titleAndObject[0]}>
                    <h1 className="self-gold pb2 " >{titleAndObject[0]}</h1>
                    {
                        Object.entries(titleAndObject[1]).map((yearAndObject, yearIndex) => {
                            return (
                                <div className="black tl pa2 mb2 mt3 bg-near-white" key={yearAndObject[0]}>
                                    <button className="dim navy f4 b w-100 tl bn pl2 pt1"
                                        onClick={() => this.handleClick(index, yearIndex)}
                                    >
                                        {yearAndObject[0].substr(5, 4)} {}
                                        {!open[index][yearIndex] ?
                                            <span
                                                className="navy dib link"
                                                style={{ animation: "shiftDownAnimation 2s infinite" }}
                                            > ↓
                                            </span>
                                            :
                                            <span
                                                className="navy dib link"
                                                style={{ animation: "shiftUpAnimation 2s infinite" }}
                                            > ↑
                                            </span>
                                        }
                                    </button>
                                    {open[index][yearIndex] ?
                                        <div>
                                            {
                                                yearAndObject[1].map((content, contentIndex) => {
                                                    return (
                                                        <div className="tl normal" key={contentIndex}>
                                                            <p className="b f5 pb1">
                                                                ✰ {content.content}
                                                            </p>
                                                            <p className="f5 pb2">
                                                                {content.name}
                                                            </p>
                                                        </div>
                                                    );
                                                })
                                            }
                                            <button
                                                className="dim grow w-100 center f4 pb1 bn"
                                                onClick={() => this.handleClick(index, yearIndex)}
                                            >↑
                                            </button>
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
            <div className="mw8 mw8-ns center bg-mid-gray pa2 ph5-ns shadow-5 br1">
                {section}
            </div>
        );
    }
}

export default Alumni;