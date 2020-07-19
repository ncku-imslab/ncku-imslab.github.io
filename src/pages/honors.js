import React, { Component } from 'react';
import Honor from '../data/honors.json';

class Honors extends Component {
    constructor(props) {
        super(props);

        let outerLength = Object.keys(Honor).length;
        let array = new Array(outerLength);

        for (let i = 0; i < outerLength; i++) {
            let innerLength = Object.keys(Honor)[i].length;
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
        const honorsSection = Object.entries(Honor).map((titleAndObject, index) => {
            return (
                <div className="pb4" key={titleAndObject[0]}>
                    <h1 className="navy pb2 near-black bb bw1" >{titleAndObject[0]}</h1>
                    {
                        Object.entries(titleAndObject[1]).map((yearAndObject, yearIndex) => {
                            return (
                                <div className="black tl pv2 ph2 ba b--navy br1 mb2 mt3" key={yearAndObject[0]}>
                                    <button className="dim navy f4 b w-100 tl bn pl2"
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
                                        <div className="pl4 pr3 pt1 mt1">
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
            <div className="mw8 mw8-ns center bg-near-white pa2 ph5-ns shadow-5 br1">
                {honorsSection}
            </div>
        );
    }
}

export default Honors;