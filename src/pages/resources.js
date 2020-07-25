import React, { useState } from 'react';
import Markdown from 'react-markdown';
import resourcesData from '../data/resources';

const resources = { ...resourcesData };

Object.entries(resources).forEach(([key, value]) => {
    resources[key] = <Markdown source={value} />
});

const Resources = () => {
    const [open, openUp] = useState([true]);

    const handleClick = (index) => {
        let list = { ...open };
        list[index] = !list[index];
        openUp(list);
    }

    const section = Object.entries(resources).map((entries, index) => {
        return (
            <div className="black tl pa2 ba b--navy br1 mb2 mt3" key={entries[0]}>
                <button className="dim navy f4 b w-100 tl bn pt1 pl2"
                    onClick={() => handleClick(index)}
                > {entries[0]} {}
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
                    <div className="pt2 ph3 tl f5 f5-ns lh-copy">
                        <span className="f5"> {entries[1]} </span>
                        <button
                            className="dim grow w-100 center f4 pb1 bn"
                            onClick={() => handleClick(index)}
                        > ↑ </button>
                    </div>
                    : null
                }
            </div>
        );
    });
    
    return (
        <div className="mw8 mw8-ns center bg-near-white pa2 ph5-ns shadow-5 br1">
            <div className="mb4 pb2">
                <h1 className="navy pb2 bb bw1"> 相關資源 Resources </h1>
                {section}
            </div>
        </div>
    );
}

export default Resources;