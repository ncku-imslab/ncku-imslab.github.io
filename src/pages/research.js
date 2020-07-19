import React, { Component, useState } from 'react';
import Markdown from 'react-markdown';
import ResearchesData from '../data/researches/researches';
import Projects from '../data/researches/projects.json';

const researches = { ...ResearchesData };

Object.entries(researches).forEach(([key, value]) => {
    researches[key] = <Markdown
        source={value}
        linkTarget="_blank" />
});

const researchSection = Object.entries(researches).map((entries) => {
    return (
        <div className="pb2">
            <h1 className="navy pb2 bb bw1">
                {entries[0]}
            </h1>
            <p className="pt1 ph3 tl f5 f5-ns lh-copy ba b--navy br1">
                {entries[1]}
            </p>
        </div>
    );
});

// React Hook cannot be used in map() of line 47
class Research extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: [2]
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(index) {
        // The idea of setstate() being asynchronous is perhaps that only after the state is retrieved can we proceed.
        this.setState(state => {
            let list = state.open;
            list[index] = !list[index];
            return list;
        })
    }

    render() {
        const { open } = this.state;
        const projectsSection = Object.entries(Projects).map(([entries, values]) => {
            const index = entries === "independent";
            return (
                <div className="black tl pv2 ph1 ba b--navy br1 mb2 mt3">
                    <button className="dim navy f4 b w-100 tl bn pt1 pl2"
                        onClick={() => this.handleClick(index)}
                    >
                        {index ?
                            "主持計畫 PI Projects " :
                            "合作計畫 Co-PI Projects "
                        }
                        {!open[index] ?
                            <a
                                href=""
                                className="navy dib link"
                                style={{ animation: "shiftDownAnimation 2s infinite" }}
                            > ↓
                            </a>
                            :
                            <a
                                href=""
                                className="navy dib link"
                                style={{ animation: "shiftUpAnimation 2s infinite" }}
                            > ↑
                            </a>
                        }
                    </button>
                    
                    {open[index] ?
                        <div className="pl4 pr3">
                            <p className="pt1 mt1"></p>
                            {values.map((value) => {
                                return (
                                    <div className="normal">
                                        <p className="b f5 pb1">
                                            {value.name}
                                        </p>
                                        <p className="f5">
                                            <a className="near-black">- 時間 Duration: </a>{value.duration}
                                        </p>
                                        <p className="f5 pb3">
                                            <a className="near-black">- 補助單位 Sponsor:</a> {value.subsidy}
                                        </p>
                                    </div>
                                );
                            })}
                            <button
                                className="dim grow w-100 center f4 pb2 bn"
                                onClick={() => this.handleClick(index)}
                            >↑
                            </button>
                        </div>
                        : null
                    }
                </div>
            );
        })

        return (
            <div className="mw8 mw8-ns center bg-near-white pa2 ph5-ns shadow-5 br1">
                {researchSection}
                <div className="pb3">
                    <h1 className="navy pb2 bb bw1">
                        研究計畫 Projects
                    </h1>
                    {projectsSection}
                </div>
            </div>
        );
    }
}

export default Research;