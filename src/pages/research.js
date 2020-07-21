import React, { Component } from 'react';
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
        <div className="mb4 pb2" key={entries[0]}>
            <h1 className="navy pb2 bb bw1">
                {entries[0]}
            </h1>
            <div className="pt1 ph3 tl f5 f5-ns lh-copy ba b--navy br1">
                {entries[1]}
            </div>
        </div>
    );
});

// React Hook cannot be used in map() of line 47
class Research extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: []
        }
        //this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (index) => {
        this.setState(state => {
            let list = state.open;
            list[index] = !list[index];
            return list;
        })
    }

    render() {
        const { open } = this.state;
        const section = Object.entries(Projects).map(([entries, values]) => {
            const index = entries === "independent";
            return (
                <div className="black tl pa2 ba b--navy br1 mb2 mt3" key={entries}>
                    <button className="dim navy f4 b w-100 tl bn pt1 pl2"
                        onClick={() => this.handleClick(index)}
                    >
                        {index ?
                            "主持計畫 PI Projects " :
                            "合作計畫 Co-PI Projects "
                        }
                        {!open[index] ?
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
                    
                    {open[index] ?
                        <div className="ph4 pt1 mt1">
                            {values.map((value, idx) => {
                                return (
                                    <div className="normal" key={idx}>
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
                            <button
                                className="dim grow w-100 center f4 pb1 bn"
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
                <div className="mb4 pb2">
                    <h1 className="navy pb2 bb bw1">
                        研究計畫 Research Projects
                    </h1>
                    {section}
                </div>
            </div>
        );
    }
}

export default Research;