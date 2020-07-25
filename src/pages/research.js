import React, { useState } from 'react';
import Markdown from 'react-markdown';
import ResearchesData from '../data/researches/researches';
import Projects from '../data/researches/projects.json';

const researches = { ...ResearchesData };

Object.entries(researches).forEach(([key, value]) => {
    researches[key] = <Markdown source={value} />
});

const researchSection = Object.entries(researches).map((entries) => {
    return (
        <div className="mb4 pb2" key={entries[0]}>
            <h1 className="navy pb2 bb bw1"> {entries[0]} </h1>
            <div className="pt1 ph3 tl f5 f5-ns lh-copy ba b--navy br1">
                {entries[1]}
            </div>
        </div>
    );
});

const Research = () => {
    const [open, openUp] = useState([]);

    function handleClick(index) {
        let list = { ...open };
        list[index] = !list[index];
        openUp(list);
    }

    const section = Object.entries(Projects).map((titleAndObject, index) => {
        return (
            <div className="black tl pa2 ba b--navy br1 mb2 mt3" key={titleAndObject[0]}>
                <button className="dim navy f4 b w-100 tl bn pt1 pl2"
                    onClick={() => handleClick(index)}
                >
                    {titleAndObject[0]} {}
                    {!open[index] ?
                        <span className="navy dib link"
                            style={{ animation: "shiftDownAnimation 2s infinite" }}
                        > ↓ </span>
                        :
                        <span className="navy dib link"
                            style={{ animation: "shiftUpAnimation 2s infinite" }}
                        > ↑ </span>
                    }
                </button>

                {open[index] ?
                    <div className="ph4 pt1 mt1">
                        {titleAndObject[1].map((value, idx) => {
                            return (
                                <div key={idx}>
                                    <p className="b f5 pb1">
                                        {value.name}
                                    </p>
                                    <p className="f5">
                                        <span className="near-black">- 時間 Duration: </span>{value.duration}
                                    </p>
                                    <p className="f5 pb3">
                                        <span className="near-black">- 補助單位 Sponsor:</span> {value.subsidy}
                                    </p>
                                </div>
                            );
                        })}
                        <button className="dim grow w-100 center f4 pb1 bn"
                            onClick={() => handleClick(index)}
                        > ↑ </button>
                    </div>
                    : null
                }
            </div>
        );
    })

    return (
        <div className="mw8 mw8-ns center bg-near-white pa2 ph5-ns shadow-5 br1">
            {researchSection}
            <div className="mb4 pb2">
                <h1 className="navy pb2 bb bw1"> 研究計畫 Research Projects </h1>
                {section}
            </div>
        </div>
    );
}

export default Research;