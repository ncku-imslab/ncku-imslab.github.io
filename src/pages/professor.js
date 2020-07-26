import React, { useState } from 'react';
import Markdown from 'react-markdown';
import professorData from '../data/members/prof';
import Prof from '../data/members/prof.json';

const professor = { ...professorData };

Object.entries(professor).forEach(([key, value]) => {
    professor[key] = <Markdown source={value} />
});

// React Hooks for 1D array
const Professor = () => {
    const [open, openUp] = useState([true]);

    function handleClick(index) {
        const list = { ...open };
        list[index] = !list[index];
        openUp(list);
    }

    const contactSection = Object.entries(Prof).map((titleAndObject, index) => {
        return (
            <div className="pb2" key={titleAndObject[0]}>
                <span className="lh-copy measure center f5 near-black db b pv1">
                    {titleAndObject[0]}
                </span>
                <span className={titleAndObject[0] === "信箱 Email" ?
                    "dim lh-copy measure center f5 near-black db pv1"
                    : "lh-copy measure center f5 near-black db pv1"}
                > {titleAndObject[1]}
                </span>
            </div>
        );
    });

    const infoSection = Object.entries(professor).map((entries, index) => {
        return (
            <div className="black tl pa2 br1 mb2 mt3 bg-near-white"
                key={entries[0]}
            >
                <button className="navy dim f4 b w-100 tl bn pt1"
                    onClick={() => handleClick(index)}
                > {entries[0]} {}
                    {!open[index] ?
                        <span className="dib link"
                            style={{ animation: "shiftDownAnimation 2s infinite" }}
                        > ↓ </span>
                        :
                        <span className="dib link"
                            style={{ animation: "shiftUpAnimation 2s infinite" }}
                        > ↑ </span>
                    }
                </button>
                {open[index] ?
                    <div className="pt2 ph3 tl f5 f5-ns lh-copy near-black">
                        <span className="f5"> {entries[1]} </span>
                        <button className="dim grow w-100 center f4 pb1 bn"
                            onClick={() => handleClick(index)}
                        > ↑ </button>
                    </div>
                    : null
                }
            </div>
        );
    });
    const today = new Date();
    const month = today.getMonth();
    const date = today.getDate();

    return (
        <div className="mw8 mw8-ns center bg-mid-gray pa2 ph5-ns shadow-5">
            <div className="mb4 pb2">
                <h1 className="pb2 self-gold"> 指導教授 Professor </h1>
                <div className="bg-white center pv3 br1"
                    style={{ maxWidth: "21rem" }}
                >
                    <img alt="The nicest professor in NCKU CSIE is staring at you σ`∀´)σ"
                        src={require('../images/tsaimh.jpg')}
                        className="br-100 h4 w4 center db ba b--black-10 pa2 pointer"
                        onClick={month === 2 && date === 20 ? () => { window.alert("Today is Meng-Hsun's birthday ｡:.ﾟヽ(*´∀`)ﾉﾟ.:｡\nToday is Meng-Hsun's birthday ｡:.ﾟヽ(*´∀`)ﾉﾟ.:｡\nToday is Meng-Hsun's birthday ｡:.ﾟヽ(*´∀`)ﾉﾟ.:｡") }
                            : null}
                        title=""
                    />
                    <a className="ttu dim link db f4 f4-ns navy b pt2 pb1 mv1" href="http://imslab.org/~tsaimh/"> 蔡 孟 勳 </a>
                    <a className="ttu tracked dim link db f5 f5-ns navy b pv1 mv1" href="http://imslab.org/~tsaimh/"> Meng-Hsun Tsai ↗ </a>
                    <hr className="mw3 bb bw1 b--black-10 mt2 mb3" />
                    {contactSection}
                </div>
                {infoSection}
            </div>
        </div>
    )
}

export default Professor;